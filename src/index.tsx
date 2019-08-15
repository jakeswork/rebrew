import React, { Fragment, ReactElement } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import injectSheet, { ThemeProvider } from "react-jss";
import normalize from "normalize-jss";
import { ApolloProvider } from "@apollo/react-hooks";

import theme from "./utils/theme";
import routes from "./routes";
import client from "./apollo";

const App: React.FC = (): ReactElement => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {routes.map(({ path, Component, title }) => (
            <Route
              key={path}
              path={path}
              exact
              render={() => (
                <Fragment>
                  <Helmet>
                    <title>{title}</title>
                  </Helmet>
                  <Component />
                </Fragment>
              )}
            />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);
const ComposedApp = injectSheet(normalize)(App);

render(<ComposedApp />, document.getElementById("root"));
