import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    isGreen: boolean;
}

export const ButtonComponent = styled(RectButton)<ButtonProps>`
    display: flex;
    align-items: center;
    width: 20px;
    padding: 5px 10px;
    text-align: center;
    border-radius: 5px;
    border: ${props => props.isGreen ? 'none' : '2px solid var(--color-primary)'};
    background-color: ${props => props.isGreen ? 'var(--color-primary)' : '#FFFFFF'};

    Text {
        color: ${props => props.isGreen ? '#FFFFFF' : 'var(--color-primary)'};
        font-family: 'Courier New';
        font-size: 10px;
        font-weight: bold;
    }
`;