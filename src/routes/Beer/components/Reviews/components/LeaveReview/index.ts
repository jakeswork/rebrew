import withStyles from "react-jss";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";

import LeaveReview from "./LeaveReview";
import styles from "./styles";

export const LEAVE_REVIEW = gql`
  mutation leaveReview($beer_id: Int!, $comment: String!, $rating: Float!) {
    create_review(beer_id: $beer_id, comment: $comment, rating: $rating) {
      id
    }
  }
`;

const routed = withRouter(LeaveReview);

export default withStyles(styles)(routed);
