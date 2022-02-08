import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import schema from './schema/index.js';
import resolvers from './resolvers/index.js';
import models, { sequelize } from './models/index.js';

const app = express();

app.use(cors());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
        me: models.users[1],
    },
})

await server.start();

server.applyMiddleware({
  app,
  cors: false
});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
    app.listen({ port: 8000 }, () => {
        console.log('Apollo Server on http://localhost:8000/graphql')
    });
});

console.log('Hello there');