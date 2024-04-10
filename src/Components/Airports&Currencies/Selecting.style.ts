import styled, { css } from "styled-components";
import Cities from "../../assets/Cities.svg";
import AirportImage from "../../assets/Airports.svg";

const size = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  background-position: right;
  h1 {
    font-size: 3em;
    color: white;

    visibility: hidden;
  }
  &:hover {
    transition: 1.5s;
    transform: scale(1.1);
    h1{
      visibility:visible;
    }
  }
`;

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;

 
 
`;

export const LeftDiv = styled.div`
  ${size}
  background-image: url(${Cities});
`;

export const RightDiv = styled.div`
  ${size}
  background-image: url(${AirportImage});
`;
