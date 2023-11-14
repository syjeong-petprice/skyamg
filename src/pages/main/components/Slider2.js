import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import bgImg1 from "../../../images/resource/images/portfolio_053945.png";
import bgImg2 from "../../../images/resource/images/portfolio_062119.jpg";
import bgImg3 from "../../../images/resource/images/portfolio_080228.jpg";
import toplogo_w from "../../../images/common/toplogo_w.png";

function Preview() {
  const [windowWidth, setWindowWidth] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (windowWidth > 800) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowWidth]);

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };
  return (
    <PreviewContainer id={"Main_Slider"}>
      <SlideWrapper>
        <div className="mainWrapper">
          <StyledSlider {...settings}>
            <div className="slideImg imgOne">
              <div className={isMobile ? "innerText_m" : "innerText"}>
                <p>
                  하루 <strong>24시간,</strong>
                  1년 <strong>365일,</strong>
                </p>
                {/* <p className="next_line_bar">/</p>
                <p>
                </p> */}
                {/* <p className="next_line_bar">/</p> */}
                <p>
                  당신 곁엔 <strong>인천SKY동물메디컬센터</strong>
                </p>
                <p className={isMobile ? "bar_m" : "bar"}>|</p>
                <p className={isMobile ? "smallText_m" : "smallText"}>
                  어디서든 방문하는
                </p>
                <p className={isMobile ? "smallText_m" : "smallText"}>
                  <strong>인천 지역 최대의 동물병원</strong>
                </p>
              </div>
            </div>
            <div className="slideImg imgTwo">
              <div className={isMobile ? "innerText_m" : "innerText"}>
                <p>최고의 의료진과 함께하는</p>
                <img
                  src={toplogo_w}
                  color="white"
                  alt={"logo"}
                  style={{ marginTop: 20, maxWidth: "60vw" }}
                />
                <p className={isMobile ? "bar_m" : "bar"}>|</p>
                <p className={isMobile ? "smallText_m" : "smallText"}>
                  <strong>어디서도 볼 수 없는, 초특급 의료진!</strong>
                </p>
                <p className={isMobile ? "smallText_m" : "smallText"}>
                  수의사들도 추천하는 동물병원!
                </p>
              </div>
            </div>
            <div className="slideImg imgThree">
              <div className={isMobile ? "innerText_m" : "innerText"}>
                <p>
                  <strong>최첨단 시스템 도입</strong>
                </p>
                <img
                  src={toplogo_w}
                  color="white"
                  alt={"logo"}
                  style={{ marginTop: 20, maxWidth: "60vw" }}
                />
                <p className={isMobile ? "bar_m" : "bar"}>|</p>
                <p className={isMobile ? "smallText_m" : "smallText"}>
                  <strong>차별화되고 특화된 전문진료로,</strong>
                </p>
                <p className={isMobile ? "smallText_m" : "smallText"}>
                  우리 가족의 건강한 행복을 약속합니다.
                </p>
              </div>
            </div>
          </StyledSlider>
        </div>
      </SlideWrapper>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.section`
  width: 100%;
  height: 100%;
  /* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative; */

  * {
    margin: 0;
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 55%;
  /* background-color: yellowgreen; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  /* display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden; */

  /* 기본 스타일 */
  .slick-slide {
    transition: transform 3s ease;
    transform: scale(1);
    opacity: 1 !important;
  }

  /* 활성화된 슬라이드에 대한 스타일 */
  .slick-slide.slick-active {
    transform: scale(1);
    opacity: 1;
    animation: fadeInAnimation 3s forwards;
  }

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

  .slick-list {
    position: relative;
    z-index: 2;
    width: 100vw;
    height: 92vh;

    @media screen and (max-width: 1700px) {
      width: 100vw;
    }
    @media screen and (max-width: 1560px) {
      width: 100vw;
    }
    @media screen and (max-width: 1400px) {
      width: 100vw;
    }
    @media screen and (max-width: 1275px) {
      width: 100vw;
    }
    @media screen and (max-width: 1168px) {
      width: 100vw;
    }
    @media screen and (max-width: 1077px) {
      width: 100vw;
    }
    @media screen and (max-width: 1000px) {
      width: 100vw;
    }
    @media screen and (max-width: 935px) {
      width: 100vw;
    }
    @media screen and (max-width: 874px) {
      width: 100vw;
    }
    @media screen and (max-width: 825px) {
      width: 100vw;
    }
    @media screen and (max-width: 778px) {
      width: 100vw;
    }
    @media screen and (max-width: 738px) {
      width: 100vw;
    }
    @media screen and (max-width: 699px) {
      width: 100vw;
    }
    @media screen and (max-width: 667px) {
      width: 100vw;
    }
    @media screen and (max-width: 637px) {
      width: 100vw;
    }
    @media screen and (max-width: 609px) {
      width: 100vw;
    }
    @media screen and (max-width: 583px) {
      width: 100vw;
    }
    @media screen and (max-width: 560px) {
      width: 100vw;
    }
    @media screen and (max-width: 400px) {
      width: 100vw;
    }
    @media screen and (max-width: 394px) {
      width: 100vw;
    }

    div {
      width: 100%;
      height: 100%;

      .slick-active p {
        animation: slideUp 4s forwards;
      }

      .imgOne {
        background-image: url(${bgImg1});
        background-size: cover;
        background-position: center;
      }
      .imgTwo {
        background-image: url(${bgImg2});
        background-size: cover;
        background-position: center;
      }
      .imgThree {
        background-image: url(${bgImg3});
        background-size: cover;
        background-position: center;
      }

      @keyframes slideUp {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(30%);
          opacity: 1;
        }
      }

      .innerText {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(30%);

        .smallText {
          font-size: 1.5rem;
        }
        .bar {
          font-size: 3rem;
          font-weight: 100;
          margin: 10px;
        }
        .next_line_bar {
          font-size: 1.5rem;
          font-weight: 100;
          margin: 10px;
        }
      }
      .innerText_m {
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(30%);

        .smallText_m {
          font-size: 1rem;
        }
        .bar_m {
          font-size: 2rem;
          font-weight: 100;
          margin: 10px;
        }
      }
    }
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

export default Preview;
