import React, { useEffect } from "react";
import * as S from "./Home.style";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadBeers } from "../../redux/beers/beersActions";
// Compoenents
import BeerCard from "../../components/BeerCard/BeerCard";

function Home() {
  //Adding to store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBeers());
  }, [dispatch]);

  // Using from store
  const { starter, strong, bitter } = useSelector((state) => state.beers);

  return (
    <S.BeersList>
      <h1>Favourite Beers</h1>
      <S.Beers>
        {starter.map((beer) => {
          <BeerCard />;
        })}
      </S.Beers>
    </S.BeersList>
  );
}

export default Home;
