import { styled } from "styled-components";
import logoImg from "../images/common/toplogo_w.png";

function Footer() {
  return (
    <FooterContainer>
      <InfoWrapper>
        <p>
          병원명: SKY 동물메디컬센터 | 대표자: 오이세 | 사업자번호: 628-02-02246
        </p>
        <p>T. 032-715-7959 | 인천광역시 남동구 남동대로 799번길 34</p>
        <p>Copyright ⓒ 2023. SKY Animal Medical Center All Rights Reserved.</p>
      </InfoWrapper>
      <SnsWrapper></SnsWrapper>
      <ContactWrapper>
        <div className="logoWrapper">
          <img src={logoImg} alt="logo" />
        </div>
      </ContactWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  padding-top: 1rem;
  background-color: #262626;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin: 0;
  }
`;

const InfoWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 0.8rem;
  opacity: 0.7;
  color: #fff;

  div {
    display: flex;
  }
`;
const SnsWrapper = styled.div`
  width: 30%;
`;
const ContactWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .logoWrapper {
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Footer;
