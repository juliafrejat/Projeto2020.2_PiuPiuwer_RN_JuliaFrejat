import styled from 'styled-components/native';

export const NewPiuComponent = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    padding: 15px;
    margin-bottom: 25px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.15);
    border-radius: 15px;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ContainerComponent = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 10px 0px;
    justify-content: space-between;
    align-items: center;
`;

export const ProfileImageBoxComponent = styled.View`
    width: 50px;
    height: 50px;
    background-color: #E9ECEF;
    border-radius: 25px;

`;

export const ProfileImageComponent = styled.Image`
    height: 50px;
    object-fit: cover;
`;

export const TextareaComponent = styled.TextInput`
    background-color: #E9ECEF;
    font-family: 'Courier New';
    width: 80%;
    height: 40px;
    border-radius: 15px;
    padding: 10px 20px;
`;