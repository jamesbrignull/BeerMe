import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadBeers } from "../../redux/beers/beersActions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBeers());
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
