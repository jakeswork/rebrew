import { CSSProperties } from "jss/css";
import { Color } from "csstype";

interface ThemeMedia {
  mobile?: string;
  web?: string;
  tablet?: string;
}

export interface Theme extends CSSProperties {
  colorPrimary?: Color;
  colorSecondary?: Color;
  colorRed?: Color;
  colorGreen?: Color;
  colorBlue?: Color;
  colorAmber?: Color;
  colorGrey?: Color;
  textPrimary?: Color;
  textSecondary?: Color;
  media: ThemeMedia;
}

const theme: Theme = {
  fontFamily: `"Muli",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  colorPrimary: "#e15a0e",
  colorSecondary: "#6d4736",
  colorRed: "#f44336",
  colorGreen: "#4caf50",
  colorBlue: "#2196f3",
  colorAmber: "#ff9800",
  colorGrey: "#dad4d2",
  textPrimary: "#382d29",
  textSecondary: "#906e62",
  media: {
    mobile: "@media all and (max-width: 414px)"
  }
};

export default theme;
