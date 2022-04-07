import React, { useState } from "react";
import Comment from "./Comment";
import postData from "./postDatas";
import LikeIcon from "./assets/like-icon.svg"
import LikeIconClicked from "./assets/like-icon-clicked.svg"
import AddComment from "./AddComment";

export default function Post() {
    const { user, moment, title, text, likes, comments } = postData;
    const [listComments, setListComments] = useState([...comments[Math.floor(Math.random() * 3)]]);
    const [liked, setLiked] = useState(false);
    const [likesNumber, setLikes] = useState(likes ? likes : Math.floor(Math.random() * 50 * 10));


    function randomNumber() {
        return Math.floor(Math.random() * 100 + 1);
    }

    function likeButtonClicked() {
        !liked ? setLikes(likesNumber + 1) : setLikes(likesNumber - 1);
        setLiked(value => {
            return !value
        });
    }

    function newComment(fields) {
        if (fields.user.length > 0 && fields.comment.length > 0) {
            setListComments(
                currentComments => {
                    return ([
                        {
                            id: listComments.length + 1,
                            user: fields.user,
                            moment: "agora mesmo",
                            text: fields.comment,
                            likes: 0,
                            isArtificial: false
                        },
                        ...currentComments
                    ]);
                }
            );
        } else { alert("Preencha os campos para poder comentar"); }

    }

    function deleteComment(id){
        setListComments(currentComments => {
            return currentComments.filter((comment) => {
                return comment.id !== id;
            });
        });
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
                    <div className="bottom">
                        
                            <button
                                onClick={likeButtonClicked}>
                                <span>
                                    <img src={liked ? LikeIconClicked : LikeIcon} alt="like icon" />
                                </span>
                            </button>
                            <p>{likesNumber}</p>
                        
                    </div>
                </div>
            </div>

            <AddComment clickFunction={newComment} />

            <div className="comments">
                {listComments.map((comment) =>
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        user={comment.user}
                        moment={comment.moment}
                        text={comment.text}
                        likes={comment.likes || comment.likes === 0 ? comment.likes : randomNumber}
                        isArtificial={comment.isArtificial}
                        clickFunction={deleteComment}
                    />
                )}
            </div>
        </>
    );
}