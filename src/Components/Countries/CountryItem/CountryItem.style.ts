import styled from "styled-components";

export const CountryContainer = styled.div`
  max-width: 300px;
  max-height: 350px;
  width: 100%;
  margin: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.darkBlue};
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  h3 {
    color: white;
    margin-top: 20px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  button {
    margin: 20px 0;
    padding: 7px;
    border: none;
    border-radius: 3px;
    background-color: white;
    color: ${(props) => props.theme.darkBlue};
  }
`;

export const ImagesDiv = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
`;
