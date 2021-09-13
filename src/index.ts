import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { MaterialResolver } from "./resolvers/material/MaterialResolver";
import { RegisterResolver } from "./resolvers/users/RegisterResolver";

const main = async () => {
  await createConnection();

  const app = Express();

  const schema = await buildSchema({
    resolvers: [MaterialResolver, RegisterResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server running on port 4000 :)");
  });
};

main();
