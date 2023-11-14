import React, { useState } from "react";
import { styled } from "styled-components";
import NoticeModal from "./NoticeModal";
import noImg from "../../../images/contents/no-img-big.png";
import { useNavigate } from "react-router-dom";

function NoticeList({ item }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    // setOpen(true);
    navigate(`/skyamg/notice/${item.id}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <List onClick={handleOpen}>
        <div>
          <img src={item.img && item.img !== "" ? item.img : noImg} alt="" />
        </div>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </List>
      <NoticeModal item={item} open={open} handleClose={handleClose} />
    </>
  );
}

const List = styled.li`
  max-width: 320px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    /* background-color: rgba(242, 238, 230, 0.7); */
    border-radius: 5px;
  }
  img {
    border-radius: 5px;
    width: 320px;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    margin: 0 auto;
  }
  h2 {
    font-size: 24px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    margin-top: 10px;
  }
  p {
    overflow: hidden;
    display: -webkit-box; /* Multi-line layout */
    -webkit-line-clamp: 2; /* Show 2 lines */
    -webkit-box-orient: vertical;
    /* white-space: nowrap;
    text-overflow: ellipsis; */
  }
  @media screen and (max-width: 690px) {
    gap: unset;

    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export default NoticeList;
