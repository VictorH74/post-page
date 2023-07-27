/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import LikeIcon from "assets/like-icon.svg";
import LikeIconClicked from "assets/like-icon-clicked.svg";
import DeleteIcon from "assets/delete-icon.svg";
import DeleteIconHover from "assets/delete-icon-hover.svg";

import { useEffect } from "react";
import { Bottom, Container, DeleteBtn, Inf, Text, Top } from "./styles";

export default function Comment({ data, clickFunction }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(data.likes);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    let text = data.text;
    const strongText = (str) => {
      if (Array.from(str.matchAll(/[*]/g)).length > 1) {
        let beggin = str.indexOf("*");
        let end = str.slice(beggin + 1).indexOf("*");
        let target = str.slice(beggin + 1, beggin + end + 1);
        str = str.replace(`*${target}*`, `<strong>${target}</strong>`);
        console.log(str);
        return strongText(str);
      }
      console.log("finel", str);
      return str;
    };

    const itallicText = (str) => {
      if (Array.from(str.matchAll(/_/g)).length > 1) {
        let beggin = str.indexOf("_");
        let end = str.slice(beggin + 1).indexOf("_");
        let target = str.slice(beggin + 1, beggin + end + 1);
        str = str.replace(`_${target}_`, `<i>${target}</i>`);
        console.log(str);
        return itallicText(str);
      }
      console.log("finel", str);
      return str;
    };

    if (text.includes("*")) {
      text = strongText(text);
    }
    if (text.includes("_")) {
      text = itallicText(text);
    }
    setContent(text);
  }, []);

  const likeButtonClicked = () => {
    setLiked((value) => {
      return !value;
    });
    !liked ? setLikes(likes + 1) : setLikes(likes - 1);
  };

  const handleMouseOver = () => setIsMouseOver(true);
  const handleMouseOut = () => setIsMouseOver(false);

  const deleteComment = (e) => {
    e.target.parentNode.parentNode.parentNode.style.animation =
      "takeOut 1s both ease-in-out";

    setTimeout(() => {
      clickFunction(data.id);
    }, 700);
    setIsMouseOver(false);
  };

  return (
    <Container isArtificial={!data.isArtificial}>
      <Top>
        <Inf className="user"> {data.user} </Inf>
        <Inf className="moment"> {data.moment} </Inf>
      </Top>
      <Text dangerouslySetInnerHTML={{ __html: content }} />
      <Bottom>
        <button onClick={likeButtonClicked}>
          <span>
            <img src={liked ? LikeIconClicked : LikeIcon} alt="like icon" />
          </span>
        </button>
        <p> {likes} </p>
        {!data.isArtificial ? (
          <DeleteBtn
            onClick={deleteComment}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              src={!isMouseOver ? DeleteIcon : DeleteIconHover}
              alt="delete icon"
            />
          </DeleteBtn>
        ) : (
          ""
        )}
      </Bottom>
    </Container>
  );
}
