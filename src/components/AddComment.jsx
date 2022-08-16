import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { emojies } from "data/emojies";

const Container = styled.div`
    display: flex;
    margin-left: 10%;

    @media (max-width:500px){
        margin-left: 5%;
    }
`;

const Form = styled.form`
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

const CommentBtn = styled.button`
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

const CommentInput = styled.div`
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

export default function AddComment(props) {
    const [fields, setFields] = useState({
        user: "",
        comment: ""
    });
    const [showEmojiList, setShowEmojies] = useState(false)

    function updateInputCommentDatas(event) {
        var { name, value } = event.target;

        if (value.length > 1 && value[value.length - 2] === " " && name === "user") {
            value = value.slice(0, value.length - 1) + value.slice(value.length - 1).toUpperCase();
        }

        // Characters limits
        value.length > 25 && name === "user" ? value = value.slice(0, 25) :
            value.length > 80 && name === "comment" ? value = value.slice(0, 80) :
                setFields(currentValues => {
                    return {
                        ...currentValues,
                        [name]: value.length === 1 ? value.toUpperCase() : value
                    };
                });
    }

    function newComment() {
        props.clickFunction(fields);

        // reset fields
        setFields({
            user: "",
            comment: ""
        });
    }


    const Condition = fields.user.length === 0 || fields.comment.length === 0

    return (
        <Container onKeyPress={event => event.key === "Enter" ? newComment() : null}>
            <Form>
                <input onChange={updateInputCommentDatas} type="text" name="user" value={fields.user} placeholder="Usuário" />
                <CommentInput>
                    <input
                        onChange={updateInputCommentDatas}
                        onFocus={() => setShowEmojies(false)}
                        type="text" name="comment" value={fields.comment}
                        placeholder="Adicione um comentário..." />
                    <EmojieList setFields={setFields} show={showEmojiList} setShow={setShowEmojies} />
                </CommentInput>
            </Form>
            <CommentBtn
                onClick={() => {
                    newComment();
                    setShowEmojies(false)
                }}
                disabled={Condition}
                emptyFields={Condition}
            >
                Comentar
            </CommentBtn>

        </Container>
    );
}

const UpdatingPopover = React.forwardRef(
    ({ popper, children, show: _, ...props }, ref) => {
        useEffect(() => {
            popper.scheduleUpdate();
        }, [children, popper]);

        return (
            <Popover ref={ref} body {...props}>
                {children}
            </Popover>
        );
    },
);

const EmjsContainer = styled.div`
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

const Emoji = styled.div`
    font-size: 30px;
    cursor: pointer;
`;

const Emjs = ({ setFields, setShow }) => {
    return (
        <EmjsContainer>
            {emojies.map((emj, index) => (
                <Emoji key={index}
                    onClick={() => {
                        setFields(prev => {
                            let prevCommentConten = prev.comment;
                            return {
                                ...prev,
                                comment: prevCommentConten + emj
                            }
                        });
                    }}
                >{emj}</Emoji>
            ))}
        </EmjsContainer>
    );
}

function EmojieList({ setFields, show, setShow }) {
    const [AddReactionIconHover, setHover] = useState(false);


    return (
        <OverlayTrigger
            show={show}

            overlay={
                <UpdatingPopover id="popover-contained">
                    <Emjs setFields={setFields} setShow={() => setShow(false)} />
                </UpdatingPopover>
            }
        >
            <span>
                <AddReactionIcon
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    color={AddReactionIconHover ? "primary" : "disabled"}
                    onClick={() => setShow(!show)}
                />
            </span>
        </OverlayTrigger>
    );
}