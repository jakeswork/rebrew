import React, { HTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { Classes } from "jss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes;
  className?: string;
  children?:
    | ReactElement
    | ReactElement[]
    | HTMLElement
    | HTMLElement[]
    | string;
}

const Card: React.FC<CardProps> = ({
  classes,
  children,
  className,
  ...props
}) => (
  <div className={classNames(classes.root, className)} {...props}>
    {children}
  </div>
);

export default Card;
