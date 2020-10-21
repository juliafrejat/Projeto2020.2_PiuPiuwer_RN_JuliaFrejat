import styled from 'styled-components/native';

interface HeaderProps {
    isGreen: boolean;
}

export const HeaderComponent = styled.View<HeaderProps>`
    width: 100%;
    background-color: ${props => props.isGreen ? '#52B788' : '#FFFFFF'};
    border: ${props => props.isGreen ? 'none' : '1px solid #CED4DA'};
    padding: 50px 20px 15px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleComponent = styled.View`
    flex-direction: row;
`;

interface TitleTextComponentProps {
    isGreen: boolean;
}

export const TitleTextComponent = styled.Text<TitleTextComponentProps>`
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.isGreen ? '#FFFFFF' : '#52B788'};
    font-family: 'Courier New';
`;

export const TitleImageComponent = styled.Image`
    height: 20px;
`;