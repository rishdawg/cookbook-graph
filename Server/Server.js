import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import cors from 'cors';

var app = express();
app.use(cors());
app.post('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: false,
}));
app.get('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
