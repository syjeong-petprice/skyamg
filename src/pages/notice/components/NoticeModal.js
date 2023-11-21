import { styled } from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { CSSTransition } from "react-transition-group";
import noImg from "../../../images/contents/no-img-big.png";

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

function NoticeModal({ item, open, handleClose }) {
  return (
    <DialogAnimation in={open} timeout={1000} classNames="dialog" unmountOnExit>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "10px",
            borderBottom: "1px solid #ccc",
            wordBreak: "break-word",
          }}
        >
          {item.title}
        </DialogTitle>
        <StyledDialogContent>
          <div className="left">
            <img src={item.img && item.img !== "" ? item.img : noImg} alt="" />
          </div>
          <div className="right">
            <p>{item.content}</p>
          </div>
        </StyledDialogContent>
        <Button onClick={handleClose} color="primary" sx={{ fontWeight: 700, fontSize: "18px", color: "#000", bgcolor: "#eee" }}>
          닫기
        </Button>
      </Dialog>
    </DialogAnimation>
  );
}

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 3rem;
  .left img {
    max-height: 250px;
    /* height: 200px; */
    object-fit: cover;
  }
  .right {
    width: 100%;
    padding: 0 3rem;
    /* max-width: 60%; */
    p {
      margin: 0;
      white-space: pre-wrap;
    }
  }
  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 1rem;
    padding: 0 !important;
    .left img {
      width: 100%;
      /* height: 200px; */
      object-fit: cover;
    }
    .right {
      overflow: unset;
      max-width: 100%;
      text-align: center;
      padding: 24px;
    }
  }
`;

export default NoticeModal;
