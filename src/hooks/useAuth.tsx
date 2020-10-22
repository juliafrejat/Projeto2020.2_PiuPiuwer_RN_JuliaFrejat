import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import * as Yup from 'yup';

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
    logIn(user: object): Promise<void>;
    logOut(): Promise<void>;
    signUp(user: object): Promise<void>;
    errorTxt: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [errorTxt, setErrorTxt] = useState<string>('');

    useEffect(() => {
        const loadUserData = async () => {
            const token = await AsyncStorage.getItem('@Project:token');
            const user = await AsyncStorage.getItem('@Project:user');

            if (user && token) {
                api.defaults.headers.Authorization = `JWT ${token}`;
                setData({ user: JSON.parse(user), token: token });
            }
        }
        loadUserData();
    }, []);
    
    const logIn = useCallback(async ({username, password}) => {
        try {
            const esquema = Yup.object().shape({
                username: Yup.string().required('Nome de usuário obrigatório.'),
                password: Yup.string().required('Senha obrigatória.'),
            });
            await esquema.validate({username, password}, { abortEarly: false });

            try {
                const response = await api.post('/login/', {username, password});
                const { token } = response.data;
    
                if (!!token) {
                    const userResponse = await api.get('/usuarios/?search='+ username);
                    const user = userResponse.data[0];
                    await AsyncStorage.multiSet([['@Project:token', token],['@Project:user', JSON.stringify(user)]]);
    
                    api.defaults.headers.Authorization = `JWT ${token}`;
                    setData({ token, user });
    
                    setErrorTxt('');
                }
            } catch (error) {
                console.log(error);
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
            
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                console.log(err);
                setErrorTxt(err.inner[0].message);
            }
        }


        
    }, []);

    const logOut = async () => {
        await AsyncStorage.removeItem('@Project:token');
        await AsyncStorage.removeItem('@Project:user');
        setData({} as AuthState);
    };

    const signUp = useCallback(async ({username, firstName, lastName, email, password, bio, photo}) => {
        try {
            const esquema = Yup.object().shape({
                username: Yup.string().required('Nome de usuário obrigatório.'),
                firstName: Yup.string().required('Nome obrigatório.'),
                lastName: Yup.string().required('Sobrenome obrigatório.'),
                email: Yup.string().required('E-mail obrigatório.'),
                password: Yup.string().required('Senha obrigatória.'),
                bio: Yup.string().required('Sobre obrigatório.'),
                photo: Yup.string().required('Foto obrigatória.'),
            });
            await esquema.validate({username, firstName, lastName, email, password, bio, photo}, { abortEarly: false });
   
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                console.log(err);
                setErrorTxt(err.inner[0].message);
            }
        };
    }, []);

    return (
        <AuthContext.Provider value={{token: data.token, loggedUserData: data.user, logIn, logOut, signUp, errorTxt}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}

export default useAuth;