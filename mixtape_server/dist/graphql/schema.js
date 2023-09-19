import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import mixtapeModel from "../db/mixtapeModel";
// Define your GraphQL types
const MixtapeType = new GraphQLObjectType({
    name: 'Mixtape',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        author: { type: GraphQLString }
    },
});
// Define your GraphQL schema
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
                type: new GraphQLList(MixtapeType),
                args: {
                    id: { type: GraphQLInt },
                },
                resolve: (parent, args) => {
                    return mixtapeModel.getAllMixtapes();
                },
            },
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            mixtape: {
                type: MixtapeType,
                args: {
                    id: { type: GraphQLString },
                },
                resolve: (parent, args) => {
                    return mixtapeModel.getMixtape(args.id);
                },
            },
        },
    }),
});
export default schema;
