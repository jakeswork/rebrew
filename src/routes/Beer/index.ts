import withStyles, { withTheme } from "react-jss";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

import Beer from "./Beer";
import styles from "./styles";

export const SEARCH_BEER = gql`
  query searchBeer($where: BeerWhereInput!) {
    beer(where: $where) {
      id
      name
      tagline
      first_brewed
      description
      image_url
      abv
      ibu
      ebc
      ph
      volume {
        value
        unit
      }
      boil_volume {
        value
        unit
      }
      ingredients {
        malt {
          name
          amount {
            value
            unit
          }
        }
        hops {
          name
          amount {
            value
            unit
          }
          add
          attribute
        }
      }
      food_pairing
      brewers_tips
      contributed_by
      method {
        mash_temp {
          temp {
            value
            unit
          }
          duration
        }
        fermentation {
          temp {
            value
            unit
          }
        }
        twist
      }
      reviews {
        user {
          display_name
        }
        rating
        comment
      }
      average_rating
    }
  }
`;
const themed = withTheme(Beer);
const routed = withRouter(themed);

export default withStyles(styles)(routed);
