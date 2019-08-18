import withStyles from "react-jss";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

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
const routed = withRouter(Home);

export default withStyles(styles)(routed);
