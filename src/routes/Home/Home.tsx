import React, { Fragment } from "react";

import { Beer } from "../../types";

interface HomeProps {
  beers: Beer[];
}

const Home: React.FC<HomeProps> = ({ beers }) => (
  <Fragment>
    <h1>We've got some beers!</h1>
    {beers.map(beer => (
      <div key={beer.id}>
        <h4>{beer.name}</h4>
        <h5>{beer.description}</h5>
      </div>
    ))}
  </Fragment>
);

export default Home;
