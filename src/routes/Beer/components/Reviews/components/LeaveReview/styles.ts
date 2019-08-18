import { Theme } from "../../../../../../utils/theme";

export default (theme: Theme) => ({
  textarea: {
    width: "calc(100% - 18px)",
    border: `1px solid ${theme.colorGrey}`,
    color: theme.textPrimary,
    margin: "8px 0",
    borderRadius: 4,
    outline: "none",
    boxShadow: "none",
    padding: 8,
    resize: "vertical",
    fontFamily: theme.fontFamily
  },
  root: {
    margin: "8px 0"
  },
  optionsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  requiresLogin: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.7)"
  },
  wrapper: {
    position: "relative"
  }
});
