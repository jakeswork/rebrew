import withStyles from "react-jss";
import gql from "graphql-tag";

import Home from "./Home";
import styles from "./styles";

export const FUZZY_SEARCH_BEERS = gql`
  query searchBeers($where: BeersWhereInput) {
    beers(where: $where) {
      id
      name
    }
  }
`;

export default withStyles(styles)(Home);
