import styled, { css } from "styled-components";
import Cities from "../../assets/Cities.svg";
import AirportImage from "../../assets/Airports.svg";
import CitiesPNG from "../../assets/Cities.png";
import AirportImagePNG from "../../assets/Airports.png";
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
  @media (max-width:1500px) {
    h1{
      visibility:visible;
      font-size:25px;
    }
  }
`;

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (max-width:1500px) {
    flex-direction:column;
   
  }
 
 
`;

export const LeftDiv = styled.div`
  ${size}
  background-image: url(${Cities});
  @media (max-width:1500px) {
    background-image: url(${CitiesPNG});
    background-position: center;
   
  }
`;

export const RightDiv = styled.div`
  ${size}
  background-image: url(${AirportImage});
  @media (max-width:1500px) {
    background-image: url(${AirportImagePNG});
    background-position: center;
  }
`;
