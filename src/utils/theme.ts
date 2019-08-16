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
  fontFamily: `"CircularStd",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  colorPrimary: "rgb(0, 132, 137)",
  colorSecondary: "#ff5960",
  colorRed: "#f44336",
  colorGreen: "#4caf50",
  colorBlue: "#2196f3",
  colorAmber: "#ff9800",
  colorGrey: "#ebebeb",
  textPrimary: "#484848",
  textSecondary: "#906e62",
  media: {
    mobile: "@media all and (max-width: 414px)"
  }
};

export default theme;
