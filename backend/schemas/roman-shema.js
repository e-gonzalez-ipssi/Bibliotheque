import { gql } from 'apollo-server';

const romanSchemas = gql`
    type Query {
        getRomans: [Roman]
        getRoman(id: Int!): Roman
        getSeries(id: Int!): [Roman]
    }

    type Roman {
        id: Int!
        title: String!
        author: String!
        tomenumber: String!
        editeur: String!
        pagenumber: Int!
        prix: String!
        isbn: String!
        resume: String!
        image: String!
        commentaire: String
    }
`;

export default romanSchemas;