import { useLinkProps } from '@react-navigation/native';
import React from 'react';

import { PageComponent } from './styles';

interface PageProps {
    color: string;
    alignment: string;
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <PageComponent color={props.color} alignment={props.alignment}>
            {props.children}
        </PageComponent>
    )
}

export default Page;