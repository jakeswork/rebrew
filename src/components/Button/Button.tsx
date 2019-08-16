import React, { ReactChildren, ReactElement } from "react";
import { Classes } from "jss";
import { ClassicSpinner } from "react-spinners-kit";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes: Classes;
  secondary?: boolean;
  flat?: boolean;
  children?: ReactChildren | string;
  icon?: ReactElement;
  success?: boolean;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  classes = {},
  secondary = false,
  flat = false,
  children = null,
  icon = null,
  success = false,
  danger = false,
  disabled = false,
  loading = false,
  ...props
}) => {
  let className = classes.button;

  if (secondary) className = classes.secondary;

  if (flat) className = classes.flat;

  return (
    <button disabled={disabled || loading} {...props} className={className}>
      {loading ? <ClassicSpinner size={16} /> : children}
      {icon && React.cloneElement(icon, { className: classes.buttonIcon })}
    </button>
  );
};

export default Button;
