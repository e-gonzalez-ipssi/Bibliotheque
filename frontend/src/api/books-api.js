import { gql } from '@apollo/client';

export const GET_ROMANS = gql`
    query getRomans {
        Roman {
            id
            title
            image
            tomenumber
        }
    }
`;

export const GET_ROMAN = gql`
    query getRoman ($id: Int!) {
        Roman {
            id
            title
            image
            tomenumber
            author
            editeur
            pagenumber
            prix
            isbn
            resume
            commentaire
        }
    }
`;