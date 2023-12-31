import React, { useState } from "react";
import { styled, keyframes } from "styled-components";

function Title({ img, title, enTitle }) {
  return (
    <Container>
      <ImageContainer>
        <img src={img} alt="" />

        <div
          className={"innerWrapper animate"}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            backgroundColor: "#000",
            opacity: 0.7,
          }}
        />
        <TextDiv>
          <span>INCHEON SKY ANIMAL MEDICAL CENTER</span>
          <p className={enTitle ? "spacing title" : "title"}>{title}</p>
          {enTitle && <p className="bottom">{enTitle}</p>}
        </TextDiv>
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  img {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    display: block;

    transform: scale(1);
    opacity: 1;
    animation: fadeInAnimation 3s forwards;
  }

  max-height: 60vh;
  overflow: hidden;

  @keyframes fadeInAnimation {
    from {
      opacity: 1;
      scale: 1.2;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;

const slideUp = keyframes`
    from {
      transform: translate(-50%, -70%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
`;

const TextDiv = styled.div`
  animation: ${slideUp} 4s ease;
  width: 100%;
  position: absolute;
  top: calc(50% - 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: calc(100vw * (60 / 1240));
  font-weight: 500;
  text-align: center;
  color: #fff;
  line-height: 1.1;

  p,
  span {
    margin: 0px;
  }
  span {
    font-size: 20px;
    font-weight: 300;
    /*  */

    font-style: normal;
    font-weight: 300;
    font-size: calc(100vw * (16 / 1240));
    /* identical to box height */
    text-align: center;

    color: #ffffff;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .title.spacing {
    letter-spacing: calc(100vw * (26 / 1240));
  }
  .bottom {
    /* MRI & CT Center */

    font-weight: 400;
    font-size: calc(100vw * (26 / 1240));
    /* identical to box height */
    text-align: center;

    color: #f7f0cb;
  }

  @media screen and (max-width: 768px) {
    && {
      font-size: calc(100vw * (26 / 390));
      top: calc(50% - 10px);
      > span {
        font-size: calc(100vw * (10 / 390));
      }
      > p.bottom {
        font-size: calc(100vw * (12 / 390));
      }
    }
  }
`;

const H2 = styled.h2`
  position: absolute;
  top: calc(50% - 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 26px;
    top: calc(50% - 13px);
  }
`;
export default Title;
