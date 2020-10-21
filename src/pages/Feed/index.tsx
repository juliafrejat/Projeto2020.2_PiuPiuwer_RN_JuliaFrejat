import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Keyboard } from 'react-native';

import SearchBar from '../../components/SearchBar/index'
import Page from '../../components/Page';
import Header from '../../components/Header';
import NewPiu from '../../components/NewPiu';
import PiusArea from '../../components/PiusArea';
import { ScrollArea } from './styles';

function Feed() {
    const { navigate } = useNavigation();

    function handleNavigateToNewPiuPage() {
        Keyboard.dismiss();
        navigate('NewPiuPage');
    }

    return (
        <Page color="#F8F9FA">
            <Header isGreen={true}>
                <SearchBar isGreen={true} />
            </Header>
            <NewPiu onFocus={handleNavigateToNewPiuPage} />
            <ScrollArea showsVerticalScrollIndicator={false}>
                <PiusArea />
            </ScrollArea>
        </Page>
    )
}

export default Feed;