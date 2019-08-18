import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";
import { QueryResult } from "@apollo/react-common";
import { Classes } from "jss";

import { Theme } from "../../../../utils/theme";
import { Review as ReviewType } from "../../../../types";
import Text from "../../../../components/Text";
import Card from "../../../../components/Card";
import Review from "./components/Review";
import LeaveReview from "./components/LeaveReview";

interface ReviewsProps extends QueryResult<any> {
  theme: Theme;
  classes: Classes;
}

const Reviews: React.FC<ReviewsProps> = ({ data, classes, theme }) => (
  <Card className={classes.card}>
    <Text h3>Reviews</Text>
    <LeaveReview />
    {data && data.beer ? (
      <Fragment>
        {data.beer.reviews ? (
          data.beer.reviews.map((review: ReviewType) => (
            <Review review={review} />
          ))
        ) : (
          <Text>Be the first to leave a review!</Text>
        )}
      </Fragment>
    ) : (
      <Fragment>
        <div className={classes.loadingWrapper}>
          <ContentLoader
            height={80}
            speed={2}
            primaryColor={theme.colorGrey}
            secondaryColor={"#999"}
          >
            <rect x="40" y="2" rx="4" ry="4" width="117" height="7" />
            <rect x="40" y="16" rx="3" ry="3" width="85" height="7" />
            <rect y="40" rx="3" ry="3" width="350" height="7" />
            <rect y="56" rx="3" ry="3" width="380" height="7" />
            <rect y="72" rx="3" ry="3" width="201" height="7" />
            <circle cx="16" cy="16" r="16" />
          </ContentLoader>
        </div>
        <div className={classes.loadingWrapper}>
          <ContentLoader
            height={80}
            speed={2}
            primaryColor={theme.colorGrey}
            secondaryColor={"#999"}
          >
            <rect x="40" y="2" rx="4" ry="4" width="117" height="7" />
            <rect x="40" y="16" rx="3" ry="3" width="85" height="7" />
            <rect y="40" rx="3" ry="3" width="350" height="7" />
            <rect y="56" rx="3" ry="3" width="380" height="7" />
            <rect y="72" rx="3" ry="3" width="201" height="7" />
            <circle cx="16" cy="16" r="16" />
          </ContentLoader>
        </div>
      </Fragment>
    )}
  </Card>
);

export default Reviews;
