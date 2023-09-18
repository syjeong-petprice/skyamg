import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled from "styled-components";

const Slider = ({ equipmentData }) => {
  const [index, setIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // 자동 슬라이딩 상태

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const handlePrevSlide = () => {
    // 이전 슬라이드로 이동
    if (index > 0) {
      setIndex(index - 1);
    } else {
      // 맨 처음 슬라이드에서 이전 버튼을 눌렀을 때, 맨 마지막 요소로 이동
      setIndex(equipmentData.length - 1);
    }
  };

  const handleNextSlide = () => {
    // 다음 슬라이드로 이동
    if (index < equipmentData.length - 1) {
      setIndex(index + 1);
    } else {
      // 맨 마지막 슬라이드에서 다음 버튼을 눌렀을 때, 맨 처음 요소로 이동
      setIndex(0);
    }
  };
  // 자동 슬라이딩을 시작하는 함수
  const startAutoSlide = () => {
    setAutoSlide(true);
  };

  // 자동 슬라이딩을 멈추는 함수
  const stopAutoSlide = () => {
    setAutoSlide(false);
  };

  // 자동 슬라이딩을 위한 useEffect
  useEffect(() => {
    let autoSlideInterval;

    // autoSlide 상태가 true일 때, 1초마다 다음 슬라이드로 이동
    if (autoSlide) {
      autoSlideInterval = setInterval(() => {
        handleNextSlide();
      }, 3000);
    } else {
      clearInterval(autoSlideInterval);
    }

    // 컴포넌트가 언마운트되면 clearInterval로 인터벌 제거
    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [autoSlide, index, equipmentData]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={stopAutoSlide} // 마우스 오버시 자동 슬라이딩 멈춤
      onMouseLeave={startAutoSlide} // 마우스 아웃시 자동 슬라이딩 시작
    >
      <ChevronLeftIcon onClick={handlePrevSlide} />

      <SwipeableViews
        style={{ width: "90%", height: "100%" }}
        index={index}
        onChangeIndex={handleChangeIndex}
      >
        {equipmentData.map((item, index) => (
          <SliderItems key={index}>
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </SliderItems>
        ))}
      </SwipeableViews>
      <ChevronRightIcon onClick={handleNextSlide} />
    </div>
  );
};

const SliderItems = styled.div`
  display: flex;

  > img {
    width: 100%;
    height: calc(100vw * (400 / 1240));
  }
  > div {
    /* min-width: 40%; */
    height: calc(100vw * (400 / 1240));
    padding: calc(100vw * (50 / 1580));
    background-color: #222;
    color: #fff;

    > h3 {
      font-size: calc(100vw * (30 / 1240));
    }
    > p {
      font-size: calc(100vw * (18 / 1240));
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    > img {
      width: 100%;
      height: calc(100vw * (220 / 390));
    }
    > div {
      width: 100%;
      height: calc(100vw * (420 / 390));
      padding: calc(100vw * (35 / 390));
      align-items: flex-start;

      > h3 {
        font-size: calc(100vw * (22 / 390));
      }
      > p {
        font-size: calc(100vw * (16 / 390));
      }
    }
  }
`;

export default Slider;
