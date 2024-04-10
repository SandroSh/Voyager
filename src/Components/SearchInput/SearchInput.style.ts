import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    min-width: 250px;
    min-width: 350px;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.darkBlue};
    font-size: 17px;
    color: white;
    padding: 5px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: white;
    }
  }
  @media (max-width: 500px) {
    input {
        min-width:120px;
        margin:0 auto;
    }
  }
`;
