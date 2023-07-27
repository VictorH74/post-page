import React, { useState } from "react";
import Comment from "../Comment";
import postData from "data/postDatas";
import LikeIcon from "assets/like-icon.svg";
import LikeIconClicked from "assets/like-icon-clicked.svg";
import AddComment from "../AddComment";
import { Bottom, Comments, Container, Inf, Text, Title, Top } from "./styles";

export default function Post() {
  const { user, moment, title, text, likes, comments } = postData;
  const [listComments, setListComments] = useState([
    ...comments[Math.floor(Math.random() * 3)],
  ]);
  const [liked, setLiked] = useState(false);
  const [likesNumber, setLikes] = useState(
    likes ? likes : Math.floor(Math.random() * 50 * 10)
  );

  const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  function likeButtonClicked() {
    !liked ? setLikes(likesNumber + 1) : setLikes(likesNumber - 1);
    setLiked((value) => {
      return !value;
    });
  }

  function newComment(fields) {
    if (fields.user.length > 0 && fields.comment.length > 0) {
      setListComments((currentComments) => {
        return [
          {
            id: listComments.length + 1,
            user: fields.user,
            moment: "agora mesmo",
            text: fields.comment,
            likes: 0,
            isArtificial: false,
          },
          ...currentComments,
        ];
      });
    } else {
      alert("Preencha os campos para poder comentar");
    }
  }

  function deleteComment(id) {
    setListComments((currentComments) => {
      return currentComments.filter((comment) => {
        return comment.id !== id;
      });
    });
  }

  return (
    <>
      <Container>
        <Top>
          <Inf className="user"> {user} </Inf>
          <Inf className="moment"> {moment} </Inf>
        </Top>

        <Title> {title} </Title>
        <Text dangerouslySetInnerHTML={{ __html: text }} />

        <Bottom>
          <button onClick={likeButtonClicked}>
            <span>
              <img src={liked ? LikeIconClicked : LikeIcon} alt="like icon" />
            </span>
          </button>
          <p> {likesNumber} </p>
        </Bottom>
      </Container>
      <AddComment clickFunction={newComment} />

      <Comments>
        {listComments.map((comment) => (
          <Comment
            key={comment.id}
            data={{
              ...comment,
              likes:
                comment.likes || comment.likes === 0
                  ? comment.likes
                  : randomNumber,
            }}
            clickFunction={deleteComment}
          />
        ))}
      </Comments>
    </>
  );
}
