import React from 'react';

import { View } from 'react-native';
import { HeaderComponent, TitleComponent, TitleImageComponent, TitleTextComponent } from './styles';

import logoImg from '../../assets/passaro.svg';

interface HeaderProps {
    isGreen: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <HeaderComponent isGreen={props.isGreen}>
            <TitleComponent>
                <View>
                    <TitleImageComponent source={logoImg} />
                </View>
                <TitleTextComponent isGreen={props.isGreen}>PiuPiuwer</TitleTextComponent>
            </TitleComponent>
            {props.children}
        </HeaderComponent>
    )
}

export default Header;