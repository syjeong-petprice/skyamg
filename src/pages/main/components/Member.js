import { styled, keyframes } from "styled-components";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgSky from "../../../images/resource/images/bg_Sky.png";
import vetInfo from "../../../config/vetInfo";

function Member() {
  const [animate, setAnimate] = useState(false);
  const [show, setShow] = useState(5);
  const [windowWidth, setWindowWidth] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 오토플레이 간격을 조절할 수 있습니다.
    pauseOnHover: true,
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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
      const midScreen = window.innerHeight / 2;

      // console.log('innerHeight : ', window.innerHeight);
      // console.log('scrollY : ', window.scrollY);
      // console.log('midScreen : ', midScreen);
      if (window.scrollY > midScreen) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1180) {
      setShow(5);
    }
    if (window.innerWidth < 1180) {
      setShow(4);
    }
    if (window.innerWidth < 1040) {
      setShow(3);
    }
    if (window.innerWidth < 500) {
      setShow(2);
    }

    console.log(windowWidth, window.innerWidth);

    // window.addEventListener("resize", handleScreenWidth);

    // return () => {
    //   window.removeEventListener("resize", handleScreenWidth);
    // };
  }, [windowWidth]);

  return (
    <MemberContainer>
      <TitleWrapper>
        <div className={animate ? "animate" : ""}>
          <h2 style={{ fontSize: windowWidth > 800 ? "3rem" : "2rem" }}>
            SKY의 자랑스런 얼굴들
          </h2>
          <p>
            우리 가족의 건강을 최우선으로 하며 믿음을 주는 SKY 동물 메디컬 센터
            의료진들입니다.
          </p>
        </div>
      </TitleWrapper>

      <SliderWrapper>
        <div className={animate ? "animate" : ""}>
          <StyledSlider {...settings}>
            {vetInfo.map((vet) => (
              <div className="vetProfile" key={vet.id}>
                <div>
                  <img alt={vet.name} src={vet.img} />
                </div>
                <p>
                  {vet.position} {vet.name}
                </p>
              </div>
            ))}
          </StyledSlider>
        </div>
      </SliderWrapper>
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

const slideUp = keyframes`
    from {
        transform: translate(0, 50%);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const MemberContainer = styled.section`
  width: 100%;
  height: 92vh;
  background-image: url(${bgSky});
  background-size: cover;
  background-repeat: no-repeat;
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
  width: 100%;
  height: 30vh;

  .animate {
    animation: ${slideDown} 4s ease;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: #dabfa8;
      font-size: 3rem;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }
    p {
      color: #fff;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      margin: 5px;
    }
  }
`;

const StyledSlider = styled(Slider)`
  .vetProfile {
    div {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
        transition: ease;
        cursor: pointer;

        &:hover {
          scale: 1.2;
          animation: ${imgZoomin} 1s ease;
        }
      }
    }
    p {
      color: #fff;
      font-size: 0.9rem;
      font-weight: bold;
      text-align: center;
      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
    }
  }
  .slick-list {
    width: 85vw;
    height: 55vh;

    @media screen and (max-width: 690px) {
      height: 40vh;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const SliderWrapper = styled.div`
  .animate {
    animation: ${slideUp} 4s ease;
  }
`;

export default Member;
