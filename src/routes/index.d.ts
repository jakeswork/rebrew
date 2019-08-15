import { ComponentType } from "react";
import { StyledComponentProps } from "react-jss";

export interface RouteConfiguration {
  path: string;
  Component: ComponentType & StyledComponentProps;
  title: string;
}
