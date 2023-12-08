import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Carousel, Tooltip } from "antd";
import dayjs from "dayjs";
import { keyframes } from "styled-components";

export async function getReview() {
  const response = await axios.get(
    "https://api.vetell.kr/export/v1/homepageReview?vetIdx=6"
    //"http://localhost:3000/export/v1/homepageReview?vetIdx=6"
  );
  return response.data;
}

function Review() {
  const [windowWidth, setWindowWidth] = useState();

  const [dataList, setDataList] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3); // 캐러셀 초기 슬라이더 갯수 설정

  const [animate, setAnimate] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const res = await getReview();
        // 데이터 받아오면 상태 업데이트
        if (res.result === "ok") {
          setDataList(res.data)
          console.log(res.data)
        } else console.log(res.result)
      } catch (error) {
        console.error('Error fetching review data:', error);
      }
    };

    fetchData(); // 함수 호출

  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행



  useEffect(() => {
    const handleScroll = () => {
      // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
      // const midScreen = window.innerHeight * 5.5;
      const componentTop = componentRef.current.getBoundingClientRect().top;

      // console.log('innerHeight : ', window.innerHeight);
      // console.log('scrollY : ', window.scrollY);
      // console.log('midScreen : ', midScreen);
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

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // 화면 크기에 따라 slidesToShow 값을 동적으로 변경
      if (window.innerWidth < 576) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // 컴포넌트 마운트 시 초기 값 설정
    handleResize();

    // 창 크기가 변경될 때마다 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const maskedNickname = (nickname) =>
    nickname.substring(0, 2) + "*".repeat(nickname.length - 2);

  return (
    <>
      <Container>
        <TextWrapper ref={componentRef}>
          <div className={animate ? "animate" : ""}>
            <p style={{ margin: 0 }}>Review</p>
            <h2 style={{ margin: 0, marginBottom: '16px' }}>
              <strong>리/얼/후/기</strong>
            </h2>
          </div>
        </TextWrapper>
        <CarouselContainer>
          <StyledCarousel
            slidesToShow={slidesToShow}
            autoplay={true}
            autoplaySpeed={5000}
            dots={false}
          // dotPosition="bottom"
          >
            {dataList.map((item, index) => (
              <div key={item.idx}>
                <div
                  style={{
                    margin: "5px 20px",
                    boxSizing: "border-box",
                  }}
                >
                  {slidesToShow === 2 ?
                    <Tooltip
                      title={item.content}
                      overlayStyle={{
                        letterSpacing: "1px",
                        lineHeight: "1.5",
                        maxWidth: "400px",
                      }}
                      overlayInnerStyle={{
                        // backgroundColor: "whitesmoke",
                        // color: "#000",
                        padding: "10px 20px",
                      }}
                    >
                      <div
                        style={{
                          minHeight: "300px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          textAlign: "center",
                          padding: "20px",
                          borderRadius: "20px",
                          boxShadow: "0 4px 8px rgb(0,0,0,0.2)",
                          // border: "1px solid #ccc",
                          // backgroundColor: "#e2edf6",
                        }}
                      >
                        <div>
                          <p className="name">
                            {maskedNickname(item.nickname)}님의 리뷰
                          </p>
                          <p className="content">
                          {dayjs(item.regDate).format("YYYY.MM")}
                        </p>
                          <p className="content">
                            {windowWidth < 576 || windowWidth > 768
                              ? item.content
                              : truncateText(item.content, 100)}
                          </p>
                        </div>
                        
                      </div>
                    </Tooltip>
                    :
                    <div
                      style={{
                        minHeight: "300px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "center",
                        padding: "20px",
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgb(0,0,0,0.2)",
                        // border: "1px solid #ccc",
                        // backgroundColor: "#e2edf6",
                      }}
                    >
                      <div>
                        <p className="name">
                          {maskedNickname(item.nickname)}님의 리뷰
                        </p>
                        <p className="content">
                          {dayjs(item.regDate).format("YYYY.MM")}
                        </p>
                        <p className="content">
                          {slidesToShow === 2
                            ? truncateText(item.content, 100)
                            : item.content}
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            ))}
          </StyledCarousel>
        </CarouselContainer>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* 가로 폭 100%로 설정 */
  padding: 5rem 1rem;
  /* margin: 50px 42px 60px 42px; */
  /* background-color: whitesmoke; */
  & .name {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots {
    padding: 0; /* 기존 패딩 초기화 */
    list-style: none; /* 리스트 스타일 제거 */

    li {
      margin-right: 8px; /* 도트 간 여백 조절 */
      button {
        margin-top: 40px; /* 기존 마진 초기화 */
        width: 8px; /* 도트 크기 조절 */
        height: 8px;
        border-radius: 50%; /* 도트를 원 모양으로 만들기 */
      }
    }
  }
`;

const TitleWrapper = styled.div`
  width: 80%;
  height: fit-content;
  @media screen and (max-width: 690px) {
    padding-bottom: 2rem;
  }
  padding-bottom: 4rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: #000048;
      font-size: 3rem;
      margin: 0;
    }
    p {
      color: #000048;
      margin: 5px;
    }
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

export default Review;
