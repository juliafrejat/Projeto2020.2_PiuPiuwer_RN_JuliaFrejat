import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
    isGreen: boolean;
}

export const ButtonComponent = styled.TouchableOpacity<ButtonProps>`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    margin: 10px 0px;
    text-align: center;
    border-radius: 10px;
    border: ${props => props.isGreen ? 'none' : '2px solid #52B788'};
    background-color: ${props => props.isGreen ? '#52B788' : '#FFFFFF'};
`;