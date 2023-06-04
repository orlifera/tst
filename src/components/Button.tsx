import React, { Children, ReactNode } from "react";
import Alert from "./Alert";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "outline-primary"
    | "outline-secondary"
    | "danger";
}

const Button = ({
  children,
  onClick,
  color = "outline-primary",
}: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
