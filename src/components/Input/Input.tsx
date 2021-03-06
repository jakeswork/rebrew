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
  inputIsFocused?(arg0: boolean): void;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  classes = {},
  placeholder,
  className,
  icon,
  inputIsFocused = () => {},
  value = null,
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
        onFocus={() => {
          setIsFocused(true);

          return inputIsFocused && inputIsFocused(true);
        }}
        onBlur={() => {
          if (input.current) {
            setIsFocused(input.current.value.length > 0);

            return inputIsFocused && inputIsFocused(false);
          }
        }}
        className={classNames(classes.input, {
          [classes.inputActive]: isFocused
        })}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
