import backgroundImg from "../../images/rebrew-bg-2.jpg";

export default {
  root: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgroundImg})`,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  },
  heading: {
    width: 440,
    marginLeft: 64
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "space-between"
  }
};
