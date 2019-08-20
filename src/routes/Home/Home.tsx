import React, { useState, createRef } from "react";
import { Classes } from "jss";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps } from "react-router";

import ClickOutsideElementHandler from "../../utils/ClickOutsideElementHandler";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Navigation from "../../components/Navigation";
import SearchSuggestions from "../../components/SearchSuggestions";
import { FUZZY_SEARCH_BEERS } from ".";
import { Beer } from "../../types";

interface HomeProps extends RouteComponentProps {
  classes: Classes;
}

const Home: React.FC<HomeProps> = ({ classes, history }) => {
  const [beerName, setBeerName] = useState("");
  const [beerId, setBeerId] = useState();
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const { data } = useQuery(FUZZY_SEARCH_BEERS, {
    variables: {
      where: {
        name: beerName
      }
    }
  });
  const searchRef = createRef<HTMLDivElement>();

  ClickOutsideElementHandler(searchRef, () => setSuggestionsVisible(false));

  return (
    <main className={classes.root}>
      <Navigation />
      <Card className={classes.heading}>
        <Text h1>
          Find out what all the buzz is about.{" "}
          <span role="img" aria-label="spark">
            ⚡
          </span>
        </Text>
        <Text>
          Search through our hundreds of beers to find the perfect pint.
        </Text>
        <div className={classes.searchWrapper} ref={searchRef}>
          <Input
            icon={<FiSearch />}
            onClick={() => setSuggestionsVisible(true)}
            placeholder={`Try "Alpha Dog"`}
            style={{ width: 280 }}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
              setBeerName(target.value);

              return setBeerId(null);
            }}
            value={beerName}
          />
          <Button
            disabled={!beerId}
            onClick={() => history.push(`/beer/${beerId}`)}
          >
            Pour
          </Button>
          {data && data.beers && suggestionsVisible && beerName.length > 0 && (
            <SearchSuggestions
              suggestions={data.beers.sort((a: Beer, b: Beer) => {
                if (a.name > b.name) return 1;

                if (a.name < b.name) return -1;

                return 0;
              })}
              onSelect={({ name, id }) => {
                setBeerName(name);

                setBeerId(id);

                return setSuggestionsVisible(false);
              }}
            />
          )}
        </div>
      </Card>
    </main>
  );
};

export default Home;
