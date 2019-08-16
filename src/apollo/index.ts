import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://rebrew-server.jakepflynn.now.sh/",
  request: operation => {
    const token = localStorage.getItem("token");

    if (token) {
      operation.setContext({
        headers: {
          authorization: token
        }
      });
    }
  }
});

export default client;
