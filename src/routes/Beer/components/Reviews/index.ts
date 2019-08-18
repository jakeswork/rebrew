import withStyles, { withTheme } from "react-jss";

import Reviews from "./Reviews";
import styles from "./styles";

const themed = withTheme(Reviews);

export default withStyles(styles)(themed);
