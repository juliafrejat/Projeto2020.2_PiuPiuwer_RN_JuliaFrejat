import styled from 'styled-components/native';

interface PageProps {
    color: string;
    alignment: string;
}

export const PageComponent = styled.View<PageProps>`
    align-items: center;
    justify-content: ${props => props.alignment};
    flex: 1;
    background-color: ${props => props.color};
`;