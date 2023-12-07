import axios from "axios";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Carousel, Tooltip } from "antd";

// import img from "../../images/title/visual_greeting.jpeg";

export async function getReview() {
  const response = await axios.get(
    "http://api.dev.vetell.kr/export/v1/homepageReview?vetIdx=6"
  );
  return response.data;
}

function Review() {
  const [windowWidth, setWindowWidth] = useState();

  const [dataList, setDataList] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3); // 캐러셀 초기 슬라이더 갯수 설정
  // const result = getReview();
  const result = {
    result: "ok",
    data: [
      {
        idx: 7,
        vetIdx: 6,
        nickname: "꽃맘2",
        imgUrl:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA5MjNfMjEw%2FMDAxNjk1NDQzNzgwODcy.WBk5nLwDteKJN1gbesdh-aBLJsya4uGMsHwQb1Co5hwg.bHgN4uttmyIR6JdEMFpKhP9oIXbLOqj8XFJUXaPOAl0g.JPEG%2F1693364344671.jpg.jpg",
        content:
          "같이사는 강아지한테물려서ㅠ 24시스카이동물병원 갔어요 야간진료봐주시던 선생님들 모두 친절하시고 걱정많이하시니까 사진도 보내주시고 외과선생님들이 수술부터 수술후 치료까지 잘해주셔서 우리애기 잘 회복중입니다. 수의사선생님들과 간호사선생님들 친절하게 잘 챙겨주셔서 감사드립니다. 믿고 맡길수있는 병원이있어 다행이네요",
        regDate: "2023-09-23T00:00:00.000Z",
      },
      {
        idx: 1,
        vetIdx: 6,
        nickname: "tjs****",
        imgUrl: null,
        content:
          "처음가봤는데 깨끗하고 견주로서 답답한마음에 질문을많이물어봤는데 친절하게 답변해줘서 감사했어요",
        regDate: "2023-12-05T00:00:00.000Z",
      },
      {
        idx: 2,
        vetIdx: 6,
        nickname: "myl****",
        imgUrl:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzExMjdfMTE3%2FMDAxNzAxMDU0MDM5NzU2.Td7qnERn4DwWSZ20a6MXYaZc2SqZAwjrj4Z8rqrl3HAg.MY7KMzkfBJ_czTm5fk4PkZjX9d-sTVCnuSrYmMiyAKog.JPEG%2F20231125_212402.jpg",
        content:
          "미소 보호자입니다\n\n박설기 과장님께 감사한 마음 전하고자 합니다\n\n미소는 약 3개월 투병후\n25일 저녁에 무지개다리를 건넜습니다\n\n그동안 미소에 신경 써주시고\n진심어린 진료해주신 박과장님 감사합니다\n\n아프지 않게 보내고 싶었지만\n그 결정을 내려야하는 시간도\n보호자한테는 많이 힘들었어요\n다행히도 미소는 잘 참아주었고\n품에서 자는듯이 이별을 했습니다\n\n미소야 아프지말고 담에 또 만나자\n\n\n반려동물이 아프다고 직접 병원에 전화할수 없고\n보호자가 병원과 소통하는 특수한 상황인\n동물병원이기에 힘드신건 알지만\n보호자와 공감해주시는 따뜻한 말 한마디가\n큰 위로가 됩니다\n\n가족을 믿고 맡길수 있는\n병원입니다\n\n(비용문제는 국가가 해결할 일이죠)",
        regDate: "2023-11-15T00:00:00.000Z",
      },
      {
        idx: 3,
        vetIdx: 6,
        nickname: "dw****",
        imgUrl: null,
        content:
          "원장님 친절하시고 설명도 잘 해주셨어요 직원분들도 친절하시고 시설도 깨끗해요",
        regDate: "2023-11-02T00:00:00.000Z",
      },
      {
        idx: 4,
        vetIdx: 6,
        nickname: "lovelymei37",
        imgUrl: null,
        content:
          "기존에 다니던 곳에서 수술 견적 150만원 좀 안되게 받고 아이가 심장이랑 호흡기가 좀 안좋아서 메디칼 가서 다시 견적 받았는데 350만원 조금 넘게 배로 들었습니다. 기존에 가던 병원에서는 동네병원에서 하는 거랑 대학병원/종합병원가서 하는거랑 다른 거 같이 생각하시면 된다고 하시는데. 저희 강아지가 심장도 약하고 호흡기도 좀 약해서 수술전 꼼꼼히 검사하고 (80만원정도) 메디칼에서 수술 들어갔습니다. 저도 안해본 수술을 3kg도 안되는 강아지가 배의 절반을 개복해서 탈장, 중성화, 종괴제거를 한꺼번에 한다는 게. 수술 전에도 진료 2번 더 보고. 끝까지 세세하게 체크하고 수술 들어갔습니다. 수술은 다행히 잘 됐고. 선생님들도 회복실에 있는 아이 사진 보내주시고 먹는거 동영상 찍어서 보내주시고. 만족해요.",
        regDate: "2023-10-30T00:00:00.000Z",
      },
      {
        idx: 5,
        vetIdx: 6,
        nickname: "lovelymei37",
        imgUrl: null,
        content:
          "강아지 두마리 진료보는 것 때문에 정신없이 병원만 다니고 있네요. 예약해도 기본 1시간 기다리는 거 같아요 … 병원만 오면 기본 2시간 후딱 지나가네요 … 선생님들은 잘 봐주시는 거 같아요. 제가 많이 질문해서 그런건지 모르겠지만 세세하게 잘 알려주세요.",
        regDate: "2023-10-26T00:00:00.000Z",
      },
      {
        idx: 6,
        vetIdx: 6,
        nickname: "cc아몬드cc",
        imgUrl:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzEwMjRfMjg3%2FMDAxNjk4MTE4MjMyNjM4.Fm4DicTyzpOBsOV8RJdJvlK3X-tF7shPXXrfgF7PDNwg.RBA4Ubg2tAlzH4M2JtIaPEn-01U1AJkYOEwlWD795vMg.JPEG%2F1698118110987.jpg",
        content:
          "구름이가🐶 갑자기 신부전이와서 계속 입원하고 수치 내려가서 퇴원했는데 진료과정에서 종양이 보이고 간수치도 넘 높아서 수술했어요 🥺\n넘 위험한 수술이라 하는게 맞나,, 했다가 더 안좋아지면 어쩌나 고민 많았지만 그래도 정태규과장님 덕에 ㅠ.ㅠ 믿고 수술했어요👍🏻\n애기가 수술 후 밥을 잘 안먹으니까 손으로 직접 먹여주시는 모습에 넘 감동했어요 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ흐에ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ 감사해요",
        regDate: "2023-10-17T00:00:00.000Z",
      },
    ],
  };

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

  useEffect(() => {
    if (result.result === "ok") {
      setDataList(result.data);
    }
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
        <TitleWrapper>
          <div>
            <h2 style={{ fontSize: windowWidth > 800 ? "3rem" : "2rem" }}>
              Reviews
            </h2>
            {/* <p>
              우리 가족의 건강을 최우선으로 하며 믿음을 주는
              인천SKY동물메디컬센터 의료진들입니다.
            </p> */}
          </div>
        </TitleWrapper>
        <CarouselContainer>
          <StyledCarousel
            slidesToShow={slidesToShow}
            autoplay={true}
            autoplaySpeed={5000}
            dotPosition="bottom"
          >
            {dataList.map((item, index) => (
              <div style={{ height: "fit-content" }}>
                <div
                  style={{
                    margin: "5px 20px",
                    boxSizing: "border-box",
                  }}
                >
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
                        textAlign: "center",
                        padding: "16px",
                        // border: "1px solid #ccc",
                        borderRadius: "20px",
                        // backgroundColor: "#e2edf6",
                        boxShadow: "0 4px 8px rgb(0,0,0,0.1)",
                      }}
                    >
                      <p className="name">
                        {maskedNickname(item.nickname)}님의 리뷰
                      </p>
                      <p className="content">
                        {windowWidth > 576
                          ? truncateText(item.content, 100)
                          : item.content}
                      </p>
                    </div>
                  </Tooltip>
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

export default Review;
