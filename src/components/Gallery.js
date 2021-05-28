import React, { useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CloseIcon from "@material-ui/icons/Close";
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Img4 from "../images/img4.jpg";
import Img5 from "../images/img5.jpg";
import Img6 from "../images/img6.jpg";
import Img7 from "../images/img7.jpg";
import Img8 from "../images/img8.jpg";
import Img9 from "../images/img9.jpg";
import Img10 from "../images/img10.jpg";
import Img11 from "../images/img11.jpg";
import Img12 from "../images/img12.jpg";
import Img13 from "../images/img13.jpg";
import Img14 from "../images/img14.jpg";
import Img15 from "../images/img15.jpg";
import Img16 from "../images/img16.jpg";
import Img17 from "../images/img17.jpg";
import Img18 from "../images/img18.jpg";
import Img19 from "../images/img19.jpg";
import Img20 from "../images/img20.jpg";
import Comments from "./Comments";

const images = [
  {
    imgSrc: Img1,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img2,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img3,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img4,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img5,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img6,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img7,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img8,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img9,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img10,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img11,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img12,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img13,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img14,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img15,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img16,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img17,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img18,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img19,
    liked: false,
    comments: [],
  },
  {
    imgSrc: Img20,
    liked: false,
    comments: [],
  },
];

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState(0);
  const [data, setData] = useState(images);

  const getImg = (i) => {
    setModalImg(i);
    setModal(true);
  };

  return (
    <StyledImgUl>
      <StyledModal
        style={{
          visibility: modal ? "visible" : "hidden",
          opacity: modal ? "1" : "0",
          transform: modal ? "scale(1)" : "scale(0)",
        }}
      >
        <StyledModalImgContainer>
          <img src={data[modalImg].imgSrc} alt="modal" />
          <Comments
            imgIndex={modalImg}
            data={data}
            setData={setData}
            modal={modal}
          />
        </StyledModalImgContainer>
        <CloseIcon onClick={() => setModal(false)} className={"close-icon"} />
      </StyledModal>
      {data.map((img, i) => {
        return (
          <StyledImgLi key={i} onClick={() => getImg(i)}>
            <LazyLoadImage src={img.imgSrc} alt={i} />
          </StyledImgLi>
        );
      })}
    </StyledImgUl>
  );
};

const StyledImgUl = styled.ul`
  column-count: 3;
  column-width: 33%;
  padding: 0 12px;
  @media (max-width: 991px) {
    column-count: 2;
    column-width: 50%;
  }
  @media (max-width: 480px) {
    column-count: 1;
    column-width: 100%;
  }
`;

const StyledImgLi = styled.li`
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  img {
    width: 100%;
  }
  img:hover {
    filter: opacity(0.8);
  }
  list-style: none;
`;

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  transition: opacity 0.2s ease, visibility 0.2s ease,
    transform 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  .close-icon {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 3rem;
    height: 3rem;
    padding: 5px;
    color: white;
    cursor: pointer;
  }
`;

const StyledModalImgContainer = styled.div`
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 70%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    margin: 0 auto;
  }
`;

export default Gallery;
