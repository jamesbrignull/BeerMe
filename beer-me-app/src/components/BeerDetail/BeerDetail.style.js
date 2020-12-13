import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #673ab7;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

export const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
`;

export const ShowInfo = styled(motion.div)`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 25%;
    height: auto;
    padding: 1rem 0rem;
  }
`;
