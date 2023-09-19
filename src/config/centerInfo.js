import img101 from "../images/resource/subjects/mgimg_heart.jpg";

import img1 from "../images/title/visual_greeting.jpeg";

// import sec2img from "../images/resource/subjects/스카이MRI실.jpeg";

import sec3img1 from "../images/resource/subjects/section3_img01.png";
import sec3img2 from "../images/resource/subjects/section3_img02.png";
import sec3img3 from "../images/resource/subjects/section3_img03.png";

import equip1 from "../images/resource/subjects/slide01.jpeg";
import equip2 from "../images/resource/subjects/slide02.jpeg";
import equip3 from "../images/resource/subjects/slide03.jpeg";
import equip4 from "../images/resource/subjects/slide04.jpeg";

import surgery1 from "../images/resource/subjects/surgery_01.jpeg";

const centerInfo = [
  {
    id: 1,
    primaryImg: img101,
    titleImg: img1,
    vetMemberIdx: [2, 5, 7, 11, 1, 2, 3, 4, 4],
    title: "영상의료센터",
    subTitle: `대학병원급 최첨단 진단 장비
마취과 담당의 근무
지역병원 MRI, CT 의뢰`,
    description: `영상진단과에서는 다양한 첨단 영상의학검사장비를 이용하여 질병을 정확하게 진단하는 것을 목표로 하며, 모든 촬영과 판독이 전공자에 의해 이루어 지며, 안전한 검사를 위한 전용 마취 장비 및 모니터링 장비가 구비되어 있습니다.`,
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
    equip: [
      {
        img: equip1,
        name: "ERBEJET® 2",
        description:
          "열, 초음파를 이용한 기존 수술 방법이 아닌 수압을 이용한 외과 수술 장비입니다. SKY동물메디컬센터는 인간 의료에서만 사용하던 ERBE JET2를 도입하여 정상 조직의 손상을 최소화하는 최초의 병원입니다.",
      },
      {
        img: equip2,
        name: "썬더비트",
        description:
          "초음파 절삭, 바이폴라 혈관봉합을 할 수 있는 제품으로, 수술 부위를 보다 덜 자극하여 수술할 수 있고 빠른 지혈이 가능한 외과 수술 장비입니다. 수술 시간을 줄이고 합병증이 적은 제품으로 국제적으로도 인정을 받고 있습니다.",
      },
      {
        img: equip3,
        name: "OEC Elite CFD",
        description:
          "C-arm은 뼈, 관절, 혈관 등 신체 부위를 실시간으로 연속 투시할 수 있는 고가의 특수 영상장치 입니다. 심장혈관인터벤션, 동맥색전술, 동맥화학색전술, 혈관스텐트삽입술, 비혈관스텐트삽입술 등 다양하게 활용 가능한 첨단 의료 장비입니다. SKY동물메디컬센터는 국내 극소수만 도입하는 고가, 최고급 C-arm 장비를 활용합니다.",
      },
      {
        img: equip4,
        name: "EGE MR signa excite HDxt 1.5T",
        description:
          "MRI에 탑재된 첨단 기술로 뇌, 복부, 척추, 관절에서의 신경, 혈관, 인대의 미세한 조직까지 다양한 영역에서의 정밀 진단이 가능합니다. SKY동물메디컬센터는 독일 제너럴일렉트릭사의 프리미엄 MRI장비인 GE SIGNA Creator 1.5T를 활용하고 있습니다.",
      },
    ],
    // surgery: [],
    surgery: [
      {
        img: surgery1,
        type: 1,
        content: [
          {
            title: "간문맥 단락증(PSS)",
            description:
              "비정상적으로 생긴 혈관 때문에 혈액이 간을 통과하지 않아 생기는 질환입니다. 간문맥 단락증에 걸리면 간의 기능 저하, 간 발달 장애가 되고 2차적으로 간성뇌증 등의 증상이 생길 수 있습니다.",
          },
          {
            title: "치료",
            description:
              "비정상 혈관에 ameroid ring / cellophane bandiing을 통하여 서서히 혈관이 차단되도록 수술을 통하여 치료합니다. 암모니아 수치를 낮추기 위하여 약 복용을 하며 경과를 관찰할 수 있습니다.",
          },
          {
            title: "예후",
            description:
              "수술 후 예후는 좋은편이나 고난이도 수술에 속하므로 숙련된 전문의의 전문 진료가 필요합니다. 수술 이후 정상적으로 간 기능이 회복되기 위해서는 약 2개월정도의 시간이 필요합니다.",
          },
        ],
      },
      {
        img: surgery1,
        type: 2,
        content: [
          {
            title: "간문맥 단락증(PSS)",
            description:
              "비정상적으로 생긴 혈관 때문에 혈액이 간을 통과하지 않아 생기는 질환입니다. 간문맥 단락증에 걸리면 간의 기능 저하, 간 발달 장애가 되고 2차적으로 간성뇌증 등의 증상이 생길 수 있습니다.",
          },
          {
            title: "치료",
            description:
              "비정상 혈관에 ameroid ring / cellophane bandiing을 통하여 서서히 혈관이 차단되도록 수술을 통하여 치료합니다. 암모니아 수치를 낮추기 위하여 약 복용을 하며 경과를 관찰할 수 있습니다.",
          },
          {
            title: "예후",
            description:
              "수술 후 예후는 좋은편이나 고난이도 수술에 속하므로 숙련된 전문의의 전문 진료가 필요합니다. 수술 이후 정상적으로 간 기능이 회복되기 위해서는 약 2개월정도의 시간이 필요합니다.",
          },
        ],
      },
    ],
    pride: {
      title: "반려동물의 간, 담낭, 췌장 수술은 매우 어렵습니다.",
      description: `간, 담낭은 신체 가장 안쪽에 위치하는 장기입니다. 개복 수술을 진행하더라도 직접 보고 수술하기가 어렵습니다. 또한 다량의 출혈이 발생할 가능성, 정상 조직에 손상을 줄 가능성이 매우 높슾니다. 출혈을 최소화하고 정상 조직의 손상을 최소화 하는 것은 수술 이후의 회복에서 가장 중요한 부분입니다.

SKY동물메디컬센터는 국내 최우수 의료진이 간, 담낭, 췌장을 전문적으로 진료하고 있습니다. 이 밖의 진단,수술 관련 최고의 의료장비 및 일반적으로 취급하기 어려운 처치약품을 사용합니다. 고객 여러분께서 믿고 맡겨주시는 만큼 최고의 의료 서비스로 보답하겠습니다. 소중한 우리 아이들을 위한 최고의 선택, SKY동물메디컬센터입니다.`,
    },
  },
];

export default centerInfo;
