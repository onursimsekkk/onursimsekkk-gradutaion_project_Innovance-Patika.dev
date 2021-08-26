import React from "react";
import "./style.css";

function Title({ type, text, className }) {
  return (
    <>
      {(type === "h1" && <h1 className={className}>{text}</h1>) ||
       (type === "h2" && <h2 className={className}>{text}</h2>)}
    </>
  );
}

export default Title;
