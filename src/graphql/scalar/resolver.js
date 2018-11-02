import { GraphQLScalarType } from 'graphql'

export default {
    MongoID: new GraphQLScalarType({
        name: 'MongoID',
        serialize: value => value.toString()
    })
}