import React from "react";
import GlobalStyle from "./GlobalStyle";
// Pages & Components
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>This is App</h1>
      <Home />
    </>
  );
}

export default App;
