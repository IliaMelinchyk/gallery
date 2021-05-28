import React, { useState, useRef, useEffect } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import styled from "styled-components";
import CommentsList from "./CommentsList";

const Comments = (props) => {
  const [textareaValue, setTextareaValue] = useState("");
  const listRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textareaValue) return;
    props.setData((prevState) => [
      ...prevState.slice(0, props.imgIndex),
      (prevState[props.imgIndex] = {
        ...prevState[props.imgIndex],
        comments: [...prevState[props.imgIndex].comments, textareaValue],
      }),
      ...prevState.slice(props.imgIndex + 1),
    ]);
    setTimeout(
      () =>
        listRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        }),
      0
    );
    setTextareaValue("");
  };

  const { modal } = props;
  useEffect(() => setTextareaValue(""), [modal]);

  const handleLiked = (booleanValue) => {
    props.setData((prevState) => [
      ...prevState.slice(0, props.imgIndex),
      (prevState[props.imgIndex] = {
        ...prevState[props.imgIndex],
        liked: booleanValue,
      }),
      ...prevState.slice(props.imgIndex + 1),
    ]);
  };

  return (
    <StyledCommentsContainer>
      <StyledTextareaForm onSubmit={handleSubmit}>
        <textarea
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder={"Ваш комментарий"}
          required
        />
        <input type="submit" value="Отправить" />
        {props.data[props.imgIndex].liked ? (
          <ThumbUpAltIcon onClick={() => handleLiked(false)} />
        ) : (
          <ThumbUpAltOutlinedIcon onClick={() => handleLiked(true)} />
        )}
      </StyledTextareaForm>
      <CommentsList
        texts={props.data[props.imgIndex].comments}
        listRef={listRef}
      />
    </StyledCommentsContainer>
  );
};

const StyledCommentsContainer = styled.div`
  height: 100%;
  width: inherit;
  overflow: auto;
  background-color: #0b2027;
  border: 4px #40798c solid;
`;

const StyledTextareaForm = styled.form`
  padding: 10px 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  textarea {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    flex-grow: 1;
    resize: none;
    outline: none;
    padding: 16px;
    border-radius: 40px;
    color: #0b2027;
    font-family: "Oswald", sans-serif;
  }
  textarea:invalid {
    border: 3px solid gray;
    background-color: lightgray;
  }
  textarea:valid {
    border: 3px solid #70a9a1;
    background-color: #cfd7c7;
  }
  input {
    height: 50px;
    width: 160px;
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    font-size: 25px;
    border-radius: 40px;
    padding: 0;
    margin-left: 16px;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    color: #f6f1d1;
    background: transparent;
    background-image: linear-gradient(
      120deg,
      #70a9a1 0%,
      #70a9a1 50%,
      #f6f1d1 50%
    );
    background-size: 220%;
    transition: background-position 0.4s, color 0.4s;
    &:hover {
      transform: translateY(-4px);
      background-position: 100%;
      color: #70a9a1;
    }
    &:focus {
      outline: none;
      transform: translateY(-4px);
      background-position: 100%;
      color: #70a9a1;
    }
    &:active {
      transform: translateY(0px);
      filter: none;
    }
  }
  svg {
    font-size: 50px;
    margin-left: 15px;
    cursor: pointer;
    fill: #70a9a1;
    &:hover {
      transform: translateY(-4px);
    }
    &:focus {
      transform: translateY(-4px);
    }
    &:active {
      transform: translateY(0px);
    }
  }
`;

export default Comments;
