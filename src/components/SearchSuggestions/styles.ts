import { Theme } from "../../utils/theme";

export default (theme: Theme) => ({
  root: {
    position: "absolute",
    maxHeight: 160,
    overflowX: "scroll",
    top: 206,
    width: 264,
    margin: 0
  },
  suggestion: {
    cursor: "pointer",
    userSelect: "none",
    padding: "8px 0",
    marginBottom: 8,
    borderBottom: `1px solid ${theme.colorGrey}`
  }
});
