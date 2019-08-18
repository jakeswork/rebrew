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

const Description: React.FC<DescriptionProps> = ({ data, theme, classes }) => (
  <Card className={classes.card}>
    <Text h3>Description</Text>
    {data && data.beer ? (
      <Text>{data.beer.description}</Text>
    ) : (
      <ContentLoader
        height={80}
        speed={2}
        primaryColor={theme.colorGrey}
        secondaryColor={"#999"}
      >
        <rect y="8" rx="6" ry="6" width="240" height="8" />
        <rect x="20" y="22" rx="6" ry="6" width="160" height="8" />
        <rect y="36" rx="6" ry="6" width="240" height="8" />
        <rect x="20" y="50" rx="6" ry="6" width="200" height="8" />
        <rect x="20" y="64" rx="6" ry="6" width="80" height="8" />
      </ContentLoader>
    )}
  </Card>
);

export default Description;
