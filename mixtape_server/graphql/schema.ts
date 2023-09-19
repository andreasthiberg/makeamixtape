import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";

// Import database access models.
import mixtapeModel from "../db/mixtapeModel.js";
import userModel from "../db/userModel.js";

// Import types.
import MixtapeType from "./types/mixtapeType.js";
import UserType from "./types/userType.js";

// Define GraphQL schema.
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      mixtape: {
        type: MixtapeType,
        args: {
          id: { type: GraphQLInt },
        },
        resolve: (parent, args) => {
          return mixtapeModel.getMixtape(args.id);
        },
      },
      mixtapes: {
        type: new GraphQLList( MixtapeType ),
        resolve: (parent, args) => {
          return mixtapeModel.getAllMixtapes();
        },
      },
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLInt },
        },
        resolve: (parent, args) => {
          return userModel.getUser(args.id);
        }
      },
      users: {
        type: new GraphQLList(UserType),
        resolve: (parent, args) => {
          return userModel.getAllUsers();
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createMixtape: {
        type: MixtapeType,
        args: {
          title: { type: GraphQLString },
          author_id: { type: GraphQLInt },
          tracks: { type: new GraphQLList(GraphQLString) }
        },
        resolve: (parent, args) => {
          return mixtapeModel.createMixtape(args);
        },
      },
      },
  }),
});

export default schema;