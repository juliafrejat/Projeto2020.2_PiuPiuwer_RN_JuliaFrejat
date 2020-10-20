import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import api from '../services/api';
import { useAuth, User } from './useAuth';

export interface PiuData {
    usuario: User;
    likers: Array<User>;
    favoritado_por: Array<User>;
    texto: string;
    horario: string;
    id: number;
}

interface PiusContextData {
    pius: Array<PiuData>;
    likedPiusIds: Array<number>;
    favoritedPiusIds: Array<number>;
    piusRequest(): Promise<void>;
    sendPiu(idUsuarioLogado: number, textoPiu: string): Promise<void>;
    favoritePiu(piuId: number): Promise<void>;
    likePiu(piuId: number): Promise<void>;
    deletePiu(piuId: number): Promise<void>;
}

const PiusContext = createContext<PiusContextData>({} as PiusContextData);

export const PiusProvider: React.FC = ({children}) => {
    const { loggedUserData } = useAuth();

    const [pius, setPius] = useState<Array<PiuData>>([] as Array<PiuData>);

    const piusRequest = useCallback(async () => {
        const response = await api.get('/pius/')
        setPius(response.data)
    }, []);

    const sendPiu = useCallback(async (idUsuarioLogado, textoPiu) => {
        const response = await api.post('/pius/', {
            usuario: idUsuarioLogado,
            texto: textoPiu
        })
        setPius([ response.data, ...pius ]);
    }, [setPius, pius])

    const likedPiusIds = useMemo(() => {
        const likedPius = pius.filter(piu => {
            const usuariosQueDeramLike = piu.likers.map(user => user.id)
            return usuariosQueDeramLike.includes(loggedUserData.id);
        })
        return likedPius.map(piu => piu.id);
    }, [pius, loggedUserData])

    const favoritedPiusIds = useMemo(() => {
        const favoritedPius = pius.filter(piu => {
            const usuariosQueFavoritaram = piu.favoritado_por.map(user => user.id)
            return usuariosQueFavoritaram.includes(loggedUserData.id);
        })
        return favoritedPius.map(piu => piu.id);
    }, [pius, loggedUserData])

    const likePiu = useCallback(async (piuId: number) => {
        await api.post('/pius/dar-like/', {
            usuario: loggedUserData.id,
            piu: piuId
        })
        let updatedPius = pius.slice();
        updatedPius = updatedPius.map((piu) => {
            if (piuId === piu.id) {
                if (!piu.likers.includes(loggedUserData)) {
                    piu.likers.push(loggedUserData);
                } else {
                    const userIndex = piu.likers.indexOf(loggedUserData);
                    piu.likers.splice(userIndex, 1)
                }
            }
            return piu;
        })

        setPius(updatedPius);
    }, [loggedUserData, pius])
    
    const favoritePiu = useCallback(async (piuId: number) => {
        await api.post('/pius/favoritar/', {
            usuario: loggedUserData.id,
            piu: piuId
        })
        let updatedPius = pius.slice();
        updatedPius = updatedPius.map((piu) => {
            if (piuId === piu.id) {
                if (!piu.favoritado_por.includes(loggedUserData)) {
                    piu.favoritado_por.push(loggedUserData);
                } else {
                    const userIndex = piu.favoritado_por.indexOf(loggedUserData);
                    piu.favoritado_por.splice(userIndex, 1)
                }            }
            return piu;
        })

        setPius(updatedPius);
    }, [loggedUserData, pius])

    const deletePiu = useCallback(async (piuId: number) => {
        await api.delete(`/pius/${piuId}`)
        const updatedPius = pius.filter((piu) => {
            return piu.id !== piuId;
        })
        setPius(updatedPius);
    }, [pius])

    return (
        <PiusContext.Provider 
            value={{ 
                pius, 
                likedPiusIds,
                favoritedPiusIds,
                piusRequest, 
                sendPiu, 
                favoritePiu, 
                likePiu, 
                deletePiu 
            }}
        >
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;
}