import React from "react";
import { Classes } from "jss";

import Text from "../../components/Text";
import Input from "../../components/Input";
import rebrewLogo from "../../images/rebrew-logo.png";

interface HomeProps {
  classes: Classes;
}

const Home: React.FC<HomeProps> = ({ classes }) => (
  <main className={classes.root}>
    <div className={classes.heading}>
      <img src={rebrewLogo} alt="logo" className={classes.logo} />
      <Text h1 style={{ color: "white" }}>
        Start a conversation.
      </Text>
      <Input style={{ width: 400 }} placeholder="Search Beers" />
    </div>
  </main>
);

export default Home;
