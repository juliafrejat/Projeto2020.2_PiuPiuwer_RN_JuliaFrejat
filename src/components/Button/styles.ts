import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    isGreen: boolean;
}

export const ButtonComponent = styled(RectButton)<ButtonProps>`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    margin: 10px 0px;
    text-align: center;
    border-radius: 10px;
    border: ${props => props.isGreen ? 'none' : '2px solid #52B788'};
    background-color: ${props => props.isGreen ? '#52B788' : '#FFFFFF'};
`;