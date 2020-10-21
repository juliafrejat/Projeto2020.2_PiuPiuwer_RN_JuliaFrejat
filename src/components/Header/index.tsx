import React from 'react';

import { View } from 'react-native';
import { HeaderComponent, TitleComponent, TitleTextComponent } from './styles';

import Logo from '../../assets/Logo'; 

interface HeaderProps {
    isGreen: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <HeaderComponent isGreen={props.isGreen}>
            <TitleComponent>
                <Logo height={30} width={30} />
                <TitleTextComponent isGreen={props.isGreen}>PiuPiuwer</TitleTextComponent>
            </TitleComponent>
            {props.children}
        </HeaderComponent>
    )
}

export default Header;