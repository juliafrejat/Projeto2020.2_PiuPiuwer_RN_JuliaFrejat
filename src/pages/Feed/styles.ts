import styled from 'styled-components/native';

interface DivProps {
}

export const Body = styled.View<DivProps>`
    justify-content: center;
    align-items: flex-start !important;
    width: 90vw;

    .container-column{
        padding: 50px 25px 0 25px;
    }

    .container-row, #posts .container-column{
        width: 100%;
        padding: 0;
    }

    #posts{
        width: 40%;
    }

    #posts .container-row{
        padding: 5px 0;
    }

    @media (max-width: 700px) {
        width: 92%;

        aside {
            display: none;
        }

        #posts {
            width: 90vw !important;
        }
    }

    @media (max-width: 970px) {
        width: 92%;
        
        #posts {
            width: 60vw;
        }

        aside {
            padding: 50px 0 0 0 !important;
            width: 20%;
            h2 {
                font-size: 20px
            }
        }
    }
`;

interface NewPostProps {
}

export const NewPost = styled.View<NewPostProps>`
`;