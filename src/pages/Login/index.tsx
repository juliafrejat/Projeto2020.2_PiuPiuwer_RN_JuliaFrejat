import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Page from '../../components/Page';
import { FormTitle, InputComponent } from './styles';
import { ButtonTextComponent, Form } from './styles';

function Login() {
    return (
        <Page color="#FFFFFF" alignment="center">
            <Header isGreen={false}>
                <Button isGreen={true}>
                    <ButtonTextComponent>
                        Cadastre-se
                    </ButtonTextComponent>
                </Button>
            </Header>

            <Form>
                <FormTitle>Entrar</FormTitle>
                <InputComponent placeholder="Nome de usuário" />
                <InputComponent placeholder="Senha" />
                <Button isGreen={true}>
                    <ButtonTextComponent>
                        Continuar
                    </ButtonTextComponent>
                </Button>
            </Form>
        </Page>
    )
}

export default Login;