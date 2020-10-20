import React, { useCallback, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { InputComponent, SearchButtonComponent, SearchComponent } from './styles';

import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/passaro.svg';


const SearchBar: React.FC = () => {

    interface SearchComponentProps {
        isOpen?: boolean;
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenSearchBar = useCallback(() => {
        setIsOpen(!isOpen);
    },[isOpen, setIsOpen]);

    return (
        <SearchComponent isOpen={isOpen}>
            <InputComponent />
            <SearchButtonComponent onPress={handleOpenSearchBar}>
                <Feather name="search" size={20} color="#343A40" />
            </SearchButtonComponent>
        </SearchComponent>
            
    )
}

export default SearchBar;