import React, { useState } from "react";
import LikeIcon from "assets/like-icon.svg"
import LikeIconClicked from "assets/like-icon-clicked.svg"
import DeleteIcon from "assets/delete-icon.svg"
import DeleteIconHover from "assets/delete-icon-hover.svg"
import { Bottom, Container, DeleteBtn, Inf, Text, Top } from "./styles";


export default function Comment({ data, clickFunction }) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(data.likes);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const likeButtonClicked = () => {
        setLiked(value => {
            return !value
        });
        !liked ? setLikes(likes + 1) : setLikes(likes - 1);
    }

    const handleMouseOver = () => setIsMouseOver(true);
    const handleMouseOut = () => setIsMouseOver(false);

    const deleteComment = e => {
        e.target.parentNode.parentNode.parentNode.style.animation = "takeOut 1s both ease-in-out";

        setTimeout(() => {
            clickFunction(data.id);
        }, 700);
        setIsMouseOver(false);
    }

    return (
        <Container isArtificial={!data.isArtificial} >
            <Top >
                <Inf className="user"> {data.user} </Inf>
                <Inf className="moment" > {data.moment} </Inf>
            </Top>
            <Text dangerouslySetInnerHTML={{ __html: data.text }} />
            <Bottom >
                <button onClick={likeButtonClicked} >
                    <span >
                        <img src={liked ? LikeIconClicked : LikeIcon} alt="like icon" />
                    </span>
                </button>
                <p > {likes} </p>
                {
                    !data.isArtificial ?
                        <DeleteBtn
                            onClick={deleteComment}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            <img src={!isMouseOver ? DeleteIcon : DeleteIconHover}
                                alt="delete icon" />
                        </DeleteBtn> : ""
                }
            </Bottom>
        </Container>
    );
}