import React from "react";

function Message() {
  //PascalCasing for components (First capital letter)
  const name = "Orlando";
  if (name) return <h1>Hello, I'm {name}</h1>;
  return <h1>Hello, I'm a guest</h1>;
}

export default Message;
