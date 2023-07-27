import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-left: 10%;

    @media (max-width:500px){
        margin-left: 5%;
    }
`;

export const Form = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    & input{
        background-color: transparent;
        height: 40px;
        font-size: 16px;
        padding-left: 5px;
        outline: none;
        border: none;
        border-bottom: 2px solid var(--primaryColor);
    }  
    @media (max-width:500px){
        width: 50%;
    }
    @media (max-width:500px){
        width: 57% ;
    }
`;

export const CommentBtn = styled.button`
    height: 50px;
    width: 90px;
    border-radius: 8px;
    border: none;
    margin: 35px 0 0 30px;
    color: whitesmoke;
    font-size: 17px;
    font-weight: bolder;
    transition: 400ms;
    background: ${({ emptyFields }) => emptyFields ? "#0074b72c" : "#0075B7"};
    cursor: ${({ emptyFields }) => emptyFields ? "no-drop" : "pointer"};

    @media (max-width:500px){
        margin: 35px 0 0 10px;
    }
`;

export const CommentInput = styled.div`
    position: relative;
    & input {
        width: 100%;
    }
    & span {
        position: absolute;
        top: 7px;
        right: 7px;

        &:hover{
            cursor: pointer;
        }
    }
`;

export const EmjsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-height: 270px;
    overflow-y: auto;
    max-width: 500px;
    background-color: transparent;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid var(--primaryColor);
    padding: 10px;
`;

export const Emoji = styled.div`
    font-size: 30px;
    cursor: pointer;
`;