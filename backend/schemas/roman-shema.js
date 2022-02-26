import { gql } from 'apollo-server';

const romanSchemas = gql`
    type Query {
        getRomans: [Books]
        getRoman(id: Int!): Books
        getLNs: [Books]
        getLN(id: Int!): Books
    }

    type Books {
        id: Int!
        title: String!
        author: String!
        tomenumber: String!
        editeur: String!
        pagenumber: String!
        prix: String!
        isbn: String!
        resume: String!
        image: String
        commentaire: String
    }
`;

export default romanSchemas;