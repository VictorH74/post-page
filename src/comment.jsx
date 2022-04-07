import React, { useState } from "react";
import LikeIcon from "./assets/like-icon.svg"
import LikeIconClicked from "./assets/like-icon-clicked.svg"
import DeleteIcon from "./assets/delete-icon.svg"
import DeleteIconHover from "./assets/delete-icon-hover.svg"

export default function Comment(props) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const [isMouseOver, setIsMouseOver] = useState(false);

    function likeButtonClicked() {
        setLiked(value => {
            return !value
        });
        !liked ? setLikes(likes + 1) : setLikes(likes - 1);
    }

    function handleMouseOver(){
        setIsMouseOver(true);
    }

    function handleMouseOut(){
        setIsMouseOver(false);
    }

    function deleteComment(){
        props.clickFunction(props.id);
        setIsMouseOver(false);
    }

    return (
        <div className="comment">
            <div className="top">
                <h2 className="user">{props.user}</h2>
                <h2 className="moment">{props.moment}</h2>
            </div>
            <div className="body">
                <p className="text">{props.text}</p>
                <div className="bottom">
                    <button onClick={likeButtonClicked}>
                        <span>
                            <img src={liked ? LikeIconClicked : LikeIcon} alt="like icon"></img>
                        </span>
                    </button>
                    <p>{likes}</p>
                    {!props.isArtificial?
                        <button 
                            onClick={deleteComment} 
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className="delete-btn">
                            <img src={!isMouseOver ? DeleteIcon: DeleteIconHover} alt="delete icon"></img>
                            </button>:""}
                </div>
            </div>
        </div>
    );
}