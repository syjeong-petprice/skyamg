import { styled, keyframes } from "styled-components";
import imgTwo from "../../../images/resource/youtube/01.png";
import imgOne from "../../../images/resource/youtube/KakaoTalk_Photo_2023-11-13-11-55-23.png";
import imgThree from "../../../images/resource/youtube/3.png";
import imgFour from "../../../images/resource/youtube/4.png";
import youtubeLogo from "../../../images/resource/youtube/youtubelogo.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const youtubeInfo = [
  {
    id: 1,
    title: "동물병원에서도 초전도체가 사용된다?!",
    code: "/nA7ELDQ6x7k",
    img: imgOne,
  },
  {
    id: 2,
    title: "강아지 귀 청소 안 하면 어떻게 될까?",
    code: "rKl5euhr98k",
    img: imgTwo,
  },
  // {
  //   id: 3,
  //   title: "닥스훈트 디스크 MRI검사 디스크 수술 인천동물병원",
  //   code: "DtuyDsVEUcQ?si=A2PN1e9qAECWC8So",
  //   img: imgThree,
  // },
  // {
  //   id: 4,
  //   title: "부평스카이동물의료센터의 수술 후 물리치료 모습",
  //   code: "noDZFjR6-Mw?si=OiAlp62NLDvAi8Xj",
  //   img: imgFour,
  // },
];

