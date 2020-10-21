import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonComponent } from './styles';



interface ButtonProps extends TouchableOpacityProps {
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