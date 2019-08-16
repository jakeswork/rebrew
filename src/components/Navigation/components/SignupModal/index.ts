import withStyles from "react-jss";
import gql from "graphql-tag";

import SignupModal from "./SignupModal";
import styles from "./styles";

export const SIGN_UP = gql`
  mutation signup(
    $display_name: String
    $user_name: String!
    $password: String!
  ) {
    signup(
      display_name: $display_name
      user_name: $user_name
      password: $password
    ) {
      token
      user {
        id
        display_name
        user_name
      }
    }
  }
`;

export default withStyles(styles)(SignupModal);
