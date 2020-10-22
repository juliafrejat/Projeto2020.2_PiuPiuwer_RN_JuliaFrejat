import React from 'react';
import { Image } from 'react-native';

import useAuth from '../../hooks/useAuth';

import { 
    NewPiuComponent, 
    ContainerComponent, 
    ProfileImageBoxComponent, 
    ProfileImageComponent, 
    TextareaComponent,
} from './styles';

interface NewPiuProps {
    onFocus?: any;
}

const NewPiu: React.FC<NewPiuProps> = (props) => {
    const { loggedUserData } = useAuth();

    return (
        <NewPiuComponent>
            <ContainerComponent>
                <ProfileImageBoxComponent>
                    <ProfileImageComponent source={{uri: loggedUserData.foto}} />
                </ProfileImageBoxComponent>
                <TextareaComponent 
                    onFocus={props.onFocus} 
                    multiline={true} 
                    numberOfLines={4}
                    placeholder="Digite seu novo piu." 
                />
            </ContainerComponent>
        </NewPiuComponent>
    )
}

export default NewPiu;