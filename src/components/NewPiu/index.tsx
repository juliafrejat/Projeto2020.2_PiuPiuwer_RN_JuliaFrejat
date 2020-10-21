import React from 'react';

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
    return (
        <NewPiuComponent>
            <ContainerComponent>
                <ProfileImageBoxComponent>
                    {/* <ProfileImageComponent source={} /> */}
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