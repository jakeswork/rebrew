import React from "react";
import { Classes } from "jss";
import { FiSearch } from "react-icons/fi";

import Text from "../../components/Text";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Navigation from "../../components/Navigation";

interface HomeProps {
  classes: Classes;
}

const Home: React.FC<HomeProps> = ({ classes }) => (
  <main className={classes.root}>
    <Navigation />
    <Card className={classes.heading}>
      <Text h1>Find out what all the buzz is about.</Text>
      <Text>
        Search through our hundreds of beers to find the perfect pint.
      </Text>
      <div className={classes.searchWrapper}>
        <Input
          icon={<FiSearch />}
          placeholder={`Try "Alpha Dog"`}
          style={{ width: 280 }}
        />
        <Button>Pour</Button>
      </div>
    </Card>
  </main>
);

export default Home;
