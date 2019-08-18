import withStyles, { withTheme } from "react-jss";

import Heading from "./Heading";
import styles from "./styles";

const themed = withTheme(Heading);

export default withStyles(styles)(themed);
