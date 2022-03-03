import React from "react";

const TextError = (props) => {
  return (
    <div style={{ fontSize: "0.9rem", color: "crimson" }}>{props.children}</div>
  );
};

export default TextError;
