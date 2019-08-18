import withStyles, { withTheme } from "react-jss";

import Description from "./Description";
import styles from "./styles";

const themed = withTheme(Description);

export default withStyles(styles)(themed);
