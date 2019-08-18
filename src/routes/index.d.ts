import { ComponentType } from "react";
import { StyledComponentProps } from "react-jss";

export interface RouteConfiguration {
  path: string;
  Component: ComponentType<any>;
  title: string;
}
