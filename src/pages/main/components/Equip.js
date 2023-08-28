import { styled, keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import mriImg from "../../../images/resource/images/스카이MRI_2.jpeg";

function Equip() {
  const [animate, setAnimate] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const componentRef = useRef(null);

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
      // const midScreen = window.innerHeight * 3.5;
      const componentTop = componentRef.current.getBoundingClientRect().top;

      if (componentTop < (window.innerHeight * 2) / 3) {
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
  return (
    <EquipContainer ref={componentRef}>
      <ImgWrapper>
        <img className={animate ? "animate" : ""} src={mriImg} alt="mri" />
      </ImgWrapper>
      <TextWrapper>
        <div className={animate ? "animate titleWrapper" : "titleWrapper"}>
          <p>SKY ANIMAL MEDICAL CENTER</p>
          <h2 className="firstTitle">적.재.적.소</h2>
          <h2 className="secondTitle">SKY 영상의학과</h2>
        </div>
        <div className={animate ? "animate stepWrapper" : "stepWrapper"}>
          <div>
            <div className="noBox">
              <p>NO</p>
            </div>
            <div>
              <p>찍고 보는 X-ray / MRI / CT / 초음파</p>
            </div>
          </div>
          <div>
            <div className="yesBox">
              <p>YES</p>
            </div>
            <div>
              <p>진료 후 정확한 판단 하에 촬영</p>
            </div>
          </div>
          <div>
            <div className="yesBox">
              <p>YES</p>
            </div>
            <div>
              <p>최첨단 장비로 최상의 영상을</p>
            </div>
          </div>
        </div>
      </TextWrapper>
    </EquipContainer>
  );
}

const slideRight = keyframes`
    from {
        transform: translate(50%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const slideLeft = keyframes`
    from {
        transform: translate(-50%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const EquipContainer = styled.section`
  width: 100%;
  height: 92vh;
  /* display: flex; */

  * {
    margin: 0;
  }

  @media screen and (min-width: 690px) {
    display: flex;
  }
`;

const ImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 690px) {
    width: 100%;
    height: 50%;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
  img {
    width: 100%;
    height: auto;
    @media screen and (max-width: 690px) {
      width: auto;
      height: 100%;
    }
  }
  .animate {
    animation: ${slideLeft} 4s ease;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5vw;
  background-color: #e8c0a2;

  @media screen and (max-width: 690px) {
    width: 100%;
    height: 50%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .animate {
    animation: ${slideRight} 4s ease;
  }

  .titleWrapper {
    h2 {
      font-size: 3rem;
      line-height: 3.5rem;
    }
    p {
      font-size: 0.8rem;
      color: #a37550;
    }
    .firstTitle {
      font-weight: lighter;
    }
    @media screen and (max-width: 690px) {
      h2 {
        font-size: 2rem;
        line-height: 3rem;
      }
      .firstTitle {
        font-size: 3.1rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
  }

  .stepWrapper {
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 690px) {
      width: 80vw;
    }

    div {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      p {
        font-size: 1.4rem;
        @media screen and (max-width: 1050px) {
          font-size: 0.9rem;
        }
      }

      div {
        &:first-child {
          width: 25%;
          color: #fff;
        }
        &:nth-child(2) {
          background-color: #fff;
        }
      }

      .noBox {
        background-color: #949798;
        p {
          font-size: 1.4rem;
          @media screen and (max-width: 800px) {
            font-size: 1.2rem;
          }
        }
      }
      .yesBox {
        background-color: #30536f;
        p {
          font-size: 1.4rem;
          @media screen and (max-width: 800px) {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

export default Equip;
