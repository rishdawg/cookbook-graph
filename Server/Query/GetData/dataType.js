import { GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';

const foodType = new GraphQLObjectType({
  name:'Food',
  fields: () => ({
    image: { type: GraphQLString },
    title: { type: GraphQLString },
    ingredients: { type: new GraphQLList(GraphQLString) },
    instructions: { type: new GraphQLList(GraphQLString) }
  })
});

const dataType = new GraphQLList(foodType);

export default dataType;
