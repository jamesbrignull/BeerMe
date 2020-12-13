import React from "react";
import GlobalStyle from "./GlobalStyle";
// Pages & Components
import Home from "./pages/Home/Home";
// React Router
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path={["/beer/:id", "/"]}>
        <Home />
      </Route>
    </>
  );
}

export default App;
