import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import api from '../services/api';
import { PiuData } from './usePius';

export interface User {
    username: string;
    first_name: string;
    last_name: string;
    foto: string;
    seguidores?: Array<User>;
    id: number;
    pius: Array<PiuData>;
    favoritos: Array<User>;
    seguindo?: Array<User>;
    email: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface AuthContextData {
    loggedUserData: User;
    token: string;
    logIn(user: object): object;
    logOut(): void;
    errorTxt: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [errorTxt, setErrorTxt] = useState<string>('');

    useEffect(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            api.defaults.headers.Authorization = `JWT ${token}`;
            setData({ user: JSON.parse(user), token: token });
        }

    }, []);
    
    const logIn = useCallback(async ({username, password}) => {
        try {
            const response = await api.post('/login/', {username, password});
            const { token, user } = response.data;
            localStorage.setItem('@Project:token', token);
            localStorage.setItem('@Project:user', JSON.stringify(user));

            if (!!token) {
                const userResponse = await api.get('/usuarios/?search='+ username);
                const user = userResponse.data[0];
                localStorage.setItem('@Project:user', JSON.stringify(user));

                api.defaults.headers.Authorization = `JWT ${token}`;
                setData({ token, user });

                setErrorTxt('');
            }
        } catch (error) {
            const response = error.response.data;

            if (response.global) {
                setErrorTxt('Usuário e/ou senha incorretos');
            }

            if (response.username) {
                setErrorTxt('Usuário não pode ser em branco.');
            }

            if (response.password) {
                setErrorTxt('Senha não pode ser em branco.');
            }

            if (response.password && response.username) {
                setErrorTxt('Usuário e senha não podem ser em branco.');
            }
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem('@Project:token');
        localStorage.removeItem('@Project:user');
        setData({} as AuthState);
    }

    return (
        <AuthContext.Provider value={{token: data.token, loggedUserData: data.user, logIn, logOut, errorTxt}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}