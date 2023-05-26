import { Resolvers } from "../../generated/graphQl-backend";
import { Model } from "mongoose";
import { Data } from "../../generated/graphQl-backend";


interface ApolloContext {
    models: {
        Users: Model<Data>
    };
}

const resolvers: Resolvers<ApolloContext> = {
    Query: {
        users: async (_, {}, { models }) => {
            const findQuery = await models.Users.find();
            return findQuery;
        },
    },
};

module.exports = {
    resolvers,
};