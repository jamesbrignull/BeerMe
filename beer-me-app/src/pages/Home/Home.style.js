import styled from "styled-components/macro";

export const BeersList = styled.div`
  padding: 0rem 5rem;
  h2 {
    padding: 1rem 0.5rem;
  }
  p {
    padding: 1rem;
  }
`;

export const Beers = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;
