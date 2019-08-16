import { Theme } from "../../utils/theme";
import { CSSProperties } from "jss/css";

const defaultStyles = (theme: Theme): CSSProperties => ({
  color: theme.textPrimary,
  fontFamily: theme.fontFamily,
  fontWeight: 700,
  margin: 0,
  marginBottom: 4
});

const styles = (theme: Theme): object => ({
  h1: {
    ...defaultStyles(theme),
    fontSize: 30,
    marginBottom: 8
  },
  h2: {
    ...defaultStyles(theme),
    fontSize: 24
  },
  h3: {
    ...defaultStyles(theme),
    fontSize: 16
  },
  caption: {
    ...defaultStyles(theme),
    wordWrap: "break-word",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.08333333333333333em",
    textTransform: "uppercase"
  },
  p: {
    ...defaultStyles(theme),
    fontSize: 16,
    fontWeight: 400
  },
  [theme.media.mobile as any]: {
    h1: {
      fontSize: 48
    },
    h2: {
      fontSize: 40
    },
    h4: {
      fontSize: 20
    }
  }
});

export default styles;
