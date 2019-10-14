import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps } from "react-router";
import { Classes } from "jss";

import { SEARCH_BEER } from "./index";
import Navigation from "../../components/Navigation";
import Heading from "./components/Heading";
import Description from "./components/Description";
import Brewing from "./components/Brewing";
import Reviews from "./components/Reviews";
import FoodPairings from "./components/FoodPairings";
import Ingredients from "./components/Ingredients";
import productImg from "../../images/punk-api.png";

interface Identifiable {
  id: string;
}

interface BeerProps extends RouteComponentProps<Identifiable> {
  classes: Classes;
}

const Beer: React.FC<BeerProps> = ({ match, classes }) => {
  const id = match && match.params && Number(match.params.id);
  const response = useQuery(SEARCH_BEER, {
    variables: {
      where: { id }
    }
  });

  return (
    <Fragment>
      <Navigation />
      <main className={classes.root}>
        <Heading {...response} />
        <div className={classes.split}>
          <img src={productImg} className={classes.img} alt="beer" />
          <div className={classes.cardsWrapper}>
            <Description {...response} />
            <FoodPairings {...response} />
          </div>
        </div>
        <div className={classes.split}>
          <Reviews {...response} />
          <div className={classes.cardsWrapper}>
            <Ingredients {...response} />
            <Brewing {...response} />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Beer;
