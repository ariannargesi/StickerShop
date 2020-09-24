import React from "react";
import "./Button.scss";

const Button = (props) => {
  const sizes = {
    large: "24x",
    medium: "18px",
    small: "18px",
  }
  //Dynamically access object property using Bracket notation
  const fontSize = sizes[props.size];
  const className = ["button", props.type].join(" ");

  const style = {
    fontSize,
    width: props.width || "100%",
  };

  return (
    <button className={className} style={style} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
