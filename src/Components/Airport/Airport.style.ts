import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.darkBlue};
`;

export const UpperDiv = styled.div`
  width: 100%;
  margin:20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    color:white;
  }
  img{
    margin-left:20px;
  }
`;
