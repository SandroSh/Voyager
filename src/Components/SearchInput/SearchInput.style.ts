import styled from "styled-components";

export const InputContainer = styled.div`
    input{
        min-width:250px;
        min-width:350px;
        width:90%;
        height:35px;
        font-size:15px;
        border-radius:5px;
        border:1px dashed ${(props) => props.theme.orange};
        &:focus{
            
            outline:none;
        }
    }
`;
