import { Theme } from "../../utils/theme";

export default (theme: Theme): object => ({
  input: {
    padding: "12px 16px",
    paddingRight: 32,
    outline: "none",
    border: `1px solid ${theme.colorGrey}`,
    borderRadius: 4,
    fontSize: 16,
    width: "calc(100% - 50px)",
    fontFamily: theme.fontFamily
  },
  root: {
    position: "relative",
    margin: "8px 0",
    display: "inline-block"
  },
  placeholder: {
    position: "absolute",
    fontFamily: theme.fontFamily,
    top: 12,
    left: 12,
    userSelect: "none",
    pointerEvents: "none",
    color: "#ccc",
    padding: "0 8px",
    fontSize: 16,
    transition: "all .2s ease-in-out",
    background: "white"
  },
  placeholderActive: {
    top: -6,
    left: 8,
    fontWeight: "bold",
    fontSize: 12,
    color: theme.colorSecondary
  },
  inputActive: {
    border: `1px solid ${theme.colorSecondary}`
  },
  inputIcon: {
    position: "absolute",
    color: "#ccc",
    top: 12,
    right: 12,
    fontSize: 20
  }
});
