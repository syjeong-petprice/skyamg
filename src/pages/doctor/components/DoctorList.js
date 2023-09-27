// import React, { useState } from "react";
// import { styled } from "styled-components";
// import DoctorModal from "../components/DoctorModal";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// function DoctorList({ item }) {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <List>
//         <div
//           onClick={() => {
//             if (item.id !== 1) {
//               handleOpen();
//             }
//           }}
//           className="sWrap"
//         >
//           <img
//             src={item.img}
//             onError={(e) => {
//               e.target.src = "src/images/vet/no-img.png";
//             }}
//             alt=""
//           />
//           <div className="vetName">
//             {item.position} {item.name}
//           </div>
//           {item.id !== 1 && <div className="overlay">자세히 보기</div>}
//         </div>
//       </List>
//       <DoctorModal item={item} open={open} handleClose={handleClose} />
//     </>
//   );
// }

// const List = styled.li`
//   position: relative;
//   float: left;
//   margin-right: 25px;
//   overflow: hidden;
//   margin-bottom: 25px;
//   .overlay {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: rgba(0, 0, 0, 0.7);
//     color: white;
//     padding: 10px 20px;
//     border-radius: 5px;
//     opacity: 0;
//     transition: opacity 0.3s, transform 0.3s;
//     white-space: nowrap;
//     cursor: pointer;
//     @media screen and (max-width: 690px) {
//       opacity: 0;
//       /* top: unset;
//       background-color: rgba(255, 255, 255);
//       border: 1px solid #011689;
//       color: #011689; */
//     }
//   }
//   .sWrap:hover .overlay {
//     opacity: 1;
//     transform: translate(-50%, -50%) scale(1.1);
//   }
//   .vetName {
//     font-size: 18px;
//     text-align: center;
//     margin-top: 10px;
//     font-weight: 700;
//     color: #011689;
//   }
//   img {
//     width: 100%;
//     border-radius: 5px;
//   }
// `;

// export default DoctorList;
