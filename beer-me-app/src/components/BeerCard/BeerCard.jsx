import React from "react";
import * as S from "./BeerCard.style";

function BeerCard({ name, tagline, image }) {
  return (
    <S.BeerCard>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{tagline}</p>
    </S.BeerCard>
  );
}

export default BeerCard;
