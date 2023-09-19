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
    <Grid
      container
      rowSpacing={6}
      sx={{
        justifyContent: visibleVetInfo.length > 4 ? "flex-start" : "center",
      }}
    >
      {visibleVetInfo.map((vet) => {
        return (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "coulmn",
              justifyContent: "center",
              flexBasis: "100%",
            }}
            key={vet.id}
            item
            sm={12}
            md={6}
            lg={3}
          >
            <VetProfile
              sx={{ cursor: vet.id !== 1 ? "pointer" : "default" }}
              onClick={() => {
                if (vet.id !== 1) {
                  handleVetMemberClick(vet.id);
                }
              }}
            >
              <ImgBox>
                <img alt={vet.name} src={vet.img} />
                {vet.id !== 1 && (
                  <MoreButton className="button-container" variant="contained">
                    자세히 보기
                    <ChevronRightIcon />
                  </MoreButton>
                )}
              </ImgBox>
              <Box
                sx={{
                  p: "1rem",
                }}
              >
                <Typography sx={{ fontSize: "18px", mb: 2 }}>수의사</Typography>
                <Typography sx={{ fontSize: "30px", mb: 2 }}>
                  {vet.name}
                </Typography>
                <Chip
                  label={vet.position}
                  variant="outlined"
                  style={{
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "14px",
                    borderRadius: "16px",
                    padding: "6px 10px",
                    height: "34px",
                    width: "fit-content",
                  }}
                />
              </Box>
            </VetProfile>
          </Grid>
        );
      })}
    </Grid>
  );
}

function MemberList({ memberIdx, subject }) {
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
    <MemberContainer ref={ref} className={`${isAnimated ? "animate" : ""}`}>
      <TitleWrapper>
        <Typography>{subject} 의료진</Typography>
      </TitleWrapper>
      <MemberItem visibleVetInfo={visibleVetInfo} />
      {filteredVetInfo.length > 4 && (
        <Button
          size="large"
          sx={{
            mt: "4rem",
            backgroundColor: "#000048",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "#000048",
              color: "#000048",
            },
          }}
          variant="contained"
          onClick={handleShowAllClick}
        >
          {!showAll ? "더 보기" : "접기"}
        </Button>
      )}
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
  padding-top: 5rem;
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
  && {
    opacity: 0;
    transform: translateX(-100px);
    transition: opacity 0.5s, transform 0.5s;

    &.animate {
      opacity: 1;
      transform: translateX(0);
      animation: ${slideInLeft} 0.5s ease-in-out; // 애니메이션 효과 적용
    }
  }
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

export default MemberList;
