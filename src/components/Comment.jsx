import React, { useState } from "react";
import LikeIcon from "assets/like-icon.svg"
import LikeIconClicked from "assets/like-icon-clicked.svg"
import DeleteIcon from "assets/delete-icon.svg"
import DeleteIconHover from "assets/delete-icon-hover.svg"
import styled from "styled-components";

const Container = styled.div`
    backdrop-filter: blur(20px);
    border: 1px solid var(--primaryColor);
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    width: 80%;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.200);
    animation: ${({ isArtificial }) => isArtificial ? "newComment ease-in-out 170ms " : ""};

    @media (max-width:500px){
        width: 100%;
    }
    @keyframes newComment {
    from{
        transform: translateY(-30%);
        opacity: 0;
    }
    to{
        transform: translateY(0%);
        opacity: 1;
    }
}
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--primaryColor);
    margin-bottom: 20px;
`;

const Bottom = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    & button{
        margin-right: 5px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

const Inf = styled.h2`
    &.user{ 
        font-weight: lighter;
        font-size: 1.4rem;
    }
    &.moment{
        text-align: center;
        font-weight: lighter;
        font-style: italic;
        font-size: 1.2rem;
    }
`;

const Text = styled.p`
    line-height: 23px;
`;

const DeleteBtn = styled.button`
    color: var(--primaryColor);
`;

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