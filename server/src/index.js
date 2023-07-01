const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const mocks = {
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
    }),
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
  🚀  Server is running!
  📭  Query at ${url}
  `);
}

startApolloServer();
