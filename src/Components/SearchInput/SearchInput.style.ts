import styled from "styled-components";

export const InputContainer = styled.div`
    input{
        min-width:250px;
        min-width:350px;
        width:90%;
        height:35px;
        border-radius: 5px;
        border:none;
        border-left:10px solid ${(props) => props.theme.orange};
        border-right:10px solid ${(props) => props.theme.orange};
        background-color:${(props) => props.theme.darkBlue};
        font-size:17px;
        color:white;
        padding:5px;
        &:focus{
            outline:none;
        }
        &::placeholder{
            color:white;
        }
    }
`;
