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
      <h2>Favourite Beers</h2>
      <S.Beers>
        {starter.map((beer) => (
          <BeerCard
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            image={beer.image_url}
          />
        ))}
      </S.Beers>
      <h2>Strongest Beers</h2>
      <S.Beers>
        {strong.map((beer) => (
          <BeerCard
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            image={beer.image_url}
          />
        ))}
      </S.Beers>
      <h2>Bitter Beers</h2>
      <S.Beers>
        {bitter.map((beer) => (
          <BeerCard
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            image={beer.image_url}
          />
        ))}
      </S.Beers>
    </S.BeersList>
  );
}

export default Home;
