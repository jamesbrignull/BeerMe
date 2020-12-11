import React from "react";
import * as S from "./BeerCard.style";

function BeerCard({ name, tagline, image }) {
  return (
    <S.BeerCard>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </S.BeerCard>
  );
}

export default BeerCard;
