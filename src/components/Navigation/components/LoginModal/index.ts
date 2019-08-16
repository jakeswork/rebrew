import withStyles from "react-jss";
import gql from "graphql-tag";

import LoginModal from "./LoginModal";
import styles from "./styles";

export const LOG_IN = gql`
  mutation login($user_name: String!, $password: String!) {
    login(user_name: $user_name, password: $password) {
      token
      user {
        id
        display_name
        user_name
      }
    }
  }
`;

export default withStyles(styles)(LoginModal);
