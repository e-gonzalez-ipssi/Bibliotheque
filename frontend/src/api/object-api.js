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

export const GET_LNS = gql`
    query Query {
        getLNs {
            id
            title
            tomenumber
            image
        }
    }
`;

export const GET_LN = gql`
    query Query($id: Int!) {
        getLN(id: $id) {
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

export const GET_SPE_BOOKS = gql`
    query Query {
        getSpeBooks {
            id
            title
            tomenumber
            image
        }
    }
`;

export const GET_SPE_BOOK = gql`
    query Query($id: Int!) {
        getSpeBook(id: $id) {
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

export const GET_ART_BOOKS = gql`
    query Query {
        getArtBooks {
            id
            title
            tomenumber
            image
        }
    }
`;

export const GET_ART_BOOK = gql`
    query Query($id: Int!) {
        getArtBook(id: $id) {
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

export const GET_MANGAS = gql`
    query Query {
        getMangas {
            id
            title
            tomenumber
            image
        }
    }
`;

export const GET_MANGA = gql`
    query Query($id: Int!) {
        getManga(id: $id) {
            id
            title
            author
            tomenumber
            editeur
            pagenumber
            prix
            resume
            image
            commentaire
        }
    }
`;

export const GET_CDS = gql`
    query Query {
        getCDs {
            id
            title
            cd
            image
        }
    }
`;

export const GET_CD = gql`
    query Query($id: Int!) {
        getCD(id: $id) {
            id
            title
            cd
            prix
            resume
            isbn
            image
            commentaire
        }
    }
`;