import withStyles, { withTheme } from "react-jss";

import FoodPairings from "./FoodPairings";
import styles from "./styles";

const themed = withTheme(FoodPairings);

export default withStyles(styles)(themed);
