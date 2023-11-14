import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { CSSTransition } from "react-transition-group";
import noImg from "../../images/contents/no-img-big.png";
import notice from "../../config/notice";
import Title from "../../components/Title";
import img from "../../images/title/visual_greeting.jpeg";
import { useNavigate } from "react-router-dom";

const DialogAnimation = styled(CSSTransition)`
  &.dialog-enter {
    opacity: 0;
    transform: scale(0.8);
  }
  &.dialog-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1000ms, transform 1000ms;
  }
  &.dialog-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.dialog-exit-active {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 1000ms, transform 1000ms;
  }
`;

function NoticeDetails() {
  const { id } = useParams();
  const item = notice.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  return (
    <Container>
      {/* <Title img={item.titleImg || img} title={item.title} /> */}

      <h2>{item.title}</h2>

      <StyledContentBox>
        <div className="img-box">
          <img src={item.img && item.img !== "" ? item.img : noImg} alt="" />
        </div>
        <div className="text-box">
          <p>{item.content}</p>
        </div>
      </StyledContentBox>
      <Button onClick={() => navigate(-1)}>목록</Button>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 1rem 10rem 5rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  & h2 {
    font-size: 28px;
  }
  @media screen and (max-width: 767px) {
    padding: 1rem;
    & h2 {
      font-size: 22px;
    }
  }
`;

const StyledContentBox = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 3rem;
  .img-box {
    width: 100%;
  }
  .img-box img {
    width: 100%;
    /* height: 200px; */
    /* object-fit: cover; */
  }
  .text-box {
    width: 100%;
    margin-bottom: 2rem;
    /* padding: 0 3rem; */
    /* max-width: 60%; */
    p {
      margin: 0;
      white-space: pre-wrap;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 1rem;
    padding: 0 !important;
    .img-box img {
      width: 100%;
      /* height: 200px; */
      object-fit: cover;
    }
    .text-box {
      overflow: unset;
      max-width: 100%;
      /* text-align: center; */
      padding: 24px;
      p {
        font-size: 14px;
      }
    }
  }
`;

export default NoticeDetails;
