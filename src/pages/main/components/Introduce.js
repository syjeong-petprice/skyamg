import { useState, useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";
import profileImg from "../../../images/main/doc_moonjongsun_desc2.png";
import univLogo from "../../../images/resource/images/충남대로고.png";
import vetInfo from "../../../config/vetInfo";

function Introduce() {
  const [animate, setAnimate] = useState(false);

  const [windowWidth, setWindowWidth] = useState();
  const componentRef = useRef(null);

  const moonInfo = vetInfo.filter((i) => i.id === 3)[0];
  console.log(moonInfo);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
      // const midScreen = window.innerHeight / 100;
      const componentTop = componentRef.current.getBoundingClientRect().top;

      if (componentTop < window.innerHeight) {
        setAnimate(true);
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
          {/* <h2>
            <strong>
              SKY 동물메디컬센터
              <br /> 대표원장 문종선입니다.
            </strong>
          </h2> */}
        </div>
        <div className={animate ? "contentWrapper animate" : "contentWrapper"}>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {`저희 인천SKY동물메디컬센터는 2014년 개원 이래로, 
우리 아이들이 정확한 진단과 신속한 치료를 받게 하는 것을 
사명으로 새기고 성장해왔습니다.

최신의 의료 시설과 각 분야의 전문 인력들이 지금 이 순간에도 
아이들의 건강을 위하여 노력을 아끼지 않고 있습니다.

우리 아이들과 보호자님들의 눈높이에서 마음까지 헤아릴 수 있는 
따뜻한 병원이 되도록 노력하겠습니다.

감사합니다.

대표 원장 문종선 올림.
`}
            {/* 24시간 연중무휴로 공휴일, 명절 없이 한밤중이라도 걱정없이
            {windowWidth > 800 ? <br /> : ", "}
            진료받을 수 있도록 하는 진료시스템을 마련하고 있습니다. */}
          </p>
          {/* 원장 인사말에 약력 넣을건지 확인 필요 */}
          {/* <ul>
            {moonInfo?.history?.map((item) => {
              return <li>{item}</li>;
            })}
          </ul> */}
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
  padding-top: 27vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  /* background: url(${univLogo}) center no-repeat; */
  background-size: 40%;

  @media screen and (max-width: 690px) {
    background-size: 90%;
    padding-top: 1.8rem;
    align-items: center;
  }

  * {
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  padding: 10vh 12vw;
  animation-play-state: paused;
  animation: ${slideLeft} 4s ease;

  /* .animate {
    animation: ${slideLeft} 4s ease;
  } */

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
  /* animation-play-state: paused;
  animation: ${slideRight} 4s ease; */

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
