import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface SearchComponentProps {
    isOpen?: boolean;
    isGreen: boolean;
}

export const SearchComponent = styled.View<SearchComponentProps>`
    width: ${props => props.isOpen ? '160px' : '40px'};
    height: 40px;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.isGreen ? '#D8F3DC' : '#E9ECEF'};
    opacity: 0.7;
    justify-content: flex-end;
    border-radius: 20px;
`;

export const SearchButtonComponent = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

export const InputComponent = styled(TextInput)`
    flex: 1;
    background-color: transparent;
    margin-left: 20px;
    margin-right: 10px;
`;