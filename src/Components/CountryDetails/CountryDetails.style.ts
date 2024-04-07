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
  padding: 0 20px;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  img {
    &:hover {
      transition:0.3s;
      transform: scale(0.9);
    }
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  img {
    border-radius: 5px;
    width: 300px;
  }
`;

export const BigInfoContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-size: 20px;
  li {
    list-style-type: none;
    margin: 15px;
    
  }
`;

export const BooleanInfosContainer = styled.div`
  width: 100%;
  margin:30px 0;
  color:white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;



