import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import usePius from '../../hooks/usePius';
import useAuth from '../../hooks/useAuth';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { 
    ButtonsComponent, 
    ButtonTextComponent, 
    ContainerComponent, 
    Counter, 
    EmptyErrorMsg, 
    NewPiuComponent, 
    PiuContainerComponent, 
    ProfileImageBoxComponent, 
    ProfileImageComponent, 
    TextareaComponent, 
    TooLongErrorMsg
} from './styles';

import { Feather } from '@expo/vector-icons';


function NewPiuPage() {
    const { navigate } = useNavigation();

    function handleClosePage() {
        navigate('Feed');
    }

    const { sendPiu } = usePius();
    const { loggedUserData } = useAuth();

    const [textoDePiu, setTextoDePiu] = useState('');

    const handleTextPiuChange = useCallback((text) => {
        setTextoDePiu(text);
    }, [setTextoDePiu]);

    const handleSendPiu = useCallback(async () => {
        if (textoDePiu.length > 0 && textoDePiu.length <= 140) {
            sendPiu(loggedUserData.id, textoDePiu);
            navigate('Feed');
        } else {
            setClick(true);
        }
    }, [sendPiu, loggedUserData, textoDePiu])

    const [error, setError] = useState(false);

    const [click, setClick] = useState(false);

    useEffect(() => {
        if (textoDePiu.length > 0 && textoDePiu.length <= 140) {
            setError(false);
            setClick(false);
        } else {
            setError(true);
            setClick(false);
        }
    }, [textoDePiu.length])

    return (
        <Page color="#F8F9FA">
            <Header isGreen={true}>
                <TouchableOpacity onPress={handleClosePage}>
                    <Feather name='x' color='#FFFFFF' size={25} />
                </TouchableOpacity>
            </Header>

            <NewPiuComponent>
            <PiuContainerComponent>
                <ProfileImageBoxComponent>
                    <ProfileImageComponent source={{uri: loggedUserData.foto}} />
                </ProfileImageBoxComponent>
                <TextareaComponent
                    multiline={true} 
                    numberOfLines={10}
                    placeholder="Digite seu novo piu."
                    onChangeText={(text: string) => {handleTextPiuChange(text)}} 
                    error={error}
                />
            </PiuContainerComponent>

            <ContainerComponent>
                <Counter limitReached={textoDePiu.length > 140}>{textoDePiu.length}/140</Counter>
                <EmptyErrorMsg isEmpty={textoDePiu.length === 0} click={click}>O piu não pode estar vazio.</EmptyErrorMsg>
                <TooLongErrorMsg limitReached={textoDePiu.length > 140} click={click}>O piu não pode ter mais de 140 caracteres.</TooLongErrorMsg>
                <ButtonsComponent>
                    <Feather name='image' size={25} color='#6C757D' />
                    <Feather name='camera' size={25} color='#6C757D' />
                    <Feather name='smile' size={25} color='#6C757D' />
                    <Feather name='map-pin' size={25} color='#6C757D' />
                </ButtonsComponent>

                <Button isGreen={true} isNotActive={error}>
                    <ButtonTextComponent isGreen={true} onPress={handleSendPiu}>
                        PiuPiu
                    </ButtonTextComponent>
                </Button>
            </ContainerComponent>
        </NewPiuComponent>
        </Page>
    )
}

export default NewPiuPage;