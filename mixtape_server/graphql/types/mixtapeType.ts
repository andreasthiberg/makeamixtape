import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from "graphql";

const MixtapeType = new GraphQLObjectType({
    name: 'Mixtape',
    fields: {
      _id: { type: GraphQLString },
      title: { type: GraphQLString },
      author_id: { type: GraphQLInt },
      tracks: { type: new GraphQLList(GraphQLString)}
    },
});

export default MixtapeType;