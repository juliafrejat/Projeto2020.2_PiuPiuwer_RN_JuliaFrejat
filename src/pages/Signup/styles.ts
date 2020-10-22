import styled from 'styled-components/native';

export const ButtonTextComponent = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-family: 'Courier New';
`;

export const InputComponent = styled.TextInput`
    background-color: #FFFFFF;
    border-radius: 6px;
    margin: 2%;
    padding: 4%;
    border: 1px solid #E9ECEF;
    box-shadow: 0 5px 5px rgba(0,0,0,0.1);
    min-width: 250px;
    font-family: 'Courier New';
`;

export const Form = styled.View`
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;

export const FormTitle = styled.Text`
    font-size: 30px;
    font-family: 'Courier New';
    font-weight: bold;
    color: #343A40;
    margin-bottom: 20px;
`;

export const ErrorText = styled.Text`
    font-size: 12px;
    font-family: 'Courier New';
    font-weight: bold;
    color: #FF7F7F;
`;