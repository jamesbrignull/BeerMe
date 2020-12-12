import React from "react";
import * as S from "./BeerCard.style";
// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../../redux/details/detailsActions";

function BeerCard({ name, image, id }) {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <S.BeerCard onClick={loadDetailHandler}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </S.BeerCard>
  );
}

export default BeerCard;
