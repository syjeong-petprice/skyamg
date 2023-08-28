import React, { useState } from "react";
import { styled } from "styled-components";

function Title({ img, title }) {
  return (
    <Container>
      <ImageContainer>
        <img src={img} alt="" />
        <H2>{title}</H2>
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
  }
`;

const H2 = styled.h2`
  position: absolute;
  top: calc(50% - 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 960px) {
    font-size: 26px;
    top: calc(50% - 13px);
  }
`;
export default Title;
