import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import useLoading from '../../hooks/useLoading';
import useAuth from '../../hooks/useAuth';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Page from '../../components/Page';
import { ErrorText, FormTitle, InputComponent, SignupText } from './styles';
import { ButtonTextComponent, Form } from './styles';
import { Keyboard } from 'react-native';

function Singup() {
    const { signUp, errorTxt } = useAuth();
    const { setIsLoading } = useLoading();

    const { navigate } = useNavigation();

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [photo, setPhoto] = useState('');

    const [success, setSuccess] = useState(false);

    const handleSignUp = useCallback(async () => {
        setIsLoading(true);
        signUp({username, firstName, lastName, email, password, bio, photo});
        setSuccess(true);
        setIsLoading(false);
    }, [username, password, signUp, setIsLoading]);

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
                    onChangeText={(text: string) => {setUsername(text)}} 
                />
                <InputComponent 
                    placeholder="Nome" 
                    onChangeText={(text: string) => {setFirstName(text)}} 
                />
                <InputComponent 
                    placeholder="Sobrenome" 
                    onChangeText={(text: string) => {setLastName(text)}} 
                />
                <InputComponent 
                    placeholder="E-mail" 
                    onChangeText={(text: string) => {setEmail(text)}} 
                />
                <InputComponent 
                    placeholder="Senha" 
                    onChangeText={(text: string) => {setPassword(text)}} 
                    secureTextEntry
                />
                <InputComponent 
                    placeholder="Sobre" 
                    onChangeText={(text: string) => {setBio(text)}} 
                />
                <InputComponent 
                    placeholder="Foto de perfil" 
                    onChangeText={(text: string) => {setPhoto(text)}} 
                />
                <ErrorText>{errorTxt}</ErrorText>
                <SignupText show={success && !errorTxt}>Cadastro realizado com sucesso.</SignupText>
                <Button isGreen={true}>
                    <ButtonTextComponent onPress={handleSignUp}>
                        Continuar
                    </ButtonTextComponent>
                </Button>
            </Form>
        </Page>
    )
}

export default Singup;