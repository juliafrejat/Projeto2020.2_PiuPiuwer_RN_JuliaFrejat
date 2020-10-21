import React, { useCallback, useMemo } from 'react';

import usePius, { PiuData } from '../../hooks/usePius';
import useAuth from '../../hooks/useAuth';

import { 
    ContainerComponent, 
    ProfileImageBoxComponent, 
    ProfileImageComponent,
    SmallText,
    NameContainerComponent,
    NameText,
    LoggedUserContainer,
    PiuComponent,
    ContentText,
    FullWidthContainerComponent,
    InteractionContainerComponent,
} from './styles';

import { Feather } from '@expo/vector-icons';
import Star from '../../assets/Star';
import StarColor from '../../assets/StarColor';
import Heart from '../../assets/Heart';
import HeartColor from '../../assets/HeartColor';

interface PiuProps {
    piuData: PiuData;
    key: number;
    isLiked: boolean;
    isFavorited: boolean;
}

const Piu: React.FC<PiuProps> = ({ piuData, isLiked, isFavorited }) => {
    const { favoritePiu, likePiu, deletePiu } = usePius();
    const { loggedUserData } = useAuth();

    const { username, first_name, last_name, foto } = piuData.usuario;
    const { horario, texto, likers } = piuData;
 
    const likeCounter = likers.length;

    const relativeTime = useMemo(() => {
        const parsedPiuTime = Date.parse(horario);
        const currentTime = Date.parse(Date());

        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;
    
        const elapsed = currentTime - parsedPiuTime;
    
        if (elapsed < msPerMinute) {
             return (elapsed/1000 < 0) ? '0 s' : Math.round(elapsed/1000) + ' s';
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' min';
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' h';
        }
    
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' d';
        }
    
        else if (elapsed < msPerYear) {
            return (elapsed/msPerMonth > 1) ? (Math.round(elapsed/msPerMonth) + ' meses') : (Math.round(elapsed/msPerMonth) + ' mês');
        }
    
        else {
            return (elapsed/msPerMonth > 1) ? (Math.round(elapsed/msPerYear) + ' anos') : (Math.round(elapsed/msPerMonth) + ' ano');
        }
    }, [horario]);

    const handleLike = useCallback((e: any) => {
        e.preventDefault()
        likePiu(piuData.id)
    }, [likePiu, piuData]);

    const handleFavorite = useCallback((e: any) => {
        e.preventDefault()
        favoritePiu(piuData.id)
    }, [favoritePiu, piuData]);

    const handleDelete = useCallback((e: any) => {
        e.preventDefault()
        deletePiu(piuData.id)
    }, [deletePiu, piuData]);

    return (
        <PiuComponent>
            <FullWidthContainerComponent alignment="flex-start">
                <ContainerComponent alignment="center">
                    <ProfileImageBoxComponent>
                        <ProfileImageComponent source={{uri: foto}} />
                    </ProfileImageBoxComponent>
                    <NameContainerComponent>
                        <NameText>{first_name+' '+last_name}</NameText>
                        <SmallText show={true}>{'@'+username}</SmallText>
                    </NameContainerComponent>
                </ContainerComponent>
                <ContainerComponent alignment="center">
                    <SmallText show={true}>{relativeTime}</SmallText>
                </ContainerComponent>
            </FullWidthContainerComponent>

            <FullWidthContainerComponent alignment="center">
                <ContentText>{texto}</ContentText>
            </FullWidthContainerComponent>
            
            <FullWidthContainerComponent alignment="center">
                    <InteractionContainerComponent>
                        <Feather name='star' size={25} color={isFavorited ? '#F2BA5B' : '#6C757D'} fill={isFavorited ? '#F2BA5B' : 'none'} onPress={handleFavorite} />
                        {/* {isFavorited ? <StarColor onPress={handleFavorite} /> : <Star onPress={handleFavorite} />} */}

                        <ContainerComponent alignment="flex-end">
                            <Feather name='heart' size={25} color={isLiked ? '#FF7F7F' : '#6C757D'} fill={isLiked ? '#FF7F7F' : 'none'} onPress={handleLike} />
                            {/* {isFavorited ? <HeartColor onPress={handleFavorite} /> : <Heart onPress={handleFavorite} />} */}
                            <SmallText show={likeCounter!==0} >{likeCounter}</SmallText>
                        </ContainerComponent>
                    </InteractionContainerComponent>

                    <LoggedUserContainer show={piuData.usuario.username === loggedUserData.username}>
                        <Feather name='trash-2' size={25} color='#6C757D' onPress={handleDelete} />
                    </LoggedUserContainer>
            </FullWidthContainerComponent>
        </PiuComponent>
    )
}

export default Piu;