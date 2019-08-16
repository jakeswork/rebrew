import React, { Fragment } from "react";
import { Classes } from "jss";

import { Beer } from "../../types";
import Card from "../Card";
import Text from "../Text";

interface SearchSuggestionsProps {
  suggestions: Beer[];
  classes: Classes;
  onSelect?(arg0: Beer): void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions = [],
  classes = {},
  onSelect = () => {}
}) => (
  <Card className={classes.root}>
    {suggestions.length === 0 ? (
      <Text>We're out of results :(</Text>
    ) : (
      suggestions.map(beer => (
        <Fragment key={beer.id}>
          <div onClick={() => onSelect(beer)} className={classes.suggestion}>
            <Text>{beer.name}</Text>
          </div>
        </Fragment>
      ))
    )}
  </Card>
);

export default SearchSuggestions;
