import styled from "styled-components";

export const MainContainer = styled.div`
  width: 250px;
  height: 200px;

  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 50px;
  text-align: center;
  padding: 10px;
  h1 {
    color: ${(props) => props.theme.darkBlue};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transition:1s;
    transform:scale(1.1);
  }
`;
export const PopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: ${(props) => props.theme.darkBlue};
  p {
    margin-left: 20px;
  }
  img {
    margin-left: 20px;
  }
`;
