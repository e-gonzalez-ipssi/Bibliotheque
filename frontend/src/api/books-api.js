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
    query Query($id: Int!) {
        getRoman(id: $id) {
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