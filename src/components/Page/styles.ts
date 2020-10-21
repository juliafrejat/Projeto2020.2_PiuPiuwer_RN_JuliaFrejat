import styled from 'styled-components/native';

interface PageProps {
    color: string;
}

export const PageComponent = styled.View<PageProps>`
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    background-color: ${props => props.color};
`;