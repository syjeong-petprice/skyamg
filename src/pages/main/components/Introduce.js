import { useState, useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";
import profileImg from "../../../images/resource/images/제목.png";
import univLogo from "../../../images/resource/images/충남대로고.png";

function Introduce() {
  const [animate, setAnimate] = useState(false);
  const [isFirst, setIsFirst] = useState(false);

  const [windowWidth, setWindowWidth] = useState();
  const componentRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
      // const midScreen = window.innerHeight / 100;
      const componentTop = componentRef.current.getBoundingClientRect().top;

      if (componentTop < (window.innerHeight * 2) / 3) {
        setAnimate(true);
        // setIsFirst(true);
      } 
      // else {
      //   setAnimate(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <IntroduceContainer ref={componentRef} id={"Main_Intro"}>
      {windowWidth > 800 ? (
        <ImageWrapper>
          <img
            className={animate ? "animate" : ""}
            src={profileImg}
            alt="profile img"
          />
        </ImageWrapper>
      ) : (
        <MobileImg
          src={profileImg}
          alt="profile img"
          style={{
            width: "10rem",
            position: "absolute",
            right: 0,
            top: 35,
            zIndex: 0,
          }}
        />
      )}
      <TextWrapper style={{ zIndex: 1 }}>
        <div className={animate ? "titleWrapper animate" : "titleWrapper"}>
          <h2>안녕하세요.</h2>
          <h2>
            <strong>
              SKY 동물메디컬센터
              <br /> 대표원장 오이세입니다.
            </strong>
          </h2>
        </div>
        <div className={animate ? "contentWrapper animate" : "contentWrapper"}>
          <p>
            24시간 연중무휴로 공휴일, 명절 없이 한밤중이라도 걱정없이
            {windowWidth > 800 ? <br /> : ", "}
            진료받을 수 있도록 하는 진료시스템을 마련하고 있습니다.
          </p>
          <ul>
            <li>충남대학교 수의과대학 수의학과 졸업</li>
            <li>충남대학교 수의과대학 대학원 석사 졸업 (영상의학전공)</li>
            <li>충남대학교 수의과대학 대학원 박사과정 (영상의학전공)</li>
            <li>충남대학교 수의과대학 부속동물병원 진료수의사</li>
            <li>대전과학기술대학교 애완동물과 교수</li>
            <li>서울 충현동물종합병원 영상과장</li>
            <li>서울 충현동물종합병원 진료부장</li>
            <li>서울 충현동물종합병원 부원장</li>
            <li>현) 인천스카이동물의료센터 대표원장</li>
          </ul>
        </div>
      </TextWrapper>
    </IntroduceContainer>
  );
}

const slideRight = keyframes`
    from {
        transform: translate(30%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const slideLeft = keyframes`
    from {
        transform: translate(-30%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0, 0);
        opacity: 1;
    }
`;

const IntroduceContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding-top: 1.8rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  background: url(${univLogo}) center no-repeat;
  background-size: 40%;

  @media screen and (max-width: 690px) {
    background-size: 90%;
    align-items: center;
  }

  * {
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  padding: 10vh 12vw;
  .animate {
    animation: ${slideLeft} 4s ease;
  }

  .titleWrapper {
    h2 {
      font-size: 2rem;
      font-weight: normal;

      @media screen and (max-width: 690px) {
        font-size: 1.5rem;
      }
    }
  }
  .contentWrapper {
    p {
      margin: 35px 0;

      @media screen and (max-width: 690px) {
        font-size: 0.9rem;
      }
    }
    ul {
      li {
        list-style-type: none;
        position: relative;
        right: 35px;
        margin-bottom: 10px;

        @media screen and (max-width: 690px) {
          font-size: 0.9rem;
        }

        &:before {
          content: "";
          display: inline-block;
          width: 3px;
          height: 9px;
          background: #3d81b8;
          transform: rotate(45deg);
          margin-right: 10px;
          vertical-align: super;
        }
      }
    }
  }
`;

const ImageWrapper = styled.div`
  width: 45%;
  height: 100%;
  position: absolute;
  right: 10vw;
  bottom: 0;
  display: flex;
  align-items: flex-end;

  .animate {
    animation: ${slideRight} 4s ease;
  }

  .animate_10 {
    animation: ${slideRight} 10s ease;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const MobileImageWrapper = styled.div`
  width: 45%;
  height: 100%;
  position: absolute;
  right: 10vw;
  bottom: 0;
  display: flex;
  align-items: flex-end;

  .animate {
    animation: ${slideRight} 4s ease;
  }

  .animate_10 {
    animation: ${slideRight} 10s ease;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const MobileImg = styled.img`
  animation: ${slideRight} 7s ease;
`;

export default Introduce;