function Youtube() {
  const [title, setTitle] = useState("nA7ELDQ6x7k");
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  //   const componentRef = useRef(null);

  const handleClick = (e) => {
    console.log(e.target.name);
  };
  const handleChange = (e) => {
    console.log(e.target);
  };
  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    nextArrow: (
      <StyledNextArrow onClick={handleClick} name="next">
        <div className="innerWrapper">
          <KeyboardArrowRightIcon
            style={{
              fontSize: "3rem",
              color: "#fff",
            }}
          />
        </div>
      </StyledNextArrow>
    ),
    prevArrow: (
      <StyledPrevArrow onClick={handleClick} name="prev">
        <div className="innerWrapper">
          <KeyboardArrowLeftIcon style={{ fontSize: "3rem", color: "#fff" }} />
        </div>
      </StyledPrevArrow>
    ),
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 윈도우 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (windowWidth > 800) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <YoutubeContainer>
      <EmbedWrapper>
        <div className="textWrapper">
          <div className="heading">
            <h3>인천SKY동물메디컬센터</h3>
            <div>
              <img src={youtubeLogo} alt="youtube logo" />
            </div>
          </div>
          {/* <div className="content">
						<h4>최신형 MRI 장비 도입! 인천스카이메디컬</h4>
						<p>SKY동물메디컬센터를 구독하고 최신 정보를 받아보세요.</p>
					</div> */}
          <div style={{ marginBottom: "1rem" }}>
            <a href="https://www.youtube.com/@skyamg" target="_blank">
              <Button variant="contained" color="primary">
                채널 바로가기
              </Button>
            </a>
          </div>
        </div>
        <div className="youtubeWrapper">
          <iframe
            width="600"
            height="380"
            src={`https://www.youtube.com/embed/${title}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </EmbedWrapper>
      <ThumbnailWrapper youtubeInfo={youtubeInfo}>
        {isMobile && (
          <p
            style={{
              fontSize: "1.5rem",
              color: "white",
              margin: "1rem",
              fontWeight: 900,
            }}
          >
            {"더 보기"}
          </p>
        )}
        {youtubeInfo.map((item) => (
          <div className="imgWrapper" key={item.id}>
            <img
              onClick={() => setTitle(item.code)}
              src={item.img}
              alt={item.title}
              value={item.code}
              style={{
                border: title === item.code ? "3px solid #fc1c00" : "none",
              }}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </ThumbnailWrapper>
    </YoutubeContainer>
  );
}

const YoutubeContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding-top: 3rem;
  padding-bottom: 3rem;

  * {
    margin: 0;
  }
`;

const EmbedWrapper = styled.div`
  width: 80vw;
  height: 70%;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1060px) {
    flex-direction: column;
  }

  .youtubeWrapper {
    iframe {
      border-radius: 20px;
      margin-bottom: 1rem;
      @media screen and (max-width: 1050px) {
        width: 500px;
        height: 300px;
      }
      @media screen and (max-width: 635px) {
        width: 480px;
        height: 290px;
      }
      @media screen and (max-width: 520px) {
        width: 400px;
        height: 240px;
      }

      @media screen and (max-width: 425px) {
        width: 305px;
        height: 200px;
      }
    }
  }
  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;

      @media screen and (max-width: 1060px) {
        flex-direction: row;
      }
      @media screen and (max-width: 440px) {
        flex-direction: column;
      }

      h3 {
        font-size: 1.5rem;
        @media screen and (max-width: 440px) {
          font-size: 1.2rem;
        }
      }

      div {
        width: 150px;
        height: 50px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .content {
      margin-bottom: 30px;
    }
  }
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  /* height: 30%; */
  height: fit-content;
  background-color: #30536f;
  display: flex;
  justify-content: ${({ youtubeInfo }) =>
    youtubeInfo.length > 3 ? "flex-start" : "center"};
  align-items: center;
  padding: ${({ youtubeInfo }) =>
    youtubeInfo.length > 3 ? "2rem 5rem 0 5rem" : "2rem 0 0 0"};
  gap: 5rem;
  overflow-x: auto;
  white-space: nowrap;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 0 0;
    gap: 2rem;
  }

  .imgWrapper {
    /* width: 300px; */

    /* height: 85%; */
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    /* margin-right: 5rem; */
    box-sizing: border-box;

    @media screen and (max-width: 800px) {
      /* flex-direction: row; */
      width: 80%;
      margin-right: 0; // 모바일에서는 간격 제거
    }

    img {
      width: 300px;
      height: 100%;
      object-fit: cover;
    }
    p {
      height: 50px;
      color: #fff;
      font-size: 0.9rem;
      opacity: 0.8;
      text-align: center;
    }
  }
`;

const StyledNextArrow = styled.div`
  /* width: 50px; */
  /* height: 100%; */
  position: absolute;
  z-index: 99;
  /* top: 420px; */
  right: 30px;

  .innerWrapper {
    /* background-color: #2c3032; */
    width: 50px;
    height: 50px;
  }
`;
const StyledPrevArrow = styled.div`
  /* width: 150px;
	height: 50px; */
  position: absolute;
  z-index: 10;
  left: 0;
  /* top: 420px;
	left: 600px; */

  /* right: 300px; */
  /* @media screen and (max-width: 1280px) {
		left: 300px;
	}
	@media screen and (max-width: 960px) {
		left: 130px;
	}
	@media screen and (max-width: 740px) {
		left: 0;
	} */

  .innerWrapper {
    /* background-color: #30536f; */
    /* width: 550px;
		height: 50px; */

    /* @media screen and (max-width: 1280px) {
			width: 300px;
		}
		@media screen and (max-width: 960px) {
			width: 200px;
		} */
    /* @media screen and (max-width: 740px) {
			width: 520px;
		}
		@media screen and (max-width: 550px) {
			width: 380px;
		} */
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-height: 1rem; */
  /* background-color: yellowgreen; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  /* 기본 스타일 */
  .slick-slide {
    transition: transform 3s ease;
    transform: scale(0.9);
    opacity: 0.6;
  }

  /* 활성화된 슬라이드에 대한 스타일 */
  .slick-slide.slick-active {
    transform: scale(1);
    opacity: 1;
    animation: fadeInAnimation 3s forwards;
  }

  @keyframes fadeInAnimation {
    from {
      opacity: 0.6;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  .slick-list {
    position: relative;
    z-index: 2;
    width: 80vw;
    height: 25vh;

    /* @media screen and (max-width: 1280px) {
			width: 900px;
		}
		@media screen and (max-width: 960px) {
			width: 690px;
		} */
    @media screen and (max-width: 740px) {
      width: 85vw;
    }

    div {
      /* background-color: palegoldenrod; */
      width: 100%;
      height: 100%;
    }

    .slideImg {
      p {
        margin-top: 30px;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
      }
    }

    .imgOne {
      background-image: url(${imgOne});
      background-size: cover;
      background-position: center;
    }
    .imgTwo {
      background-image: url(${imgTwo});
      background-size: cover;
      background-position: center;
    }
    /* .imgThree {
      background-image: url(${imgThree});
      background-size: cover;
      background-position: center;
    }
    .imgFour {
      background-image: url(${imgFour});
      background-size: cover;
      background-position: center;
    } */
  }

  .slick-prev {
    /* position: absolute; */
    /* z-index: 10;
		bottom: 0;
		left: 80%; */
    &:before {
      display: none;
    }
  }
  .slick-next {
    /* position: absolute;
		z-index: 10;
		bottom: 0;
		right: 0; */
    &:before {
      display: none;
    }
  }
`;

export default Youtube;
