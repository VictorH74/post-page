import React, { useEffect, useState } from "react";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { emojies } from "data/emojies";
import { CommentBtn, CommentInput, Container, EmjsContainer, Emoji, Form } from "./styles";

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