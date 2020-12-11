import styled from "styled-components/macro";

export const BeerCard = styled.div`
  min-height: 10vh;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
    color: #696969;
  }
  img {
    height: 10rem;
    margin: auto;
  }
`;
