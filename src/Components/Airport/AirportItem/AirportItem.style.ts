import styled, { css } from "styled-components";
const commonStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const LeftRightDivStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainDiv = styled.div`
  ${commonStyles}
  background-color:white;
  width: 60%;
  max-height:20vh;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  @media (max-width:1100px) {
    max-height:30vh;
    h1{
      font-size:20px;
    }
    h2{
      font-size:15px;
    }
  } 
  @media (max-width:500px) {
    width: 80%;
    h1{
      font-size:10px;
    }
    h2{
      font-size:7px;
    }
  
  } 
`;

export const LeftDiv = styled.div`
  ${LeftRightDivStyles};
  color: ${(props) => props.theme.darkBlue};
`;
export const RightDiv = styled.div`
  ${LeftRightDivStyles}
  color:${(props) => props.theme.green};
`;

export const BottomDiv = styled.div`
  ${commonStyles}
  color:${(props) => props.theme.darkBlue};
  justify-content:flex-start;
  margin-top:10px;
  h2{
    margin-left:10px;
  }
`;
