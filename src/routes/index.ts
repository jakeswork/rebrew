import Home from "./Home";
import Beer from "./Beer";
import { RouteConfiguration } from "./index.d";

const routeConfiguration: RouteConfiguration[] = [
  {
    path: "/",
    Component: Home,
    title: "Rebrew | Rate your buzz"
  },
  {
    path: "/beer/:id",
    Component: Beer,
    title: "Rebrew | Beer"
  }
];

export default routeConfiguration;
