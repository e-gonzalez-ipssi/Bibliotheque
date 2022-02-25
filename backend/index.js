import { ApolloServer } from 'apollo-server';
import romanSchemas from './schemas/roman-shema.js';
import romanResolvers from './resolvers/roman-resolvers.js'

const SCHEMAS = [
    romanSchemas,
];

const RESOLVERS = [
    romanResolvers,
]

const server = new ApolloServer({ typeDefs: SCHEMAS, resolvers: RESOLVERS });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});