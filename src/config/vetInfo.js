import vet1 from "../images/vet2/문종선.png";
import vet2 from "../images/vet2/정다슬.png";
import vet3 from "../images/vet2/김도희.png";
// import vet4 from "../images/vet2/최동준.png";
import vet5 from "../images/vet2/박설기.png";
import vet6 from "../images/vet2/박주향.png";
import vet7 from "../images/vet2/최유진.png";
import vet8 from "../images/vet2/정태규.png";
import vet9 from "../images/vet2/윤기홍.png";
import vet10 from "../images/vet2/이선백.png";
import vet11 from "../images/vet2/서승원.png";
import vet12 from "../images/vet2/송재성.png";
import vet13 from "../images/vet2/박기종.png";
import vet14 from "../images/vet2/이한중.png";

import tvet1 from "../images/vet/문종선.png";
import tvet2 from "../images/vet/정다슬.png";
import tvet3 from "../images/vet/김도희.png";
// import tvet4 from "../images/vet/최동준.png";
import tvet5 from "../images/vet/박설기.png";
import tvet6 from "../images/vet/박주향.png";
import tvet7 from "../images/vet/최유진.png";
import tvet8 from "../images/vet/정태규.png";
import tvet9 from "../images/vet/윤기홍.png";
import tvet10 from "../images/vet/이선백.png";
import tvet11 from "../images/vet/서승원.png";
import tvet12 from "../images/vet/송재성.png";
import tvet13 from "../images/vet/박기종.png";
import tvet14 from "../images/vet/이한중.png";
// 최유진, 서승원, 송재성, 박기종 삭제
// 순서: 문종선 정다슬 박설기 김도희 최동준 이한중 박주향 정태규 윤기홍 최유진 이선백 서승원 송재성 박기종
const vetInfo = [
  {
    id: 1,
    position: "대표원장",
    name: "문종선",
    img: vet1,
    timg: tvet1,
    title: "전북대학교 수의학과",
    greetings:
      "치료는 아픈 아이들의 마음을 이해하는 것부터 시작입니다. 보호자님들과 아이들이 함께하는 시간의 시작과 끝을 책임지겠습니다.",
    history: [
      "전북대학교 수의과대학 수의학과 졸업",
      "이천시청,성남시청 공중방역수의사",
      "우리아이동물메디컬센터진료수의사",
      "부천SKY동물메디컬센터 진료수의사",
      "서울 신사SKY동물메디컬센터 선임 진료수의사",
      "서울 신사SKY동물메디컬센터 진료과장",
      "전)인천SKY동물의료센터 부원장",
      "전)계양SKY동물의료센터 원장",
      "현)인천SKY동물메디컬센터 원장",
      "한국고양이수의사회 정회원",
    ],
    paper: [],
    completion: ["CVA(미국수의한방침치료과정인증) 수료"],
  },
  {
    id: 2,
    position: "부원장",
    name: "정다슬",
    img: vet2,
    timg: tvet2,
    title: "건국대학교 수의학과",
    greetings: "모든 동물들이 건강하고 행복하도록 최선을 다하겠습니다.",
    history: [
      "건국대학교 수의과대학 수의학과 졸업",
      "수원SKY동물메디컬센터 진료수의사",
      "인천SKY동물메디컬센터 진료수의사",
      "인천SKY동물메디컬센터 진료과장",
      "현)인천SKY동물메디컬센터 부원장",
    ],
    paper: [],
    completion: [],
  },
  {
    id: 5,
    position: "내과과장",
    name: "박설기",
    img: vet5,
    timg: tvet5,
    title: "서울대학교 수의과대학 석사",
    greetings:
      "아이들을 제 가족처럼 소중히 여기며 감동과 희망을 전하는 수의사가 되겠습니다.",
    history: [
      "경상대학교 수의학과 학사 졸업",
      "서울대학교 수의과대학 부속 동물병원 수련과정 수료",
      "서울대학교 수의과대학 내과학교실 실습조교",
      "서울대학교 수의과대학 수의내과학 석사 졸업",
      "우리동물메디컬센터 내과과장",
      "2018.05 한국임상수의학회 춘계학술대회 구두발표",
      "2019.06 ISSCR in LA 참가",
      "2019.09 FASAVA in tokyo 참가",
    ],
    paper: [
      "Pretreatment with IFN-γ enhances the immunomodulatory effect of feline adipose tissue-derived mesenchymal stem cells through the COX-2/PGE2 pathway",
      "Case of babesiosis induced thrombocytopenia in a dog.",
      "Clinical application of both amniotic membranes and adipose derived mesenchymal stem cells in a cat with large skin defect",
    ],
    completion: [
      "2019 해마루 심장초음파 wet lab 수료",
      "2020 수의한방 침술사 자격증(CVA) 취득",
    ],
  },
  {
    id: 3,
    position: "외과과장",
    name: "김도희",
    img: vet3,
    timg: tvet3,
    title: "건국대학교 수의외과학 석박사통합과정 수료",
    greetings: "반려동물과 함께하는 가족의 행복을 위해 늘 함께 하겠습니다.",
    history: [
      "건국대학교 수의과대학 수의학과 졸업",
      "건국대학교 수의과대학 수의외과학 석박사통합과정 수료",
      "건국대학교 수의과대학 부속동물병원 진료수의사",
      "건국대학교 수의과대학 외과실습 조교",
      "현)인천SKY동물메디컬센터 외과과장",
    ],
    paper: [],
    completion: [],
  },
  // {
  //   id: 4,
  //   position: "외과과장",
  //   name: "최동준",
  //   img: vet4,
  //   timg: tvet4,
  //   title: "건국대학교 수의외과학 석사",
  //   greetings:
  //     "근거 중심의 정확한 지식을 바탕으로 진정성 있는 수의사가 되도록 최선을 다하겠습니다.",
  //   history: [
  //     "경북대학교 수의과대학 졸업",
  //     "해마루 2차진료 동물병원 진료수의사",
  //     "건국대학교 수의외과학 석사 수료",
  //     "건국대학교 부속동물병원 외과 진료수의사",
  //     "건국대학교 수의학부 수의외과학 조교",
  //     "현)인천SKY동물메디컬센터 외과과장",
  //   ],
  //   paper: [],
  //   completion: [
  //     "AOVET Principle in small animal management course",
  //     "SACEC DFO Seminar 수료",
  //   ],
  // },
  {
    id: 14,
    position: "외과과장",
    name: "이한중",
    img: vet14,
    timg: tvet14,
    title: "충남대학교 임상수의학 석사",
    greetings: "환자와 보호자님의 삶에 행복을 드릴 수 있도록 헌신하겠습니다.",
    history: [
      "전북대학교 수의학과 졸업",
      "충남대학교 임상수의학 석사 졸업",
      "전) VIP동물의료센터 동대문점 외과 팀장",
      "현) 인천SKY동물메디컬센터 외과 과장",
    ],
    paper: [
      'Lee, Hanjung, et al. "Epineural Neurorrhaphy of a Large Nerve Defect Due to IatroGenic Sciatic Nerve Injury in a Maltese Dog." Veterinary Sciences 9.7 (2022): 361.',
    ],
    completion: [],
  },

  {
    id: 6,
    position: "영상의학과장",
    name: "박주향",
    img: vet6,
    timg: tvet6,
    title: "경북대학교 수의과대학 석사",
    greetings: "다정한 손길로, 숨은 질환도 꼼꼼하게 찾아내도록 하겠습니다.",
    history: [
      "경북대학교 수의과대학 수의과대학 졸업",
      "경북대학교 수의과대학 대학원 석사 졸업 (수의영상의학 전공)",
      "경북대학교 부속동물병원 수련수의사",
      "경북대학교 수의과대학 수의영상의학 조교",
      "대구광역시 초등학교 동물보호교육 강사",
      "현) 인천스카이동물의료센터 영상과장",
    ],
    paper: [
      "Diagnosis of mammary carcinoma in a castrated male Maltese dog. Journal of Veterinary Clinics (2019)",
    ],
    completion: [
      "2018 미국 텍사스 International Veterinary Radiology Association 참가 및 포스터 발표",
      "2018-2019 서울시수의사회 학술지 VETIS 연재",
      "2018-2019 한국임상수의학회 참석",
      "2019 한국수의영상의학연구회 참가 및 feline alimentary lymphoma case 구두 발표",
      "2019 미국 아리조나 American College of Veterinary Internal Medicine Forum 참석",
    ],
  },

  {
    id: 8,
    position: "응급의학과장",
    name: "정태규",
    img: vet8,
    timg: tvet8,
    title: "서울대학교 임상수의학 응급의학과 석사",
    greetings:
      "모든 환자들은 특별하고 소중합니다. 아이들의 건강을 위해 헌신하겠습니다.",
    history: [
      "서울대학교 수의과대학 수의학과 졸업",
      "서울대학교 수의과대학 임상수의학 응급의학과 석사졸업",
      "서울대학교 동물병원 진료수의사",
      "서울대학교 수의학과 수의응급의학과 실습조교",
      "관악구 이로동물병원 진료수의사",
      "수원 24시바른동물의료센터 응급의학과장",
      "현)인천SKY동물메디컬센터 응급의학과장",
    ],
    paper: [],
    completion: ["CVA(미국수의한방침치료인증) 수료"],
  },
  {
    id: 9,
    position: "응급의학팀장",
    name: "윤기홍",
    img: vet9,
    timg: tvet9,
    title: "경상대학교 수의과 대학 졸업",
    greetings: "보호자님의 마음까지 공감할 수 있는 수의사가 되겠습니다.",
    history: [
      "경상대학교 수의학과 졸업",
      "전) ㈜크로넥스 CRO팀 책임수의사",
      "전) 대전성심동물메디컬센터 진료수의사",
      "전) 인천SKY동물메디컬센터 진료수의사",
      "현) 인천SKY동물메디컬센터 응급의학팀장",
    ],
    paper: [],
    completion: [],
  },
  // {
  //   id: 7,
  //   position: "진료팀장",
  //   name: "최유진",
  //   img: vet7,
  //   timg: tvet7,
  //   title: "충북대학교 수의학과",
  //   greetings: "언제나 믿고 의지할 수 있는 평생 주치의가 되겠습니다.",
  //   history: [
  //     "충북대학교 수의과대학 수의학과 졸업",
  //     "충북대학교 수의과대학 수의생화학실험실",
  //     "충북대학교 수의과대학 부속동물병원 동물병원 임상실습 수료",
  //     "인천SKY동물메디컬센터 진료수의사",
  //     "현)인천SKY동물메디컬센터 진료과장",
  //   ],
  //   paper: [],
  //   completion: [],
  // },
  {
    id: 10,
    position: "진료수의사",
    name: "이선백",
    img: vet10,
    timg: tvet10,
    title: "건국대학교 수의과대학",
    greetings: "아이들을 사랑하는 수의사, 따뜻한 손길로 치료하겠습니다.",
    history: [
      "건국대학교 수의과대학 졸업",
      "경기도북부동물위생연구소 공중방역수의사",
      "베링거인겔하임 기술지원수의사",
      "현)인천SKY동물메디컬센터 진료수의사",
    ],
    paper: [],
    completion: [],
  },
  // {
  //   id: 11,
  //   position: "진료수의사",
  //   name: "서승원",
  //   img: vet11,
  //   timg: tvet11,
  //   title: "경상대학교 수의과대학",
  //   greetings:
  //     "환자와 보호자님의 입장에서 생각하고 최선을 다해 진료하겠습니다.",
  //   history: [
  //     "경상대학교 수의과대학 졸업",
  //     "충청남도 홍성군청 공중방역수의사",
  //     "부평종합동물의료센터 진료수의사",
  //     "계양SKY동물의료센터 진료수의사",
  //     "현)인천SKY동물메디컬센터 진료수의사",
  //   ],
  //   paper: [],
  //   completion: [
  //     "베터플릭스 복부&심장 초음파 과정 수료",
  //     "웨스턴동물의료센터 종합임상수의학과정 수료",
  //   ],
  // },
  // {
  //   id: 12,
  //   position: "진료수의사",
  //   name: "송재성",
  //   img: vet12,
  //   timg: tvet12,
  //   title: "건국대학교 수의과대학",
  //   greetings:
  //     "저와 만난 모든 아이들과 보호자님이 언제나 건강하고 행복하길 바라겠습니다.",
  //   history: [
  //     "건국대학교 수의과대학 졸업",
  //     "건국대학교 임상로테이션 수료",
  //     "인천 보건환경연구원 공중방역수의사",
  //     "인천광역시 동물보호공무원",
  //     "현)인천SKY동물메디컬센터 진료수의사",
  //   ],
  //   paper: [],
  //   completion: [
  //     "해마루동물병원 임상수의사 기초과정 수료",
  //     "웨스턴동물의료센터종합임상수의학과장 수료",
  //   ],
  // },
  // {
  //   id: 13,
  //   position: "진료수의사",
  //   name: "박기종",
  //   img: vet13,
  //   timg: tvet13,
  //   title: "건국대학교 수의과대학",
  //   greetings: "환자와 보호자님의 마음까지 치료하는 수의사가 되겠습니다.",
  //   history: [
  //     "건국대학교 수의과대학 졸업",
  //     "평창 산업동물임상교육연수원 심화과정 수료",
  //     "서울 아산병원 비교병리연구실 2019년 실습",
  //     "현)인천SKY동물메디컬센터 진료수의사",
  //   ],
  //   paper: [],
  //   completion: [],
  // },
];

export default vetInfo;
