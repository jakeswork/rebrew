import withStyles, { withTheme } from "react-jss";

import Review from "./Review";
import styles from "./styles";

const themed = withTheme(Review);

export default withStyles(styles)(themed);
