import React from "react";
import { Classes } from "jss";

import rebrewLogo from "../../images/rebrew-logo.png";

interface NavigationProps {
  classes: Classes;
}

const Navigation: React.FC<NavigationProps> = ({ classes }) => (
  <nav className={classes.root}>
    <img src={rebrewLogo} className={classes.logo} alt="logo" />
  </nav>
);

export default Navigation;
