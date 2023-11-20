import { styled, keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import bgSky from "../../../images/resource/images/bg_Sky.png";
import vetInfo from "../../../config/vetInfo";
import { Typography, Box, Button, Grid, Chip } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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

export function MemberItem({ visibleVetInfo }) {
  const navigate = useNavigate();
  const handleVetMemberClick = (id) => {
    navigate(`/skyamg/vetMember/${id}`);
  };

  return (
    <Box container sx={{ width: "100%", maxWidth: "1200px" }}>
      {visibleVetInfo.map((vet) => {
        return (
          <Grid
            container
            spacing={0}
            sx={{ maxWidth: "1200px", mt: 10, paddingX: 5 }}
          >
            <Grid item xs={12} sm={12} md={4}>
              <Box
                sx={{
                  display: { md: "flex", xs: "flex", sm: "flex" },
                  bgcolor: "#3260AE",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: { md: "100%", sm: "370px", xs: "370px" },
                }}
              >
                <VetImgBox>
                  <img alt={vet.name} src={vet.timg} />
                </VetImgBox>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#F4F4F4",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: { md: "100%", sm: "300px", xs: "300px" },
                }}
              >
                <Typography
                  className="medium"
                  sx={{
                    fontWeight: "600",
                    color: "#3260AE",
                    lineHeight: 2,
                  }}
                >
                  Special Veterinary
                </Typography>
                <Typography
                  className="large"
                  sx={{
                    fontWeight: "100",
                    color: "#000000",
                    lineHeight: 1,
                  }}
                >
                  {vet.position}
                </Typography>
                <Typography
                  className="large"
                  sx={{
                    fontWeight: "700",
                    color: "#000000",
                    lineHeight: 1.5,
                  }}
                >
                  수의사 {vet.name}
                </Typography>
                <Typography
                  className="small"
                  sx={{
                    fontWeight: "400",
                    color: "#000000",
                    maxWidth: "370px",
                  }}
                >
                  숙련된 영상의학 전문 수의사가 안전하고 정확한 진단을
                  진행합니다.
                </Typography>
              </TextBox>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

function MemberList2({ memberIdx, subject }) {
  // const [animate, setAnimate] = useState(false);
  // const [windowWidth, setWindowWidth] = useState();
  const [showAll, setShowAll] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const filteredVetInfo = vetInfo.filter((vet) => memberIdx.includes(vet.id));
  console.log(filteredVetInfo);
  // const componentRef = useRef(null);
  const visibleVetInfo = showAll
    ? filteredVetInfo
    : filteredVetInfo.slice(0, 4);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);

  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // 윈도우 리사이즈 이벤트 리스너 추가
  //   window.addEventListener("resize", handleResize);

  //   // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
  //     //   const midScreen = window.innerHeight * 3.2;
  //     const componentTop = componentRef.current.getBoundingClientRect().top;

  //     // console.log('innerHeight : ', window.innerHeight);
  //     // console.log('scrollY : ', window.scrollY);
  //     // console.log('midScreen : ', midScreen);
  //     if (componentTop < window.innerHeight) {
  //       setAnimate(true);
  //     }
  //     // else {
  //     //   setAnimate(false);
  //     // }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleShowAllClick = () => {
    setShowAll(!showAll);
  };

  // const handleVetMemberClick = (id) => {
  //   navigate(`/skyamg/vetMember/${id}`);
  // };

  return (
    <MemberContainer>
      <MemberItem visibleVetInfo={visibleVetInfo} />
    </MemberContainer>
  );
}

const slideDown = keyframes`
    from {
        transform: translate(0, -50%);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;
const imgZoomin = keyframes`
    from {
        scale: 1
    }
    to {
        scale: 1.2
    }
`;

const slideIn = keyframes`
    from {
        transform: translate(-100%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const MemberContainer = styled.section`
  width: 100%;
  /* height: 92vh; */
  /* height: fit-content; */
  padding-bottom: 5rem;
  /* background-image: url(${bgSky});
  background-size: cover;
  background-repeat: no-repeat; */
  /* background-color: #f5f5f5; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  * {
    margin: 0;
  }
`;

const TitleWrapper = styled.div`
  && {
    width: 100%;
    height: fit-content;
    padding-bottom: 2rem;

    .animate {
      animation: ${slideDown} 4s ease;
    }

    > p {
      /* color: #000048; */
      margin-left: calc(100vw * (50 / 1580));
      margin-bottom: 0.35em;
      font-size: calc(100vw * (38 / 1240));
      font-weight: 700;
      /* text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); */
    }
  }
  @media screen and (max-width: 768px) {
    /* padding-bottom: 4rem; */
    && {
      > p {
        font-size: calc(100vw * (24 / 390));
      }
    }
  }
`;

const TextBox = styled(Box)`
  && {
    padding: 0 calc(100vw * (50 / 1580));
    p.large {
      font-size: calc(100vw * (52 / 1240));
    }
    p.medium {
      font-size: calc(100vw * (32 / 1240));
    }
    p.small {
      font-size: calc(100vw * (22 / 1240));
    }
  }
  @media screen and (max-width: 768px) {
    && {
      p.large {
        font-size: calc(100vw * (32 / 390));
      }
      p.medium {
        font-size: calc(100vw * (24 / 390));
      }
      p.small {
        font-size: calc(100vw * (14 / 390));
      }
    }
  }
`;

const MoreButton = styled(Box)`
  position: absolute;
  bottom: 0;
  left: -100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  background-color: #000048;
  color: #fff;
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s, left 0.3s;
  padding: 16px;
  border-bottom: 0.1px solid #262663;
  font-weight: 700;
`;
const VetProfile = styled(Box)`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  div {
    background-color: #000048;
    width: 350px;
  }

  &:hover {
    ${MoreButton} {
      display: flex; /* 버튼을 보이게 함 */
      opacity: 1;
      left: 0;
    }
  }

  p {
    color: #fff;
    /* font-size: 0.9rem; */
    font-weight: bold;
    /* text-align: center; */
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  }
`;

const ImgBox = styled(Box)`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    transition: ease;

    ${VetProfile}:hover & {
      scale: 1.2;
      animation: ${imgZoomin} 0.3s ease;
    }
  }
`;

const VetImgBox = styled(Box)`
  display: flex;
  overflow: hidden;
  justify-content: center;
  img {
    height: 100%;
    max-height: 370px;
    transition: ease;
    &:hover {
      scale: 1.2;
      animation: ${imgZoomin} 0.3s ease;
    }
  }
`;

export default MemberList2;
