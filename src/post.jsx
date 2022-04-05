import React, { useState } from "react";
import Comment from "./comment";
import postData from "./postDatas";
import LikeIcon from "./assets/like-icon.svg"
import LikeIconClicked from "./assets/like-icon-clicked.svg"

function Post() {
    const { user, moment, title, text, likes, comments } = postData;

    // GET REQUEST -> POST

    const [listComments, setListComments] = useState(
        [...comments[Math.floor(Math.random() * 3)]]
    )
    const [liked, setLiked] = useState(false);
    const [likesNumber, setLikes] = useState(likes ? likes : Math.floor(Math.random() * 50 * 10));
    const [commentInput, setCommentInput] = useState({
        inputName: "",
        inputComment: ""
    });

    function randomNumber() {
        return Math.floor(Math.random() * 100 + 1);
    }

    function handleClick() {
        if (!liked) {
            setLikes(likesNumber + 1);
        } else {
            setLikes(likesNumber - 1);
        }
        setLiked(value => {
            return !value
        });
    }

    function newComment() {
        if (commentInput.inputName.length > 0 && commentInput.inputComment.length > 0) {


            setListComments(
                currentComments => {
                    return (
                        [
                            {
                                id: listComments.length + 1,
                                user: commentInput.inputName,
                                moment: "agora mesmo",
                                text: commentInput.inputComment,
                                likes: 0
                            },
                            ...currentComments
                        ]
                    );
                }
            );

            setCommentInput({
                inputName: "",
                inputComment: ""
            })
            document.getElementById("input-name").value = ""
            document.getElementById("input-comment").value = ""
        }

    }

    function updateInputCommentDatas(event) {
        const { name, value } = event.target;

        if (value.length > 25 && name === "inputName") {
            document.getElementById("input-name").value = value.slice(0, 25);
        }
        if (value.length > 80 && name === "inputComment") {
            document.getElementById("input-comment").value = value.slice(0, 80);
        }

        setCommentInput(currentValues => {
            return ({
                ...currentValues,
                [name]: value
            });
        })
    }

    return (
        <>
            <div className="post">
                <div className="top">
                    <h2 className="user">{user}</h2>
                    <h2 className="moment">{moment}</h2>
                </div>
                <div className="body">
                    <h3 className="title">{title}</h3>
                    <p className="text">{text}</p>
                    <div className="likes">
                        <button
                            onClick={handleClick}>
                            <span>
                                <img src={liked ? LikeIconClicked : LikeIcon} alt="like icon" />
                            </span>
                        </button>

                        <p>{likesNumber}</p>
                    </div>

                </div>
            </div>
            <div className="add-comment" onKeyPress={event => event.key === "Enter" ? newComment() : null}>
                <form>
                    <input onChange={updateInputCommentDatas} type="text" id="input-name" name="inputName" placeholder="Usuário" />
                    <input onChange={updateInputCommentDatas} type="text" id="input-comment" name="inputComment" placeholder="Adicione um comentário..." />
                </form>
                <button
                    onClick={newComment}
                    onKeyDownCapture
                    className="btn-comment"
                    disabled={
                        commentInput.inputName.length === 0
                        || commentInput.inputComment.length === 0
                    }
                    style={
                        {
                            cursor: commentInput.inputName.length === 0
                                || commentInput.inputComment.length === 0 ?
                                "no-drop" : "pointer",
                            backgroundColor: commentInput.inputName.length === 0
                                || commentInput.inputComment.length === 0 ?
                                "#0074b72c" : "#0075B7",
                        }
                    }
                >
                    Comentar
                </button>

            </div>
            <div className="comments">
                {listComments.map(comment =>
                    <Comment
                        key={comment.id}
                        user={comment.user}
                        moment={comment.moment}
                        text={comment.text}
                        likes={comment.likes || comment.likes === 0 ? comment.likes : randomNumber}
                    />
                )}
            </div>
        </>
    );
}

export default Post;