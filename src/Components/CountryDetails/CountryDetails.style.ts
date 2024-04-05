import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.darkBlue};
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding:0 20px;
  margin:30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  img{
    &:hover{
      transition: all 1s linear;
      transform: scale(0.9);
    }
  }
`;

export const ImagesContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  img{
    border-radius:5px;
    width:300px;
  }
`;

export const BigInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const LittleInfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
