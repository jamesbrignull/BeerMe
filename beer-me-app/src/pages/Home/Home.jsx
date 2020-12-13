import React, { useEffect } from "react";
import * as S from "./Home.style";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadBeers } from "../../redux/beers/beersActions";
// Components
import BeerCard from "../../components/BeerCard/BeerCard";
import Carousel from "react-elastic-carousel";
import BeerDetail from "../../components/BeerDetail/BeerDetail";
// React Router
import { useLocation } from "react-router-dom";
// Misc
import { v4 as uuid } from "uuid";

function Home() {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //Adding to store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBeers());
  }, [dispatch]);

  // Using from store
  const { starter, strong, bitter } = useSelector((state) => state.beers);

  // Carousel
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
  ];

  return (
    <S.BeersList>
      {pathID && <BeerDetail />}
      <S.Beers>
        <h2>Favourite Beers</h2>
        <Carousel breakPoints={breakPoints}>
          {starter.map((beer) => (
            <BeerCard
              key={uuid()}
              id={beer.id}
              name={beer.name}
              tagline={beer.tagline}
              image={beer.image_url}
            />
          ))}
        </Carousel>
      </S.Beers>

      <S.Beers>
        <h2>Strongest Beers</h2>
        <Carousel breakPoints={breakPoints}>
          {strong.map((beer) => (
            <BeerCard
              key={uuid()}
              id={beer.id}
              name={beer.name}
              tagline={beer.tagline}
              image={beer.image_url}
            />
          ))}
        </Carousel>
      </S.Beers>

      <S.Beers>
        <h2>Bitter Beers</h2>
        <Carousel breakPoints={breakPoints}>
          {bitter.map((beer) => (
            <BeerCard
              key={uuid()}
              id={beer.id}
              name={beer.name}
              tagline={beer.tagline}
              image={beer.image_url}
            />
          ))}
        </Carousel>
      </S.Beers>
    </S.BeersList>
  );
}

export default Home;
