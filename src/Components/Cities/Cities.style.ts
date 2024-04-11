import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.darkBlue};
  min-height: 100vh;
`;

export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:white;
  h1{
    margin-top:20px;
  }
  img{
    margin:20px 0 0 30px;

  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
