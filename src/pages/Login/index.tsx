import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import useLoading from '../../hooks/useLoading';
import useAuth from '../../hooks/useAuth';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Page from '../../components/Page';
import { ClickableText, ErrorText, FormTitle, InputComponent } from './styles';
import { ButtonTextComponent, Form } from './styles';
import { Keyboard } from 'react-native';


function Login() {
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

    function handleNavigateToSignupPage() {
        Keyboard.dismiss();
        navigate('Signup');
    }

    return (
        <Page color="#FFFFFF">
            <Header isGreen={false}>
                <Button isGreen={true}>
                    <ButtonTextComponent onPress={handleNavigateToSignupPage}>
                        Cadastre-se
                    </ButtonTextComponent>
                </Button>
            </Header>

            <Form>
                <FormTitle>Entrar</FormTitle>
                <InputComponent 
                    placeholder="Nome de usuário" 
                    onChangeText={(text: string) => {setUsername(text)}} 
                />
                <InputComponent 
                    placeholder="Senha" 
                    onChangeText={(text: string) => {setPassword(text)}} 
                    secureTextEntry
                />
                <ErrorText>{errorTxt}</ErrorText>
                <Button isGreen={true}>
                    <ButtonTextComponent onPress={handleLogIn}>
                        Continuar
                    </ButtonTextComponent>
                </Button>
                <ClickableText>Esqueceu a senha?</ClickableText>
            </Form>
        </Page>
    )
}

export default Login;