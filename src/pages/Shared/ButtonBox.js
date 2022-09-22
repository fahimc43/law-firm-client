import React from "react";

function ButtonBox({ children, disabled }) {
  return <button className="btn btn-primary text-white">{children}</button>;
}

export default ButtonBox;
