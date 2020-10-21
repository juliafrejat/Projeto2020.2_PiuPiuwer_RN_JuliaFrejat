import { useLinkProps } from '@react-navigation/native';
import React from 'react';

import { PageComponent } from './styles';

interface PageProps {
    color: string;
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <PageComponent color={props.color}>
            {props.children}
        </PageComponent>
    )
}

export default Page;