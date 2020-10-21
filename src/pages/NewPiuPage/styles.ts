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
    align-items: flex-start;
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
    width: 80%;
    height: 150px;
    border-radius: 15px;
    padding: 10px 20px;
`;

export const ButtonContainerComponent = styled.View`
    align-items: flex-end;
    justify-content: center;
    width: 100%;
`;

export const ButtonsComponent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 20px 0px;
`;

interface ButtonTextComponentProps {
    isGreen: boolean;
}

export const ButtonTextComponent = styled.Text<ButtonTextComponentProps>`
    color: ${props => props.isGreen ? '#FFFFFF' : '#52B788'};
    font-family: 'Courier New';
    font-size: 14px;
    font-weight: bold;
`;