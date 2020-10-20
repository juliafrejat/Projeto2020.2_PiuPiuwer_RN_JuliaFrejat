import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface SearchComponentProps {
    isOpen?: boolean;
}

export const SearchComponent = styled.View<SearchComponentProps>`
    width: ${props => props.isOpen ? '200px' : '50px'};
    height: 50px;
    flex-direction: row;
    align-items: center;
    background-color: #FFFFFF;
    justify-content: flex-end;
    border-radius: 25px;
`;

export const SearchButtonComponent = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #E9ECEF;
    border-radius: 25px;
`;

export const InputComponent = styled(TextInput)`
    flex: 1;
    background-color: transparent;
    margin-left: 25px;
    margin-right: 10px;
`;