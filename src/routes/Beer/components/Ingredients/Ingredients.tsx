import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";
import { QueryResult } from "@apollo/react-common";
import { Classes } from "jss";

import { Theme } from "../../../../utils/theme";
import { Ingredient as IngredientType } from "../../../../types";
import Text from "../../../../components/Text";
import Card from "../../../../components/Card";

interface IngredientsProps extends QueryResult<any> {
  theme: Theme;
  classes: Classes;
}

const Ingredients: React.FC<IngredientsProps> = ({ data, theme, classes }) => (
  <Card className={classes.card}>
    <Text h3>Ingredients</Text>
    {data && data.beer && data.beer.ingredients ? (
      <Fragment>
        <Fragment>
          {data.beer.ingredients.malt.map((ingredient: IngredientType) => (
            <Text key={ingredient.name}>
              {ingredient.name}, {ingredient.amount.value}{" "}
              {ingredient.amount.unit}
            </Text>
          ))}
        </Fragment>
        <Fragment>
          {data.beer.ingredients.hops.map((ingredient: IngredientType) => (
            <Text key={ingredient.name}>
              {ingredient.name}, {ingredient.amount.value}{" "}
              {ingredient.amount.unit}
            </Text>
          ))}
        </Fragment>
        <Text>{data.beer.ingredients.yeast}</Text>
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

export default Ingredients;
