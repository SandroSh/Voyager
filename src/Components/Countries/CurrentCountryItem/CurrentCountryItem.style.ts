import styled from "styled-components";
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    margin-bottom:10px; 
    color:${(props) => props.theme.darkBlue};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.darkBlue};
  border-radius: 5px;
  img {
    border-radius: 5px 0 0 5px;
    height: inherit;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  h2 {
    color: white;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: space-evenly;
  margin-top: 50px;
  button {
    margin: 10px;
    padding: 5px;
    cursor: pointer;
  }
`;
