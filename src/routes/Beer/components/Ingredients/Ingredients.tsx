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

const scale: number = 32

const Ingredients: React.FC<IngredientsProps> = ({ data, theme, classes }) => (
  <Card className={classes.card}>
    <Text h3>
      Ingredients
      {" "}
      <span role="img" aria-label="grain">
        🌾
      </span>
    </Text>
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
        height={240}
        speed={2}
        primaryColor={theme.colorGrey}
        secondaryColor={"#999"}
      >
        <circle cx="12" cy="24" r="12" />
        <rect x="32" y="16" rx="8" ry="8" width="300" height="16" />
        <circle cx="12" cy={24 + scale} r="12" />
        <rect x="32" y={16 + scale} rx="8" ry="8" width="300" height="16" />
        <circle cx="12" cy={24 + (scale * 2)} r="12" />
        <rect x="32" y={16 + (scale * 2)} rx="8" ry="8" width="300" height="16" />
        <circle cx="12" cy={24 + (scale * 3)} r="12" />
        <rect x="32" y={16 + (scale * 3)} rx="8" ry="8" width="300" height="16" />
        <circle cx="12" cy={24 + (scale * 4)} r="12" />
        <rect x="32" y={16 + (scale * 4)} rx="8" ry="8" width="300" height="16" />
      </ContentLoader>
    )}
  </Card>
);

export default Ingredients;
