import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled, { keyframes } from "styled-components";

export default function ActionAreaCard(props) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      // 각 카드가 나타나는 시간차를 두기 위한 setTimeout 사용
      const timeoutId = setTimeout(() => {
        setIsAnimated(true);
      }, props.index * 200); // 시간차를 조절하려면 여기의 숫자를 조정하세요
      return () => clearTimeout(timeoutId);
    } else setIsAnimated(false);
  }, [inView, props.index]);
  return (
    <StyledCard className={`${isAnimated ? "animate" : ""}`} ref={ref}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            borderBottom: "1px solid black",
            marginBottom: "calc(100vw * (30 / 1580))",
            paddingBottom: "calc(100vw * (23 / 1580))",
          }}
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </StyledCard>
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

const StyledCard = styled(Card)`
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: translateY(100px);

  &.animate {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.3s ease-in-out; // 애니메이션 효과 적용
  }
`;
