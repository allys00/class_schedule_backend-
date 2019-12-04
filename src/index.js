const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const schemaPath = 'src/schema/index.graphql'

const server = new ApolloServer({
    resolvers,
    typeDefs: importSchema(schemaPath)
})

server.listen(3000, () => {
    console.log('server on')
})