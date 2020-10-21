import React, { useCallback, useState } from 'react';

import { InputComponent, SearchButtonComponent, SearchComponent } from './styles';

import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/passaro.svg';

interface SearchBarProps {
    isGreen: boolean;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {

    interface SearchComponentProps {
        isOpen?: boolean;
        isGreen: boolean;
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenSearchBar = useCallback(() => {
        setIsOpen(!isOpen);
    },[isOpen, setIsOpen]);

    return (
        <SearchComponent isOpen={isOpen} isGreen={props.isGreen}>
            <InputComponent />
            <SearchButtonComponent onPress={handleOpenSearchBar}>
                <Feather name="search" size={20} color="#343A40" />
            </SearchButtonComponent>
        </SearchComponent>
            
    )
}

export default SearchBar;