import React, { useState } from "react";
import { styled } from "styled-components";
import NoticeModal from "./NoticeModal";

function NoticeList({ item }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <List onClick={handleOpen}>
        <div>
          <img src={item.img} alt="" />
        </div>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </List>
      <NoticeModal item={item} open={open} handleClose={handleClose} />
    </>
  );
}

const List = styled.li`
  max-width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  img {
    border-radius: 5px;
    max-width: 100%;
    object-fit: cover;
  }
  h2 {
    font-size: 24px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
