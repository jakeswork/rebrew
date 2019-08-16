import React, { useState } from "react";
import { Classes } from "jss";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@apollo/react-hooks";

import Text from "../../components/Text";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Navigation from "../../components/Navigation";
import SearchSuggestions from "../../components/SearchSuggestions";
import { FUZZY_SEARCH_BEERS } from ".";

interface HomeProps {
  classes: Classes;
}

const Home: React.FC<HomeProps> = ({ classes }) => {
  const [beerName, setBeerName] = useState("");
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const { loading, data } = useQuery(FUZZY_SEARCH_BEERS, {
    variables: {
      where: {
        name: beerName
      }
    }
  });

  return (
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
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setBeerName(target.value)
            }
            inputIsFocused={bool => setInputIsFocused(bool)}
          />
          <Button>Pour</Button>
        </div>
        {data && data.beers && inputIsFocused && (
          <SearchSuggestions loading={loading} suggestions={data.beers} />
        )}
      </Card>
    </main>
  );
};

export default Home;
