import { Theme } from "../../../../../../utils/theme";

export default (theme: Theme) => ({
  heading: {
    display: "flex",
    alignItems: "center",
    marginBottom: 16
  },
  root: {
    margin: "24px 0"
  },
  avatar: {
    height: 40,
    width: 40,
    marginRight: 16,
    fontSize: 16,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    background: theme.colorRandom()
  }
});
