import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styled, { keyframes } from "styled-components";

export default function ActionAreaCard(props) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else setIsAnimated(false);
    // if (inView) {
    //   // 각 카드가 나타나는 시간차를 두기 위한 setTimeout 사용
    //   const timeoutId = setTimeout(() => {
    //     setIsAnimated(true);
    //   }, props.index * 200); // 시간차를 조절하려면 여기의 숫자를 조정하세요
    //   return () => clearTimeout(timeoutId);
    // } else setIsAnimated(false);
  }, [inView, props.index]);
  return (
    <StyledBox className={`${isAnimated ? "animate" : ""}`} ref={ref}>
      <img src={props.img} alt={props.index} />
      <Box
      // style={{
      //   backgroundColor: "#F4F4F4",
      //   width: "50%",
      //   heigth: "100%",
      //   textAlign: "center",
      // }}
      >
        <Typography className="num">{props.index + 1}</Typography>
        <Typography className="en">{props.enTitle}</Typography>
        <Typography className="title">{props.title}</Typography>
        <Typography className="content">{props.content}</Typography>
      </Box>
    </StyledBox>
    // <StyledCard className={`${isAnimated ? "animate" : ""}`} ref={ref}>
    //   {/* <CardActionArea> */}
    //   <CardMedia
    //     component="img"
    //     height="200"
    //     image={props.img}
    //     alt="green iguana"
    //   />
    //   <CardContent>
    //     <Typography
    //       gutterBottom
    //       variant="h5"
    //       component="div"
    //       sx={{
    //         borderBottom: "1px solid black",
    //         marginBottom: "calc(100vw * (30 / 1580))",
    //         paddingBottom: "calc(100vw * (23 / 1580))",
    //       }}
    //     >
    //       {props.title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {props.content}
    //     </Typography>
    //   </CardContent>
    //   {/* </CardActionArea> */}
    // </StyledCard>
  );
}
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledBox = styled(Box)`
  && {
    transition: opacity 0.3s, transform 0.3s;
    opacity: 0;
    transform: translateY(100px);
    width: 80%;
    display: flex;
    > img {
      width: 50%;
      /* height: 250px; */
      object-fit: cover;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: calc(100vw * (60 / 1240));
      gap: calc(100vw * (26 / 1240));
      background-color: #f4f4f4;
      width: 50%;
      height: 100%;
      position: relative;
      > * {
        text-align: center;
      }
    }
    .num {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(179, 204, 248, 0.4);
      font-size: 200px;
    }
    .en {
      font-size: 24px;
      z-index: 1;
    }
    .title {
      font-size: 40px;
      font-weight: 700;
      color: #3260ae;
      z-index: 1;
    }
    .content {
      font-size: 20px;
      z-index: 1;
    }
    &.animate {
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeIn} 0.3s ease-in-out; // 애니메이션 효과 적용
    }
  }
  @media screen and (max-width: 768px) {
    && {
      flex-direction: column;
      align-items: center;
      > img {
        width: 100%;
      }
      > div {
        height: fit-content;
        min-height: 300px;
        width: 100%;
        .num {
          font-size: calc(100vw * (160 / 390));
        }
        .en {
          font-size: calc(100vw * (14 / 390));
        }
        .title {
          font-size: calc(100vw * (18 / 390));
        }
        .content {
          font-size: calc(100vw * (12 / 390));
        }
      }
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1500px) {
    && {
      .num {
        font-size: calc(100vw * (150 / 1240));
      }
      .en {
        font-size: calc(100vw * (20 / 1240));
      }
      .title {
        font-size: calc(100vw * (28 / 1240));
      }
      .content {
        font-size: calc(100vw * (16 / 1240));
      }
    }
  }
`;

const StyledCard = styled(Card)`
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: translateY(100px);
  width: 30%;

  &.animate {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.3s ease-in-out; // 애니메이션 효과 적용
  }
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;
