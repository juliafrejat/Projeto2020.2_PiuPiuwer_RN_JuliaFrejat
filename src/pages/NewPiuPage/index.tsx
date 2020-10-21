import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { 
    ButtonContainerComponent,
    ButtonsComponent, 
    ButtonTextComponent, 
    ContainerComponent, 
    NewPiuComponent, 
    ProfileImageBoxComponent, 
    TextareaComponent 
} from './styles';

import { Feather } from '@expo/vector-icons';


function NewPiuPage() {
    const { navigate } = useNavigation();

    function handleClosePage() {
        navigate('Feed');
    }

    return (
        <Page color="#F8F9FA">
            <Header isGreen={true}>
                <TouchableOpacity onPress={handleClosePage}>
                    <Feather name='x' color='#FFFFFF' size={25} />
                </TouchableOpacity>
            </Header>

            <NewPiuComponent>
            <ContainerComponent>
                <ProfileImageBoxComponent>
                    {/* <ProfileImageComponent source={} /> */}
                </ProfileImageBoxComponent>
                <TextareaComponent
                    multiline={true} 
                    numberOfLines={10}
                    placeholder="Digite seu novo piu." 
                />
            </ContainerComponent>

            <ButtonContainerComponent>
                <ButtonsComponent>
                    <Feather name='image' size={25} color='#6C757D' />
                    <Feather name='camera' size={25} color='#6C757D' />
                    <Feather name='smile' size={25} color='#6C757D' />
                    <Feather name='map-pin' size={25} color='#6C757D' />
                </ButtonsComponent>

                <Button isGreen={true}>
                    <ButtonTextComponent isGreen={true}>
                        PiuPiu
                    </ButtonTextComponent>
                </Button>
            </ButtonContainerComponent>
        </NewPiuComponent>
        </Page>
    )
}

export default NewPiuPage;