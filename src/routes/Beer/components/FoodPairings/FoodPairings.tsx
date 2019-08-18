import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";
import { QueryResult } from "@apollo/react-common";
import { Classes } from "jss";

import { Theme } from "../../../../utils/theme";
import Text from "../../../../components/Text";
import Card from "../../../../components/Card";

interface FoodPairingsProps extends QueryResult<any> {
  theme: Theme;
  classes: Classes;
}

const FoodPairings: React.FC<FoodPairingsProps> = ({
  data,
  theme,
  classes
}) => (
  <Card className={classes.card}>
    <Text h3>Food Pairings</Text>
    {data && data.beer ? (
      <Fragment>
        <Text>This particular beer would go great with:</Text>
        <ul className={classes.ul}>
          {data.beer.food_pairing.map((food: string) => (
            <li key={food}>
              <Text>{food}</Text>
            </li>
          ))}
        </ul>
      </Fragment>
    ) : (
      <ContentLoader
        height={100}
        speed={2}
        primaryColor={theme.colorGrey}
        secondaryColor={"#999"}
      >
        <rect y="8" rx="6" ry="6" width="240" height="12" />
        <rect x="20" y="28" rx="6" ry="6" width="160" height="12" />
        <rect y="48" rx="6" ry="6" width="240" height="12" />
        <rect x="20" y="68" rx="6" ry="6" width="200" height="12" />
        <rect x="20" y="88" rx="6" ry="6" width="80" height="12" />
      </ContentLoader>
    )}
  </Card>
);

export default FoodPairings;
