const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema/typedefs');
const {resolvers} = require('./schema/resolver');
const server = new ApolloServer({typeDefs, resolvers, context: () => {
  return {name: "Pedro"}
}}); //function that deals with data

server.listen().then(({url}) => {
  console.log(`Your api is running at ${url}`);
});
