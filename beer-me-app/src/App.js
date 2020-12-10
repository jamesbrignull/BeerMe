import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBeers } from "./redux/beers/beersActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBeers());
  });
  return (
    <>
      <h1>This is App</h1>
    </>
  );
}

export default App;
