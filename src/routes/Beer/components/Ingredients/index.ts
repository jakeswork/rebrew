import withStyles, { withTheme } from "react-jss";

import Ingredients from "./Ingredients";
import styles from "./styles";

const themed = withTheme(Ingredients);

export default withStyles(styles)(themed);
