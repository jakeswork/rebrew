import React from "react";
import { Classes } from "jss";

import { Beer } from "../../types";
import Card from "../Card";
import Text from "../Text";

interface SearchSuggestionsProps {
  suggestions: Beer[];
  loading?: boolean;
  classes: Classes;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions = [],
  loading = false,
  classes = {}
}) => (
  <Card className={classes.root}>
    {suggestions.map(beer => (
      <Text>{beer.name}</Text>
    ))}
  </Card>
);

export default SearchSuggestions;
