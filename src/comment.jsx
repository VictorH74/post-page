import React, { useState } from "react";
import LikeIcon from "./assets/like-icon.svg"
import LikeIconClicked from "./assets/like-icon-clicked.svg"

function Comment(props) {
    /*
    function likeClick(){
        INCREMENTAR NÚMERO DE LIKES
        POST REQUEST DE LIKES PARA O SERVIDOR
        ALTERAR COR DO ICONE
    }
    */

    const [liked, setLiked] = useState(false);

    const [likes, setLikes] = useState(props.likes);

    function handleClick(){
        setLiked(value => {
            return !value
        });

        if(!liked){
            setLikes(likes + 1);
        }else{
            setLikes(likes - 1);
        }
        
    }

    return (
        <div className="comment">
            <div className="top">
                <h2 className="user">{props.user}</h2>
                <h2 className="moment">{props.moment}</h2>
            </div>
            <div className="body">
                <p className="text">{props.text}</p>
                <div className="likes">
                    <button onClick={handleClick}><span><img src={liked?LikeIconClicked:LikeIcon} alt="like icon"></img></span></button>
                    <p>{likes}</p>
                </div>
            </div>

        </div>
    );
}

export default Comment;