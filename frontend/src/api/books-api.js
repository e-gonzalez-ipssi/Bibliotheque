import { gql } from '@apollo/client';

export const GET_ROMANS = gql`
    query Query {
        getRomans {
            id
            title
            tomenumber
            image
        }
    }
`;

export const GET_ROMAN = gql`
    query Query($getRomanId: Int!) {
        getRoman(id: $getRomanId) {
        id
        title
        author
        tomenumber
        editeur
        pagenumber
        prix
        isbn
        resume
        image
        commentaire
        }
    }
`;