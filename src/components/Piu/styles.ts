import styled from 'styled-components/native';

export const PiuComponent = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    padding: 5px;
    margin-bottom: 25px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.15);
    border-radius: 15px;
    align-items: flex-start;
    justify-content: space-between;
`;

interface FullWidthContainerComponent {
    alignment: string;
}

export const FullWidthContainerComponent = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    align-items: ${props => props.alignment};
`;

interface ContainerComponent {
    alignment: string;
}

export const ContainerComponent = styled.View`
    flex-direction: row;
    padding: 10px 0px;
    justify-content: space-between;
    align-items: ${props => props.alignment};
`;

export const ProfileImageBoxComponent = styled.View`
    width: 50px;
    height: 50px;
    background-color: #E9ECEF;
    border-radius: 25px;
    overflow: hidden;

`;

export const ProfileImageComponent = styled.Image`
    height: 50px;
`;

export const TextareaComponent = styled.TextInput`
    background-color: #E9ECEF;
    font-family: 'Courier New';
    width: 80%;
    height: 40px;
    border-radius: 15px;
    padding: 10px 20px;
`;

interface SmallText {
    show: boolean;
}

export const SmallText = styled.Text`
    font-family: 'Courier New';
    font-size: 12px;
    color: #495057;
    display: ${props => props.show ? 'flex' : 'none'};
`;

export const NameText = styled.Text`
    font-family: 'Courier New';
    font-size: 14px;
    color: #495057;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const ContentText = styled.Text`
    font-family: 'Courier New';
    font-size: 14px;
    color: #495057;
`;

export const NameContainerComponent = styled.View`
    margin: 0px 10px;
    align-items: flex-start;
    justify-content: space-between;
`;

interface LoggedUserContainer {
    show: boolean;
}

export const LoggedUserContainer = styled.View`
    display: ${props => props.show ? 'flex' : 'none'};
`;

export const InteractionContainerComponent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30%;
`;