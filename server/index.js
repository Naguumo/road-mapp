import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import schema from './graphql/schema';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../www/build')));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+ '../www/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Backend listening on ${port}`);

export default app;
