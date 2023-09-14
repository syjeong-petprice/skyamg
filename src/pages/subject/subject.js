import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { styled, css, keyframes } from "styled-components";
import { Button, Box, Typography } from "@mui/material";

import img from "../../images/title/visual_greeting.jpeg";
import centerInfo from "../../config/centerInfo";
import Title from "../../components/Title";
import ExtraContentTable from "./components/ExtraContentTable";

function Subject() {
  const { id } = useParams();
  const info = centerInfo.find((item) => item.id === Number(id));
  const sec2ImgUrl = info.sec2Img;
  console.log(sec2ImgUrl);
  // console.log(id, idx);
  // 1: 영상의료센터, 2: 신경정형, 3: 만성질환, 4: 한방재활
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isChange, setIsChange] = useState(false);

  const prevLocation = useRef(null);
  const location = useLocation();
  const [isVisible1, setIsVisible1] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const contentOffsetTop = section1Ref.current.offsetTop;
  //     const windowHeight = window.innerHeight;
  //     const scrollY = window.scrollY;

  //     // 요소가 화면에 나타나면 isVisible1 상태를 변경하여 애니메이션을 실행
  //     if (scrollY + windowHeight >= contentOffsetTop) {
  //       setIsVisible1(true);
  //     } else {
  //       setIsVisible1(false); // 요소가 화면에서 보이지 않을 때 다시 초기 상태로 설정
  //     }
  //   };

  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener("scroll", handleScroll);

  //   // 컴포넌트가 언마운트될 때 리스너 제거
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const buttonClickhandler = (i) => {
    setIsChange(true);
    setSelectedIdx(i);
    setTimeout(() => {
      setIsChange(false);
    }, 500);
  };

  return (
    <>
      <Title img={info.titleImg || img} title={info.title} />
      <Container>
        <Section1 ref={section1Ref}>
          <TextBox isVisible1={isVisible1}>
            <Typography
              sx={{ fontSize: "calc(100vw * (38 / 1240))", fontWeight: 700 }}
              gutterBottom
            >
              {info.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "calc(100vw * (24 / 1240))",
                fontWeight: 700,
                whiteSpace: "pre-wrap",
              }}
              gutterBottom
            >
              {info.subTitle}
            </Typography>
          </TextBox>
          <ImgBox isVisible1={isVisible1}>
            <img src={info.primaryImg} />
          </ImgBox>
        </Section1>
        <Section2>
          <img src={info.sec2Img} alt="Section 2 Image" />
          <Box>
            <Box>
              <InnerBox>
                <Typography>
                  모든 진료의 시작점,
                  <Bold>SKY 영상의료센터</Bold>
                </Typography>
                <Typography>{info.description}</Typography>
              </InnerBox>
            </Box>
          </Box>
        </Section2>
      </Container>
    </>
  );
}

const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

/* Right로 이동하는 애니메이션 */
const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
  }
`;

const Section1 = styled.section`
  && {
    padding-top: calc(100vw * (120 / 1580));
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    && {
      flex-direction: column;
    }
  }
`;

const Section2 = styled(Section1)`
  && {
    height: calc(100vw * (550 / 1580));
    background: url(${(props) => props.sec2ImgUrl}) no-repeat center bottom /
      100% calc(100vw * (210 / 390));
  }
`;

const TextBox = styled(Box)`
  && {
    margin-left: calc(100vw * (50 / 1580));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: calc(100vw * (48 / 1240));
    opacity: 0; /* 초기에 숨김 */
    animation: ${slideInLeft} 0.5s ease-in-out forwards;
  }

  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      /* height: calc(100vw * (210 / 390)); */
    }
    :first-child {
      font-size: calc(100vw * (24 / 390));
    }
    :last-child {
      font-size: calc(100vw * (20 / 390));
    }
  }
`;

const ImgBox = styled(Box)`
  && {
    width: calc(100vw * (700 / 1240));
    /* height: calc(100vw * (400 / 1240)); */
    overflow: hidden;
    opacity: 0; /* 초기에 숨김 */
    animation: ${slideInRight} 0.5s ease-in-out forwards;

    img {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      /* height: calc(100vw * (210 / 390)); */
    }
  }
`;

const InnerBox = styled(Box)`
  && {
    width: calc(100vw * (540 / 1580));
    height: calc(100vw * (490 / 1580));
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(100vw * (30 / 1580));
    padding: calc(100vw * (50 / 1580));
    margin-left: calc(100vw * (50 / 1580));
    font-size: 18px;
    color: #fff;
    line-height: 1.44;
    background-color: #222;

    :first-child {
      /* font-size: calc(100vw * (16 / 390)); */
      font-size: calc(100vw * (26 / 1580));
    }
    :last-child {
      font-size: calc(100vw * (18 / 1580));
    }
  }

  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      height: 100vw;
      margin-left: 0;
      gap: calc(100vw * (30 / 390));
    }
    :first-child {
      font-size: calc(100vw * (20 / 390)) !important;
    }
    :last-child {
      font-size: calc(100vw * (16 / 390)) !important;
    }
  }
`;

const Bold = styled(Typography)`
  && {
    font-size: calc(100vw * (30 / 1240)) !important;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    && {
      margin-top: calc(100vw * (10 / 390));
      font-size: calc(100vw * (24 / 390)) !important;
    }
  }
`;

export default Subject;
