import { styled } from "styled-components";
import noticeInfo from "../../../config/notice";
import { Link } from "react-router-dom";
import { useState } from "react";
import NoticeModal from "../../notice/components/NoticeModal";

function Notice() {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState();

  //   const handleContentOverflow = (text) => {
  //     if (text.length > 50) {
  //       return text.slice(0, 48) + "...";
  //     }
  //     return text;
  //   };
  //   const handleTitleOverflow = (text) => {
  //     if (text.length > 15) {
  //       return text.slice(0, 14) + "...";
  //     }
  //     return text;
  //   };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <NoticeContainer>
      <div className="headingWrapper">
        <h4>
          SKY동물메디컬센터의 <br />
          <span>새소식</span>
        </h4>
        <Link className="customLink" to={`/skyamg/notice`}>
          <div>
            <p>View More</p>
          </div>
        </Link>
      </div>
      <div className="noticeWrapper">
        {noticeInfo &&
          noticeInfo.map((notice) => {
            return (
              <div
                className="noticeInnerWrapper"
                key={notice.id}
                onClick={() => {
                  setItem(notice);
                  handleOpen();
                }}
              >
                <div className="imgWrapper">
                  <img src={notice.img} alt={notice.title} />
                </div>
                <div className="textWrapper">
                  {/* <h6>{handleTitleOverflow(notice.title)}</h6>
                  <p>{handleContentOverflow(notice.content)}</p> */}
                  <h6>{notice.title}</h6>
                  <p>{notice.content}</p>
                </div>
              </div>
            );
          })}
      </div>
      {item && (
        <NoticeModal item={item} open={open} handleClose={handleClose} />
      )}
    </NoticeContainer>
  );
}

const NoticeContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  .customLink {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
  .customLink:hover,
  .customLink:active,
  .customLink:visited {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }

  .headingWrapper {
    width: 1000px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
    @media screen and (max-width: 1080px) {
      width: 800px;
    }
    @media screen and (max-width: 900px) {
      width: 600px;
    }
    @media screen and (max-width: 650px) {
      width: 500px;
    }
    @media screen and (max-width: 550px) {
      width: 400px;
    }
    @media screen and (max-width: 440px) {
      width: 380px;
    }
    @media screen and (max-width: 400px) {
      width: 360px;
    }
    @media screen and (max-width: 380px) {
      width: 340px;
    }

    h4 {
      font-size: 1.8rem;
      font-weight: lighter;
      margin: 0;
      span {
        font-weight: bold;
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(0, 0, 0, 0.7);
      p {
        margin: 0;
        font-size: 0.9rem;
      }
    }
  }

  .noticeWrapper {
    width: 1000px;
    height: fit-content;
    display: flex;
    overflow: auto;
    @media screen and (max-width: 1080px) {
      width: 800px;
    }
    @media screen and (max-width: 900px) {
      width: 600px;
    }
    @media screen and (max-width: 650px) {
      width: 500px;
    }
    @media screen and (max-width: 550px) {
      width: 400px;
    }
    @media screen and (max-width: 440px) {
      width: 380px;
    }
    @media screen and (max-width: 400px) {
      width: 360px;
    }
    @media screen and (max-width: 380px) {
      width: 340px;
    }

    .noticeInnerWrapper {
      width: 200px;
      height: 100%;
      margin-right: 20px;
      cursor: pointer;

      .imgWrapper {
        width: 200px;
        height: 200px;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .textWrapper {
        margin: 20px 0;
        h6 {
          font-size: 0.9rem;
          margin: 10px 0 0 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          font-size: 0.8rem;
          margin: 10px 0 0 0;
          overflow: hidden;
          display: -webkit-box; /* Multi-line layout */
          -webkit-line-clamp: 2; /* Show 2 lines */
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`;

export default Notice;
