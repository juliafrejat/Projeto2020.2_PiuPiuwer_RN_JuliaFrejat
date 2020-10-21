import React from 'react';
import { BaseButtonProperties } from 'react-native-gesture-handler';

import { ButtonComponent } from './styles';



interface ButtonProps extends BaseButtonProperties {
    isGreen: boolean;
    isNotActive?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonComponent
            isGreen={props.isGreen}
            isNotActive={props.isNotActive}
        >
            {props.children}
        </ButtonComponent>
    )
}

export default Button;