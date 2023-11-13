import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { styled, keyframes } from "styled-components";

import bgImg1 from "../../../images/resource/images/portfolio_053945.png";
import bgImg2 from "../../../images/resource/images/portfolio_062119.jpg";
import bgImg3 from "../../../images/resource/images/portfolio_080228.jpg";
import toplogo_w from "../../../images/common/toplogo_w.png";
import { Custom } from "../../../styles/theme";
import { useEffect, useState } from "react";

function Slider() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <StyledSwiper
      spaceBetween={0}
      slidesPerView={1}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
    >
      <StyledSlideWrapper>
        <div className="imgWrapper">
          <img alt="bg img 3" src={bgImg3} />
        </div>
        <div
          className="textWrapper"
          style={{ fontSize: windowWidth > 800 ? "2rem" : "1.5rem" }}
        >
          <div>
            <p style={{ margin: 0 }}>
              하루 <strong>24시간,</strong>
            </p>
            <p style={{ margin: 0 }}>
              <Custom.Extra_Bold_20>/</Custom.Extra_Bold_20>
            </p>
            <p style={{ margin: 0 }}>
              1년 <strong>365일,</strong>
            </p>
            <p style={{ margin: 0 }}>
              <Custom.Extra_Bold_20>/</Custom.Extra_Bold_20>
            </p>
            <p style={{ margin: 0 }}>
              당신 곁엔 <strong>SKY 동물메디컬센터</strong>
            </p>

            <div>
              <Custom.Vertical_Line>|</Custom.Vertical_Line>

              <Custom.Medium_20>어디서든 방문하는</Custom.Medium_20>
              <p style={{ margin: 0 }}>
                <Custom.Extra_Bold_20>
                  각 지역 최대의 동물병원
                </Custom.Extra_Bold_20>
              </p>
            </div>
          </div>
        </div>
      </StyledSlideWrapper>
      <StyledSlideWrapper>
        <div className="imgWrapper">
          <img alt="bg img 1" src={bgImg1} />
        </div>
        <div
          className="textWrapper"
          style={{ fontSize: windowWidth > 800 ? "2rem" : "1.5rem" }}
        >
          <div>
            <span>
              <strong>최첨단 시스템 도입</strong>
            </span>
          </div>
          <img src={toplogo_w} color="white" />
          <div>
            <Custom.Vertical_Line>|</Custom.Vertical_Line>
            <p style={{ margin: 0 }}>
              <Custom.Extra_Bold_20>
                차별화되고 특화된 전문진료로,
              </Custom.Extra_Bold_20>
            </p>
            <Custom.Medium_20>
              우리 가족의 건강한 행복을 약속합니다.
            </Custom.Medium_20>
          </div>
        </div>
      </StyledSlideWrapper>
      <StyledSlideWrapper>
        <div className="imgWrapper">
          <img alt="bg img 2" src={bgImg2} />
        </div>
        <div
          className="textWrapper"
          style={{ fontSize: windowWidth > 800 ? "2rem" : "1.5rem" }}
        >
          <div>
            <span>
              <strong>최고의 의료진과 함께하는</strong>
            </span>
          </div>
          <img src={toplogo_w} color="white" />
          <div>
            <Custom.Vertical_Line>|</Custom.Vertical_Line>
            <p style={{ margin: 0 }}>
              <Custom.Extra_Bold_20>
                어디서도 볼 수 없는, 초특급 의료진!
              </Custom.Extra_Bold_20>
            </p>
            <Custom.Medium_20>수의사들도 추천하는 동물병원!</Custom.Medium_20>
          </div>
        </div>
      </StyledSlideWrapper>
    </StyledSwiper>
  );
}
const zoomOutImg = keyframes`
		from {
			scale: 1.5;
		}
		to {
			scale: 1;
		}
`;

const slideDown = keyframes`
    from {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
    to {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-slide-active img {
    animation: ${zoomOutImg} 5s ease-in-out;
  }
  .swiper-slide-active .textWrapper {
    animation: ${slideDown} 3s ease-in;
  }

  @media screen and (min-width: 1280px) {
    height: 92vh;
  }
`;
const StyledSlideWrapper = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  position: relative;
  /* display: flex; */
  align-items: center; /* Center align content vertically */
  justify-content: center; /* Center align content horizontally */

  .imgWrapper {
    z-index: 1;
    position: relative;

    img {
      width: 100%;
      height: auto;
      scale: 1;

      @media screen and (max-width: 690px) {
        width: auto;
        height: 92vh;
        transform: translate(-90vw, 0);
        /* transform: translate(-50%, 0); */
      }
    }
  }

  .textWrapper {
    color: #fff;
    position: absolute;
    z-index: 10;
    top: 40%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    text-align: center;
  }
`;

export default Slider;
