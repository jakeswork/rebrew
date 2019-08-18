import React from "react";
import { Classes } from "jss";
import Rater from "react-rater";

import { Review as ReviewType } from "../../../../../../types";
import Text from "../../../../../../components/Text";

interface ReviewProps {
  review: ReviewType;
  classes: Classes;
}

const Review: React.FC<ReviewProps> = ({ review, classes }) => (
  <div className={classes.root}>
    <div className={classes.heading}>
      <div className={classes.avatar}>{review.user.display_name.charAt(0)}</div>
      <div>
        <Text h3>{review.user.display_name}</Text>
        <Rater interactive={false} rating={review.rating} />
      </div>
    </div>
    <div className={classes.description}>{review.comment}</div>
  </div>
);

export default Review;
