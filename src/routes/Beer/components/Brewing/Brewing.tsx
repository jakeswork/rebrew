import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";
import { QueryResult } from "@apollo/react-common";
import { Classes } from "jss";

import { Theme } from "../../../../utils/theme";
import Text from "../../../../components/Text";
import Card from "../../../../components/Card";

interface BrewingProps extends QueryResult<any> {
  theme: Theme;
  classes: Classes;
}

const Brewing: React.FC<BrewingProps> = ({ data, theme, classes }) => {
  const textLoader = (
    <ContentLoader
      height={32}
      speed={2}
      primaryColor={theme.colorGrey}
      secondaryColor={"#999"}
    >
      <rect y="8" rx="12" ry="12" width="240" height="20" />
    </ContentLoader>
  );

  return (
    <Card className={classes.card}>
      <Text h3>
        Brewing
        {" "}
        <span role="img" aria-label="beer-mug">
          🍺
        </span>
      </Text>
      <div>
        <div className={classes.row}>
          <div className={classes.col}>
            <Text caption>Creator</Text>
            {data && data.beer ? data.beer.contributed_by : textLoader}
          </div>
          <div className={classes.col}>
            <Text caption>First Brewed</Text>
            {data && data.beer ? data.beer.first_brewed : textLoader}
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <Text caption>Fermented At</Text>
            {data &&
            data.beer &&
            data.beer.method &&
            data.beer.method.fermentation ? (
              <Fragment>
                {data.beer.method.fermentation.temp.value}
                {data.beer.method.fermentation.temp.unit}
              </Fragment>
            ) : (
              textLoader
            )}
          </div>
          <div className={classes.col}>
            <Text caption>Brewed At</Text>
            {data &&
            data.beer &&
            data.beer.method &&
            data.beer.method.mash_temp ? (
              <Fragment>
                {data.beer.method.mash_temp[0].temp.value}
                {data.beer.method.mash_temp[0].temp.unit}
                {data.beer.method.mash_temp[0].temp.duration}
              </Fragment>
            ) : (
              textLoader
            )}
          </div>
        </div>
        <div className={classes.col} style={{ width: "100%" }}>
          <Text caption>Tips</Text>
          {(data && data.beer && data.beer.brewers_tips) || textLoader}
        </div>
      </div>
    </Card>
  );
};

export default Brewing;
