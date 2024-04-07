import styled, { css } from "styled-components";
import CurrencyImage from "../../assets/currencyExchange.png";
import AirportImage from "../../assets/Airports.png";

const size = css`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  h1 {
    font-size: 3em;
    color: white;
    visibility: hidden;
  }
  &:hover {
    h1 {
      visibility: visible;
      filter: brightness(150%) !important;
    }
    transition: 1.5s;
    filter: brightness(50%);
    transform: scale(1.1);
  }
`;

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  
`;

export const LeftDiv = styled.div`
  ${size}
  background-image: url(${CurrencyImage});
`;

export const RightDiv = styled.div`
  ${size}
  background-image: url(${AirportImage});
  background-position: bottom;
`;
