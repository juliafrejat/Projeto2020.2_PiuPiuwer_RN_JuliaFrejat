import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import useLoading from '../../hooks/useLoading';
import useAuth from '../../hooks/useAuth';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Page from '../../components/Page';
import { ErrorText, FormTitle, InputComponent } from './styles';
import { ButtonTextComponent, Form } from './styles';
import { Keyboard } from 'react-native';

function Singup() {
    const { logIn, errorTxt } = useAuth();
    const { setIsLoading } = useLoading();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = useCallback(async () => {
        setIsLoading(true);
        await logIn({username, password});
        setIsLoading(false);
    }, [username, password, logIn, setIsLoading]);

    const { navigate } = useNavigation();

    function handleNavigateToLoginPage() {
        Keyboard.dismiss();
        navigate('Login');
    }

    return (
        <Page color="#FFFFFF">
            <Header isGreen={false}>
                <Button isGreen={true}>
                    <ButtonTextComponent onPress={handleNavigateToLoginPage}>
                        Entrar
                    </ButtonTextComponent>
                </Button>
            </Header>

            <Form>
                <FormTitle>Cadastre-se</FormTitle>
                <InputComponent 
                    placeholder="Nome de usuário" 
                    onChangeText={
                        (text: string) => {setUsername(text)}
                    } 
                />
                <InputComponent 
                    placeholder="Nome" 
                    onChangeText={
                        (text: string) => {setUsername(text)}
                    } 
                />
                <InputComponent 
                    placeholder="Sobrenome" 
                    onChangeText={
                        (text: string) => {setUsername(text)}
                    } 
                />
                <InputComponent 
                    placeholder="E-mail" 
                    onChangeText={
                        (text: string) => {setUsername(text)}
                    } 
                />
                <InputComponent 
                    placeholder="Senha" 
                    onChangeText={
                        (text: string) => {setPassword(text)}
                    } 
                    secureTextEntry
                />
                <InputComponent 
                    placeholder="Sobre" 
                    onChangeText={
                        (text: string) => {setUsername(text)}
                    } 
                />
                <InputComponent 
                    placeholder="Foto de perfil" 
                    onChangeText={
                        (text: string) => {setUsername(text)}
                    } 
                />
                <ErrorText>{errorTxt}</ErrorText>
                <Button isGreen={true}>
                    <ButtonTextComponent onPress={handleLogIn}>
                        Continuar
                    </ButtonTextComponent>
                </Button>
            </Form>
        </Page>
    )
}

export default Singup;