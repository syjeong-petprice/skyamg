import { styled } from "styled-components";
import icons from "../images/resource/images/ico_quick.png";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Link } from "react-router-dom";

function Links() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 스무스 스크롤 효과를 위해 추가
    });
  };

  return (
    <LinkContainer>
      <ul>
        <li className="kakao">
          <a href="http://pf.kakao.com/_xeQhAG" target="_blank"></a>
        </li>
        <li className="notice">
          <StyledLink to="/skyamg/notice"></StyledLink>
        </li>
        <li className="insta">
          <a
            href="https://instagram.com/skyamg_sw?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
          ></a>
        </li>
        <li className="tube">
          <a href="https://www.youtube.com/@skyskyamg8351" target="_blank"></a>
        </li>
        <li className="naver">
          <a href="https://blog.naver.com/vetleader" target="_blank"></a>
        </li>
        <li className="location">
          <a
            href="https://map.naver.com/p/search/%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%8F%99%EB%AC%BC%EB%A9%94%EB%94%94%EC%BB%AC%EC%84%BC%ED%84%B0%20%EC%9D%B8%EC%B2%9C/place/35678369?c=15.00,0,0,0,dh&isCorrectAnswer=true"
            target="_blank"
          ></a>
        </li>
        {/* <li className="time">
          <a href="/"></a>
        </li> */}
        <li className="top" onClick={scrollToTop}>
          <div>
            <KeyboardDoubleArrowUpIcon style={{ color: "#fff" }} />
          </div>
        </li>
      </ul>
    </LinkContainer>
  );
}

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  font-size: 0;
  color: transparent;
  line-height: 0;
  /* padding: 10px; */
  border-radius: 100%;
  background: rgba(242, 238, 230, 0.7);
  transition: all 0.5s;
  text-align: center;
  &:visited {
    text-decoration: none;
  }
  &::before {
    content: "";
    display: block;
    width: 32px;
    height: 32px;
    background: url(${icons}) 0 0 no-repeat;
    background-size: 228px 49px;
    background-position: -31px 6px;
  }
`;

const LinkContainer = styled.nav`
  width: 40px;
  position: fixed;
  top: 50%;
  right: 2.9rem;
  transform: translateY(-50%);
  z-index: 1000;

  ul {
    li {
      list-style: none;
      text-align: left;
      margin-bottom: 10px;
    }
  }

  .kakao {
    a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      font-size: 0;
      color: transparent;
      line-height: 0;
      /* padding: 10px; */
      border-radius: 100%;
      background: rgba(242, 238, 230, 0.7);
      transition: all 0.5s;
      text-align: center;
      &:visited {
        text-decoration: none;
      }
      &::before {
        content: "";
        display: block;
        width: 35px;
        height: 32px;
        background: url(${icons}) 0 0 no-repeat;
        background-size: 207px 50px;
        background-position: 6px 8px;
      }
    }
  }

  .insta {
    a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      font-size: 0;
      color: transparent;
      line-height: 0;
      /* padding: 10px; */
      border-radius: 100%;
      background: rgba(242, 238, 230, 0.7);
      transition: all 0.5s;
      text-align: center;
      &:visited {
        text-decoration: none;
      }
      &::before {
        content: "";
        display: block;
        width: 37px;
        height: 35px;
        background: url(${icons}) 0 0 no-repeat;
        background-size: 225px 55px;
        background-position: -60px 6px;
      }
    }
  }
  .tube {
    a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      font-size: 0;
      color: transparent;
      line-height: 0;
      /* padding: 10px; */
      border-radius: 100%;
      background: rgba(242, 238, 230, 0.7);
      transition: all 0.5s;
      text-align: center;
      &:visited {
        text-decoration: none;
      }
      &::before {
        content: "";
        display: block;
        width: 37px;
        height: 35px;
        background: url(${icons}) 0 0 no-repeat;
        background-size: 240px 58px;
        background-position: -99px 6px;
      }
    }
  }
  .naver {
    a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      font-size: 0;
      color: transparent;
      line-height: 0;
      /* padding: 10px; */
      border-radius: 100%;
      background: rgba(242, 238, 230, 0.7);
      transition: all 0.5s;
      text-align: center;
      &:visited {
        text-decoration: none;
      }
      &::before {
        content: "";
        display: block;
        width: 35px;
        height: 36px;
        background: url(${icons}) 0 0 no-repeat;
        background-size: 235px 56px;
        background-position: -129px 6px;
      }
    }
  }
  .location {
    a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      font-size: 0;
      color: transparent;
      line-height: 0;
      /* padding: 10px; */
      border-radius: 100%;
      background: rgba(242, 238, 230, 0.7);
      transition: all 0.5s;
      text-align: center;
      &:visited {
        text-decoration: none;
      }
      &::before {
        content: "";
        display: block;
        width: 35px;
        height: 40px;
        background: url(${icons}) 0 0 no-repeat;
        background-size: 250px 62px;
        background-position: -170px 4px;
      }
    }
  }

  .top {
    div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      font-size: 0;
      color: transparent;
      line-height: 0;
      /* padding: 10px; */
      border-radius: 100%;
      background: rgba(0, 0, 0, 0.6);
      transition: all 0.5s;
      text-align: center;
      cursor: pointer;
      &:visited {
        text-decoration: none;
      }
    }
  }
`;

export default Links;
