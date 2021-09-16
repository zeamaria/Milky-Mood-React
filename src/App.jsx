import React from "react";
import { GlobalStyle } from "./styles";

const App = () => {
  const message = (name) => {
    return `${name} is a student!`;
  };
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Hello CodeSandbox</h1>
      <h2>{message`Zea`}</h2>
    </div>
  );
};

export default App;
