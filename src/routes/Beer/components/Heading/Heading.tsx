import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";
import { QueryResult } from "@apollo/react-common";

import { Theme } from "../../../../utils/theme";
import Text from "../../../../components/Text";

interface HeadingProps extends QueryResult<any> {
  theme: Theme;
}

const Heading: React.FC<HeadingProps> = ({ data, theme }) => (
  <div>
    {data && data.beer ? (
      <Fragment>
        <Text h1>{data.beer.name}</Text>
        <Text h2>{data.beer.tagline}</Text>
      </Fragment>
    ) : (
      <ContentLoader
        height={24}
        speed={2}
        primaryColor={theme.colorGrey}
        secondaryColor={"#999"}
      >
        <rect rx="4" ry="4" width="48" height="7" />
        <rect y="12" rx="3" ry="3" width="64" height="5" />
      </ContentLoader>
    )}
  </div>
);

export default Heading;
