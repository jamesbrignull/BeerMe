import React from "react";
import * as S from "./BeerDetail.style";
import { v4 as uuid } from "uuid";
// Redux
import { useSelector } from "react-redux";

function BeerDetail() {
  const { beer } = useSelector((state) => state.details);

  return (
    <>
      <h2>{beer[0].name}</h2>
      <p>{beer[0].tagline}</p>
      <img src={beer[0].image_url} alt={beer.name} />
      <p>{beer[0].description}</p>
      <p>ABV: {beer[0].abv}</p>
      <p>IBU: {beer[0].ibu}</p>
      <p>
        Food Pairings:
        {beer[0].food_pairing.map((food) => (
          <p key={uuid}>{food}</p>
        ))}
      </p>

      <p>Brewer's tips: {beer[0].brewers_tips}</p>
    </>
  );
}

export default BeerDetail;
