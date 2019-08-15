import { Theme } from "../../utils/theme";
import { CSSProperties } from "jss/css";

const defaultStyles = (theme: Theme): CSSProperties => ({
  color: "inherit",
  fontFamily: theme.fontFamily,
  fontWeight: 700,
  marginBottom: "0.6em"
});

const styles = (theme: Theme): object => ({
  h1: {
    ...defaultStyles(theme),
    fontSize: 80,
    lineHeight: "1.05em",
    marginBottom: "0.8em"
  },
  h2: {
    ...defaultStyles(theme),
    fontSize: 64,
    lineHeight: "1.0625",
    letterSpacing: "-.009em"
  },
  h3: {
    ...defaultStyles(theme),
    fontSize: 32,
    lineHeight: "1.125",
    letterSpacing: ".004em"
  },
  h4: {
    ...defaultStyles(theme),
    fontSize: 24,
    lineHeight: "1.16667",
    letterSpacing: ".009em"
  },
  h5: {
    ...defaultStyles(theme),
    fontSize: 21,
    lineHeight: "1.38105",
    fontWeight: 400,
    letterSpacing: ".011em"
  },
  caption: {
    ...defaultStyles(theme),
    fontSize: 14,
    lineHeight: "1.33341",
    fontWeight: 400,
    letterSpacing: "-.01em",
    color: theme.colorGrey,
    marginBottom: 0
  },
  p: {
    ...defaultStyles(theme),
    fontSize: 17,
    lineHeight: "1.47059",
    fontWeight: 400,
    letterSpacing: "-.022em",
    marginBottom: "0.2em"
  },
  link: {
    ...defaultStyles(theme),
    fontSize: 17,
    lineHeight: "1.47059",
    fontWeight: 400,
    letterSpacing: "-.022em",
    textDecoration: "none",
    color: theme.colorBlue
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
