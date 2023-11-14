import NoticeList from "./components/NoticeList";
import notice from "../../config/notice";
import { styled } from "styled-components";
import Title from "../../components/Title";
import img from "../../images/title/veterinarian-doctor-examining-dog-dachshund-wire-c-2022-09-28-22-19-18-utc.jpg";
// import img from "../../images/title/visual_greeting.jpeg";

function Noti() {
  return (
    <>
      <Title img={img} title="공지사항" />
      <NoticeContainer>
        <ul>
          {notice.map((item) => {
            return <NoticeList key={item.id} item={item} />;
          })}
        </ul>
      </NoticeContainer>
    </>
  );
}

const NoticeContainer = styled.div`
  width: 100vw;
  ul {
    padding: 0 20px;
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    justify-items: center;
  }
`;

export default Noti;
