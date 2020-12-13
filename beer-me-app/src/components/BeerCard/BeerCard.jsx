import React from "react";
import * as S from "./BeerCard.style";
// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../../redux/details/detailsActions";
// React Router
import { Link } from "react-router-dom";

function BeerCard({ name, image, id }) {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <S.BeerCard onClick={loadDetailHandler}>
      <Link to={`/beer/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </Link>
    </S.BeerCard>
  );
}

export default BeerCard;
