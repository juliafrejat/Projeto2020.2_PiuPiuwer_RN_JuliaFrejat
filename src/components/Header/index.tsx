import React from 'react';

import { HeaderComponent, TitleComponent, TitleTextComponent } from './styles';
import SearchBar from '../SearchBar/index'

import logoImg from '../../assets/passaro.svg';


interface HeaderProps {
    isGreen: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <HeaderComponent isGreen={props.isGreen}>
            <TitleComponent>
                <TitleTextComponent source={logoImg} />
                <TitleTextComponent>PiuPiuwer</TitleTextComponent>
            </TitleComponent>
        {props.children}
            <SearchBar isGreen={props.isGreen} />
        </HeaderComponent>
    )
}

export default Header;