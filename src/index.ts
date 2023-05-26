const { ApolloServer } = require("apollo-server");
const connectDatabase = require("./config/db");
const typeDefs = require("./types");
const { resolvers } = require("./resolvers");
const models = require("./models");
const fs = require('fs');
connectDatabase();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${ url }`);
});