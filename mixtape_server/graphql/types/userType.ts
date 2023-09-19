import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from "graphql";

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
      _id: { type: GraphQLString },
      username: { type: GraphQLString }
    },
});

export default UserType;