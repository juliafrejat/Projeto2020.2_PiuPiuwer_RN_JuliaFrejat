import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import { InputComponent } from './styles';

//import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/passaro.svg';


const Input: React.FC = () => {
    return (
        <InputComponent>
            <RectButton><Image source={logoImg} /></RectButton>
        </InputComponent>
    )
}

export default Input;