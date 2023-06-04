import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
        style={{ float: "right" }}
      ></button>
    </div>
  );
};

export default Alert;
