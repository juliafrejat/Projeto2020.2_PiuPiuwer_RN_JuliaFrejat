import React from 'react';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Page from '../../components/Page';
//import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

function Feed() {
    return (
        <Page color="#F8F9FA">
            <SearchBar />
        </Page>
    )
}

export default Feed;