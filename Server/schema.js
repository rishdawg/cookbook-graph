import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import hello from './Query/helloQuery';
import getData from './Query/GetData/getData';
import hi from './Mutation/hi';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
  hello,
  getData
  })
});

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    hi
  })
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

export default schema;
