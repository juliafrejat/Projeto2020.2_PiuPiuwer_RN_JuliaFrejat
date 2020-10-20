import React from 'react';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Page from '../../components/Page';
import Header from '../../components/Header';

function Feed() {
    return (
        <Page color="#F8F9FA">
            <Header isGreen={true} />
        </Page>
    )
}

export default Feed;