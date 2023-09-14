import img101 from "../images/resource/subjects/mgimg_heart.jpg";
import img102 from "../images/resource/subjects/mgimg_digestive.jpg";
import img103 from "../images/resource/subjects/mgimg_breath.jpg";
import img104 from "../images/resource/subjects/mgimg_nervous.jpg";
import img105 from "../images/resource/subjects/mgimg_urology.jpg";
import img106 from "../images/resource/subjects/mgimg_endocrine.jpg";
import img201 from "../images/resource/subjects/derimg_1.jpg";
import img202 from "../images/resource/subjects/derimg_2.jpg";
import img203 from "../images/resource/subjects/derimg_3.jpg";
import img204 from "../images/resource/subjects/derimg_4.jpg";
import img301 from "../images/resource/subjects/gsimg_or.jpg";
import img302 from "../images/resource/subjects/gsimg_neurosurgery.jpg";
import img303 from "../images/resource/subjects/gsimg_thoraci.jpg";
import img304 from "../images/resource/subjects/gsimg_gs.jpg";
import img305 from "../images/resource/subjects/gsimg_cardiovascular.jpg";
import img306 from "../images/resource/subjects/gsimg_tumor.jpg";
import img401 from "../images/resource/subjects/denimg_1.jpg";
import img402 from "../images/resource/subjects/denimg_2.jpg";
import img403 from "../images/resource/subjects/denimg_3.jpg";
import img501 from "../images/resource/subjects/reimg_1.jpg";
import img502 from "../images/resource/subjects/reimg_2.jpg";
import img503 from "../images/resource/subjects/reimg_3.jpg";
import img601 from "../images/resource/subjects/radioimg_1.jpg";
import img602 from "../images/resource/subjects/radioimg_2.jpg";
import img603 from "../images/resource/subjects/radioimg_3.jpg";
import img604 from "../images/resource/subjects/radioimg_4.jpg";
import img701 from "../images/resource/subjects/eyeimg_1.jpg";
import img801 from "../images/resource/subjects/emeimg_1.jpg";
import img901 from "../images/resource/subjects/phyimg_1.jpg";

import img1 from "../images/title/visual_greeting.jpeg";
import img2 from "../images/title/visual_der.jpeg";
import img3 from "../images/title/visual_gs.jpeg";
import img4 from "../images/title/visual_den.jpeg";
import img5 from "../images/title/visual_specRe.jpeg";
import img6 from "../images/title/visual_specVideo.jpeg";
import img7 from "../images/title/visual_eye.jpeg";
import img8 from "../images/title/visual_eme.jpeg";
import img9 from "../images/title/visual_phy.jpeg";

import sec2img from "../images/resource/subjects/스카이MRI실.jpeg";

import sec3img1 from "../images/resource/subjects/section3_img01.png";
import sec3img2 from "../images/resource/subjects/section3_img02.png";
import sec3img3 from "../images/resource/subjects/section3_img03.png";

const centerInfo = [
  {
    id: 1,
    primaryImg: img101,
    titleImg: img1,
    title: "영상의료센터",
    subTitle: `대학병원급 최첨단 진단 장비
마취과 담당의 근무
지역병원 MRI, CT 의뢰`,
    description: `영상진단과에서는 다양한 첨단 영상의학검사장비를 이용하여 질병을 정확하게 진단하는 것을 목표로 하며, 모든 촬영과 판독이 전공자에 의해 이루어 지며, 안전한 검사를 위한 전용 마취 장비 및 모니터링 장비가 구비되어 있습니다.`,
    sec2Img: sec2img,
    sec3: [
      {
        img: sec3img1,
        title: "마취과 담당의",
        content: `반려동물 마취는 까다롭고 위험합니다. 마취는 품종,
나이 등에 따라 천차만별로 케이스가 다르고 특히
노령견, 노령묘의 경우 고려해야할 점이 매우 많습니다.
SKY동물메디컬센터는 서울대학교 임상수의학 석사 출신
마취 담당의가 MRI, CT 검사 마취를 관리합니다.`,
      },
      {
        img: sec3img2,
        title: "최상급 사양의 마취 장비",
        content: `Mindray사의 WATO EX-20Vet은 까다로운 수의학
환경을 반영하여 설계된 마취기입니다. 완전하게 전자
제어되는 인공호흡기로 고도로 정밀한 압력 제어를
통해, 호흡량이 적은 고양이들에게도 매우 안전하고
안정적으로 마취를 유지할 수 있습니다.`,
      },
      {
        img: sec3img3,
        title: "대학병원급 연계 진료 시스템",
        content: `SKY동물메디컬센터는 최상급 의료기관과 같이 내과,
외과, 마취과, 안과, 영상진단의학과, 고양이 전문진료
센터로 분과별 구성되어 있습니다. MRI, CT 검사 이후
각종 질환을 One-stop으로 치료받을 수 있는 대학
병원급 시스템으로 즉각적인 치료 대응이 가능합니다.`,
      },
    ],
  },
];

export default centerInfo;
