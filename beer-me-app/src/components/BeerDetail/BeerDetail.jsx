import React from "react";
import * as S from "./BeerDetail.style";
import { v4 as uuid } from "uuid";
// Redux
import { useSelector } from "react-redux";
// React Router
import { Link } from "react-router-dom";

function BeerDetail() {
  const { beer } = useSelector((state) => state.details);

  return (
    <>
      <Link to="/">
        <S.CardShadow />
      </Link>

      <S.Detail>
        <S.ShowInfo>
          <h2>{beer[0].name}</h2>
          <h2>
            <span>{beer[0].tagline}</span>
          </h2>
          <img src={beer[0].image_url} alt={beer.name} />
        </S.ShowInfo>

        <p>{beer[0].description}</p>
        <p>
          <span>ABV:</span> {beer[0].abv}
        </p>
        <p>
          <span>IBU:</span> {beer[0].ibu}
        </p>
        <p>
          <span>Food Pairings:</span>

          {beer[0].food_pairing.map((food) => (
            <p key={uuid}>{food}</p>
          ))}
        </p>

        <p>
          <span>Brewer's tips:</span> {beer[0].brewers_tips}
        </p>
      </S.Detail>
    </>
  );
}

export default BeerDetail;
