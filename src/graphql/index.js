import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'
import path from 'path'
import RootResolver from './RootResolver';
const typeDefs = importSchema(path.join(__dirname, './TypeDefs.graphql'))

export default makeExecutableSchema({
    resolvers: RootResolver,
    typeDefs: typeDefs
})