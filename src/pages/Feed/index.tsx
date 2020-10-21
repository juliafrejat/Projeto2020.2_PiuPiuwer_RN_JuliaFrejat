import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Keyboard, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SearchBar from '../../components/SearchBar/index'
import Page from '../../components/Page';
import Header from '../../components/Header';
import NewPiu from '../../components/NewPiu';

function Feed() {
    const { navigate } = useNavigation();

    function handleNavigateToNewPiuPage() {
        Keyboard.dismiss();
        navigate('NewPiuPage');
    }

    return (
        <Page color="#F8F9FA" alignment="flex-start">
            <Header isGreen={true}>
                <SearchBar isGreen={true} />
            </Header>
            <NewPiu onFocus={handleNavigateToNewPiuPage} />
        </Page>
    )
}

export default Feed;