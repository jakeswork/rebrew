import React, { useState } from "react";
import { Classes } from "jss";
import { useMutation } from "@apollo/react-hooks";
import Rater from "react-rater";
import { RouteComponentProps } from "react-router";
import "react-rater/lib/react-rater.css";

import { LEAVE_REVIEW } from "./index";
import Button from "../../../../../../components/Button";
import Text from "../../../../../../components/Text";
import { UserAuthorized } from "../../../../../../utils/auth";

interface Identifiable {
  id: string;
}

interface LeaveReviewProps extends RouteComponentProps<Identifiable> {
  classes: Classes;
}

const LeaveReview: React.FC<LeaveReviewProps> = ({ classes, match }) => {
  const beerId = match && match.params && Number(match.params.id);
  const isAuthorizedUser = UserAuthorized();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState();
  const [leaveReview, { data, loading }] = useMutation(LEAVE_REVIEW);

  return (
    <div className={classes.wrapper}>
      {!isAuthorizedUser && (
        <div className={classes.requiresLogin}>
          <Text h3>You must be logged in to leave a review.</Text>
        </div>
      )}
      <form
        className={classes.root}
        onSubmit={async e => {
          e.preventDefault();

          await leaveReview({
            variables: {
              beer_id: beerId,
              comment: reviewText,
              rating
            }
          });
        }}
      >
        <textarea
          className={classes.textarea}
          placeholder="Let everybody know what you thought."
          rows={4}
          onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) =>
            setReviewText(target.value)
          }
        />
        <div className={classes.optionsWrapper}>
          <Button
            type="submit"
            success={data && data.create_review && data.create_review.id}
            loading={loading}
            disabled={!reviewText.length || !rating || loading}
          >
            Submit
          </Button>
          <Rater rating={rating} onRate={({ rating }) => setRating(rating)} />
        </div>
      </form>
    </div>
  );
};

export default LeaveReview;
