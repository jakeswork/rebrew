import React from "react";
import ContentLoader from "react-content-loader";
import { QueryResult } from "@apollo/react-common";
import { Classes } from "jss";

import { Theme } from "../../../../utils/theme";
import Text from "../../../../components/Text";
import Card from "../../../../components/Card";

interface DescriptionProps extends QueryResult<any> {
  theme: Theme;
  classes: Classes;
}

const scale: number = 22

const Description: React.FC<DescriptionProps> = ({ data, theme, classes }) => (
  <Card className={classes.card}>
    <Text h3>
      Description
      {" "}
      <span role="img" aria-label="book">
        📖
      </span>
    </Text>
    {data && data.beer ? (
      <Text>{data.beer.description}</Text>
    ) : (
      <ContentLoader
        height={240}
        speed={2}
        primaryColor={theme.colorGrey}
        secondaryColor={"#999"}
      >
        <rect y="8" rx="8" ry="8" width="300" height="16" />
        <rect x="20" y={8 + scale} rx="8" ry="8" width="320" height="16" />
        <rect y={8 + (scale * 2)} rx="8" ry="8" width="280" height="16" />
        <rect x="20" y={8 + (scale * 3)} rx="8" ry="8" width="360" height="16" />
        <rect x="20" y={8 + (scale * 4)} rx="8" ry="8" width="120" height="16" />
        <rect y={8 + (scale * 5)} rx="8" ry="8" width="300" height="16" />
        <rect x="20" y={8 + (scale * 6)} rx="8" ry="8" width="320" height="16" />
        <rect y={8 + (scale * 7)} rx="8" ry="8" width="280" height="16" />
        <rect x="20" y={8 + (scale * 8)} rx="8" ry="8" width="360" height="16" />
      </ContentLoader>
    )}
  </Card>
);

export default Description;
