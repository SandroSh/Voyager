import styled from "styled-components";
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    margin-bottom:10px; 
    color:${(props) => props.theme.darkBlue};
  }
  @media (max-width: 500px) {
    margin-top:20px;
    h1{
      font-size:20px;
    }
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

  @media (max-width: 500px) {
    width:80%;
    img{
      width:100%;
    }
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
  @media (max-width: 500px) {
    width:100%;

   
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: space-evenly;
  margin-top: 50px;
  margin-right:14px;
  button {
    width:100%;
    margin: 10px;
    padding: 5px;
    cursor: pointer;
    background-color:white;
    outline:none;
    border:none;
    border-radius:2px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
