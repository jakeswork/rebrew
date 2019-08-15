import React, { ReactElement } from "react";
import withStyles from "react-jss";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Home from "./Home";
import styles from "./styles";

const gqlQuery: string = gql`
  {
    beers {
      id
      name
      description
    }
  }
`;
const Composed: React.FC = (): ReactElement => {
  const { loading, error, data } = useQuery(gqlQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <Home {...data} />;
};

export default withStyles(styles)(Composed);
