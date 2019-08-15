import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://rebrew-server.jakepflynn.now.sh/"
});

export default client;
