import React, { useCallback, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Page from '../../components/Page';
import { ClickableText, ErrorText, FormTitle, InputComponent } from './styles';
import { ButtonTextComponent, Form } from './styles';

function Login() {
    const { logIn, errorTxt } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = useCallback((e: any) => {
        //logIn({username, password});
        console.log('ok');
    }, [username, password, logIn]);

    return (
        <Page color="#FFFFFF">
            <Header isGreen={false}>
                <Button isGreen={true}>
                    <ButtonTextComponent>
                        Cadastre-se
                    </ButtonTextComponent>
                </Button>
            </Header>

            <Form>
                <FormTitle>Entrar</FormTitle>
                <InputComponent placeholder="Nome de usuário" onChangeText={(text: string) => {setUsername(text)}} />
                <InputComponent placeholder="Senha" onChangeText={(text: string) => {setPassword(text)}} />
                <ErrorText>{errorTxt}</ErrorText>
                <Button isGreen={true} onPress={handleLogIn}>
                    <ButtonTextComponent>
                        Continuar
                    </ButtonTextComponent>
                </Button>
                <ClickableText>Esqueceu a senha?</ClickableText>
            </Form>
        </Page>
    )
}

export default Login;