import withStyles, { withTheme } from "react-jss";

import Brewing from "./Brewing";
import styles from "./styles";

const themed = withTheme(Brewing);

export default withStyles(styles)(themed);
