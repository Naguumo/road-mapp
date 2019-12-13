import express from 'express';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';
import db from './models';

const apollo = new ApolloServer({
  typeDefs: gql(schema),
  resolvers,
  context: { db }
});

const app = express();
apollo.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../www/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../www/build/index.html'));
});

db.sequelize.sync();

const port = process.env.PORT || 5000;
app.listen(port);
console.clear();
console.log(`Backend listening on http://localhost:${port}`);

export default app;
