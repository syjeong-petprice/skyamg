import { styled, keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import imgOne from "../../../images/resource/images/강아지진료_흑백.jpeg";
import imgTwo from "../../../images/resource/images/스카이MRI실.jpeg";

function Subject3() {
  const [animate, setAnimate] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
      // const midScreen = window.innerHeight * 5.5;
      const componentTop = componentRef.current.getBoundingClientRect().top;

      // console.log('innerHeight : ', window.innerHeight);
      // console.log('scrollY : ', window.scrollY);
      // console.log('midScreen : ', midScreen);
      if (componentTop < (window.innerHeight * 2) / 3) {
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
    <SubjectContainer ref={componentRef}>
      <TextWrapper>
        <div className={animate ? "animate" : ""}>
          <p>SKY ANIMAL MEDICAL CENTER</p>
          <h2>
            영상의학과 <strong>업/계/선/두</strong>
          </h2>
        </div>
      </TextWrapper>
      <SubTextWrapper>
        <div className={animate ? "innerWrapper animate" : "innerWrapper"}>
          <p className="textOne">문답과 손끝에 의존한 질병 진단?</p>
          <p className="textTwo">
            SKY 동물메디컬센터는{" "}
            <strong>업계에서도 손꼽히는 영상의학검사장비</strong>로<br />{" "}
            환자분들과의 신뢰와 믿음을 지켜갑니다.
          </p>
        </div>
      </SubTextWrapper>
      <ImgWrapper>
        <div className={animate ? "imgOne animateRight" : "imgOne"}>
          <div className="innerImgWrapper">
            <img src={imgOne} alt="img one" />
          </div>
          <div className="innerTextWrapper">
            <div>
              <h4>
                <strong>과거의</strong> 동물진료
              </h4>
            </div>
            <ul>
              <li>문답을 통한 질병 유추</li>
              <li>직접 환부를 만져가며 검진</li>
              <li>떨어지는 검진 정확도</li>
              <li>높은 오진 가능성</li>
            </ul>
          </div>
        </div>
        <div className={animate ? "vsImg animate" : "vsImg"}>
          <div></div>
          <p>
            <span className="v">V</span>
            <span className="s">S</span>
          </p>
          <div></div>
        </div>
        <div className={animate ? "imgTwo animateLeft" : "imgTwo"}>
          <div className="innerImgWrapper">
            <img src={imgTwo} alt="img two" />
          </div>
          <div className="innerTextWrapper">
            <div>
              <h4>
                <strong>최첨단</strong> 영상의학검사
              </h4>
            </div>
            <ul>
              <li>사람에게도 사용되는 첨단장비</li>
              <li>수면 마취 등 안전한 검사 시스템</li>
              <li>눈으로 확인하는 질병</li>
              <li>전공자에 의해 이뤄지는 촬영과 진단</li>
              <li>적절하게 이뤄지는 치료</li>
            </ul>
          </div>
        </div>
      </ImgWrapper>
    </SubjectContainer>
  );
}

const SubjectContainer = styled.section`
  width: 100%;
  /* height: 92vh; */
  height: fit-content;
  background-color: #c3ced7;
  padding-top: 5rem;
  padding-bottom: 5rem;
  * {
    margin: 0;
  }
`;

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

const slideLeft = keyframes`
    from {
        transform: translate(-100%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;
const slideRight = keyframes`
    from {
        transform: translate(100%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #403631;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2.5rem;
      font-weight: normal;
      @media screen and (max-width: 690px) {
        font-size: 2rem;
      }
    }
    p {
      font-weight: bold;
      font-size: 0.9rem;
      opacity: 0.6;
    }
  }

  .animate {
    animation: ${slideDown} 4s ease;
  }
`;

const SubTextWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: none;
  }

  .animate {
    animation: ${slideDown} 4s ease;
  }

  .innerWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .textOne {
      font-size: 1.4rem;
      margin-bottom: 15px;
      color: #30536f;
      border-bottom: 2px solid currentColor;
      padding-bottom: 3px; /* 3px는 텍스트와 밑줄 사이의 거리입니다 */
    }
    .textTwo {
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    height: 80%;
  }

  .imgOne,
  .imgTwo {
    width: 25rem;
    height: 100%;

    @media screen and (max-width: 500px) {
      width: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .animateRight {
    animation: ${slideRight} 2s ease;
  }
  .animateLeft {
    animation: ${slideLeft} 2s ease;
  }

  .vsImg {
    font-size: 3rem;
    font-weight: bold;
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 500px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .v {
      color: #6b879d;
    }
    .s {
      color: #2c3032;
    }
    div {
      width: 1px;
      height: 150px;
      background-color: #6b879d;
      opacity: 0.7;
      @media screen and (max-width: 500px) {
        width: 150px;
        height: 1px;
      }
    }
  }

  .innerImgWrapper {
    width: 100%;
    /* height: 100%; */
    /* display: flex; */
    /* justify-content: flex-start; */
    /* align-items: center; */
    overflow: hidden;

    @media screen and (max-width: 800px) {
      display: flex;
    }
    img {
      width: 100%;
      height: auto;
    }
  }

  .innerTextWrapper {
    width: 100%;
    /* height: 100%; */
    height: fit-content;
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      /* text-align: center; */
      color: #fff;
    }
    ul {
      list-style-type: none;
      margin-top: 10px;
      font-size: 0.9rem;

      @media screen and (max-width: 500px) {
        /* display: none; */
      }

      li {
        position: relative;
        right: 35px;

        @media screen and (max-width: 690px) {
          font-size: 0.8rem;
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

  .imgOne .innerTextWrapper {
    div {
      background-color: #727d85;
    }
  }
  .imgTwo .innerTextWrapper {
    div {
      background-color: #2c3032;
    }
  }
`;

export default Subject3;
