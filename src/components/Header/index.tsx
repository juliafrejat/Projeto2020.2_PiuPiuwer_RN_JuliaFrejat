import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

import { HeaderComponent } from './styles';
import Button from '../Button/index';
import SearchBar from '../SearchBar/index'

import logoImg from '../../assets/passaro.svg';


interface HeaderProps {
    isGreen: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
    const isGreen = props.isGreen;

    if (isGreen){
        return (
            <HeaderComponent>
                <View>
                    <Image source={logoImg} />
                    <Text>PiuPiuwer</Text>
                </View>

                <View>
                    <SearchBar />
                </View>
            </HeaderComponent>
        )
    } else {
        return (
            <HeaderComponent>
                <View>
                    <Image source={logoImg} />
                    <Text>PiuPiuwer</Text>
                </View>

                <Button isGreen={true}>
                    <Text>Cadastre-se</Text>
                </Button>
            </HeaderComponent>
        )
    }
    
}

export default Header;