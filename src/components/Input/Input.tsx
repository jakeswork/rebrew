import React, {
  useState,
  createRef,
  HTMLAttributes,
  ReactElement
} from "react";
import classNames from "classnames";
import { Classes } from "jss";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  classes: Classes;
  placeholder?: string;
  className?: string;
  icon?: ReactElement;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  classes,
  placeholder,
  className,
  icon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const input = createRef<HTMLInputElement>();

  return (
    <div className={classNames(classes.root, className)}>
      {placeholder && (
        <span
          data-test-id="placeholder"
          className={classNames(classes.placeholder, {
            [classes.placeholderActive]: isFocused
          })}
        >
          {placeholder}
        </span>
      )}
      {icon && React.cloneElement(icon, { className: classes.inputIcon })}
      <input
        ref={input}
        onFocus={() => setIsFocused(true)}
        onBlur={() =>
          input.current && setIsFocused(input.current.value.length > 0)
        }
        className={classNames(classes.input, {
          [classes.inputActive]: isFocused
        })}
        {...props}
      />
    </div>
  );
};

export default Input;
