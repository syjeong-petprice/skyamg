// import { styled } from "styled-components";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
// import { CSSTransition } from "react-transition-group";

// const DialogAnimation = styled(CSSTransition)`
//   &.dialog-enter {
//     opacity: 0;
//     transform: scale(0.8);
//   }
//   &.dialog-enter-active {
//     opacity: 1;
//     transform: scale(1);
//     transition: opacity 1000ms, transform 1000ms;
//   }
//   &.dialog-exit {
//     opacity: 1;
//     transform: scale(1);
//   }
//   &.dialog-exit-active {
//     opacity: 0;
//     transform: scale(0.8);
//     transition: opacity 1000ms, transform 1000ms;
//   }
// `;

// function DoctorModal({ item, open, handleClose }) {
//   return (
//     <DialogAnimation in={open} timeout={1000} classNames="dialog" unmountOnExit>
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle
//           style={{
//             textAlign: "center",
//             fontSize: "24px",
//             fontWeight: "700",
//             marginBottom: "10px",
//             borderBottom: "1px solid #ccc",
//           }}
//         >
//           {item.position} {item.name}
//         </DialogTitle>
//         <StyledDialogContent>
//           <div className="left">
//             <img
//               src={item.img}
//               onError={(e) => {
//                 e.target.src = "src/images/vet/no-img.png";
//               }}
//               alt=""
//             />
//           </div>
//           <div className="right">
//             {item.history.length > 0 && (
//               <div className="docDetail-bh">
//                 <div className="bedge bedge-blue">약력</div>
//                 <div className="docDetail-graduate">
//                   {item.history.map((i) => {
//                     return <p>{i}</p>;
//                   })}
//                 </div>
//                 {item.completion.length > 0 &&
//                   item.completion.map((i) => {
//                     return <p className="dot-text1 fArial">{i}</p>;
//                   })}
//               </div>
//             )}
//             {item.paper.length > 0 && (
//               <div className="docDetail-study">
//                 <div className="bedge bedge-blue">주요논문</div>
//                 <div className="docDetail-eng">
//                   {item.paper.map((i) => {
//                     return <p className="dot-text1 fArial">{i}</p>;
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>
//         </StyledDialogContent>
//         <Button onClick={handleClose} color="primary">
//           닫기
//         </Button>
//       </Dialog>
//     </DialogAnimation>
//   );
// }

// const StyledDialogContent = styled(DialogContent)`
//   display: flex;
//   gap: 3rem;
//   @media screen and (max-width: 690px) {
//     flex-direction: column;
//     align-items: center;
//     overflow: auto;
//   }
//   .left img {
//     max-width: 100%;
//   }
//   .right {
//     width: 100%;
//     max-width: 60%;
//     overflow: auto;
//     @media screen and (max-width: 690px) {
//       overflow: unset;
//       max-width: 100%;
//     }
//   }
//   .dot-text1 {
//     position: relative;
//     padding-left: 10px;
//     font-size: 14px;
//     color: #7d7e81;
//     line-height: 1.5em;
//   }
//   .dot-text1:after {
//     content: "";
//     display: inline-block;
//     position: absolute;
//     left: 0;
//     top: 8px;
//     width: 4px;
//     height: 4px;
//     border-radius: 100px;
//     background-color: #011689;
//   }
//   .bedge {
//     display: inline-block;
//     margin-bottom: 10px;
//     font-size: 14px;
//     font-weight: 800;
//     padding: 0 15px;
//     border-radius: 3px;
//     height: 28px;
//     line-height: 26px;
//     background-color: #011689;
//     color: #fff;
//   }
//   .docDetail-study {
//     margin-top: 20px;
//   }
//   .docDetail-graduate > p {
//     font-size: 16px;
//     font-weight: 550;
//   }
// `;

// export default DoctorModal;
