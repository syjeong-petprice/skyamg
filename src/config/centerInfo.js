import img101 from "../images/resource/subjects/mgimg_heart.jpg";

//import img1 from "../images/title/visual_greeting.jpeg";
import img1 from "../images/title/visual_mri.jpg";
import titleImg1 from "../images/resource/images/스카이MRI실.jpeg";
import titleImg2 from "../images/resource/subjects/radioimg_1.jpg";
import titleImg3 from "../images/resource/subjects/gsimg_gs.jpg";
import titleImg4 from "../images/resource/subjects/DSC06707.jpg";
import titleImg5 from "../images/resource/subjects/gsimg_gs.jpg";
// import sec2img from "../images/resource/subjects/스카이MRI실.jpeg";

import sec3img1 from "../images/resource/subjects/section3_img01.png";
// import sec3img2 from "../images/resource/subjects/section3_img02.png";
// import sec3img3 from "../images/resource/subjects/section3_img03.png";
import sec3img333 from "../images/resource/subjects/section3_img03.png";
import sec3img21 from "../images/resource/images/DSC06699.jpg"; // 수술실
import sec3img22 from "../images/resource/subjects/mgimg_endocrine.jpg";
import sec3img31 from "../images/resource/subjects/sec3/3-1.jpg";
import sec3img32 from "../images/resource/subjects/sec3/3-2.jpg";
// import sec3img33 from "../images/resource/subjects/sec3/3-3.jpg";
import sec3img41 from "../images/resource/subjects/sec3/4-1.png";
import sec3img42 from "../images/resource/subjects/sec3/4-2.jpg";
import sec3img43 from "../images/resource/subjects/sec3/4-3.png";
import sec3img51 from "../images/resource/subjects/sec3/5-1.jpg";
import sec3img52 from "../images/resource/subjects/sec3/5-2.jpg";
import sec3img53 from "../images/resource/subjects/sec3/5-3.jpg";

import sec3img2 from "../images/resource/images/263A9154.png";
import sec3img3 from "../images/resource/images/263A9166.png";
import sec3img33 from "../images/resource/images/263A9154.png";

import equip1 from "../images/resource/subjects/equip/image1.png";
import equip2 from "../images/resource/subjects/equip/image2.png";
import equip3 from "../images/resource/subjects/equip/image3.png";
import equip4 from "../images/resource/subjects/equip/image4.png";
import equip5 from "../images/resource/subjects/equip/image5.png";
import equip6 from "../images/resource/subjects/equip/image6.png";
import equip7 from "../images/resource/subjects/equip/image7.png";

import surgery1 from "../images/resource/subjects/surgery_01.jpeg";

const centerInfo = [
  {
    id: 1,
    primaryImg: img101,
    titleImg: titleImg1,
    vetMemberIdx: [6, 4],
    title: "영상진단센터",
    enTitle: "MRI & CT Center",
    subTitle: `대학병원급 최첨단 진단 장비
마취과 담당의 근무
지역병원 MRI, CT 의뢰`,
    sec2: {
      title1: "모든 진단의 시작",
      title2: "SKY 영상진단센터",
      description: `영상진단센터에서는 다양한 첨단의학검사장비를 이용하여 질환을 정확히 진단하는 것을 목표로 하고 있습니다. 안전한 검사를 위한 전용 마취 장비 및 담당 직원이 상주하고 있으며, 검사와 판독은 영상의학 전공자에 의해 이루어집니다.
      `,
    },
    sec3: [
      {
        img: sec3img1,
        title: "영상의학전공의 및 마취 전문 인력",
        enTitle: "",
        content: `반려동물은 품종, 나이, 기저질환 등의 차이로 인해 환자 별 마취 안정성의 편차가 큰 편입니다. 영상의학전공의의 관리하, 마취 전문 인력이 상주하고 있어 검사 과정에서의 마취 안정성을 확보하고 있습니다.`,
      },
      {
        img: sec3img2,
        title: "최상급 사양의 마취 장비",
        enTitle: "",
        content: `GE사의 Healthcare 9100c NXT는 미숙 신생아에게도 적용할 수 있는 환기 시스템을 갖추고 있어 마취 심도에 따라서 호흡 조절이 가능하기에 저산소증 및 폐손상을 최소화시킬 수 있습니다.`,
      },
      {
        img: sec3img3,
        title: "대학병원급 연계 진료 시스템",
        enTitle: "",
        content: `SKY동물메디컬센터는 최상급 의료기관과 동일하게 영상 검사 이후, 응급의학과, 내과, 외과와의 협진을 통하여 질환 치료를 one-stop으로 이어갈 수 있는 시스템을 구축하고 있습니다.`,
      },
    ],
    equip: [
      {
        img: equip1,
        name: "GE Signa Creator MRI",
        description:
          "영상의 질을 결정하는 중요한 요소인 자장의 균질성이 뛰어나고, 강력한 경사코일, 고출력 software를 갖추고 있어, 뇌, 뇌혈관, 두경부, 척추, 무릎 관절 등에 대한 최상의 영상을 제공합니다.",
      },
      {
        img: equip2,
        name: "GE Revolution ACT CT",
        description:
          "적은 방사선량, 짧은 스캔 시간을 통해서도 고해상도의 영상을 최소 피폭량으로 촬영 가능합니다. 또한 CT 촬영 전용 특수 조영 장비를 통하여 체내 조영제 분포를 초단위로 구분하여 진단에 활용하고 있습니다.",
      },
      {
        img: equip3,
        name: "GE VIVID T9 초음파",
        description:
          "심장질환 진단에 특화되어 있는 초음파로서 AI 알고리즘을 이용한 자동화된 프로세스를 갖추고 있습니다. 심장 자동 도플러, 2D-LV 자동 측정을 통해 검사 속도를 높이고 검사 결과의 재현을 최대화시킬 수 있습니다.",
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
      title: "치료의 시작은 정확한 진단입니다.",
      description: `반려동물의 CT, MRI 검사는 사람과 달리 마취를 필요로 하는 고난이도 전문 분야입니다. 마취의 안정성을 위하여 마취 전 면밀한 검사가 필요하며, 마취 중에도 집중 관찰을 요합니다. 검사 후에도 정확한 판독을 통해 병변을 확인할 수 있어야 합니다.
      
인천 SKY 동물메디컬센터는 영상의학 장비로서 CT, MRI를 모두 보유하고 있어 전원 없이 원스톱 영상 검사가 가능합니다. 또한, 영상의학 전공의와 마취 전문 인력이 상주하여 안전하게 검사를 진행하고 있습니다. 중증 질환 진단의 첫 걸음, 인천 SKY 동물메디컬센터입니다.`,
    },
  },
  {
    id: 2,
    primaryImg: img101,
    titleImg: titleImg2,
    vetMemberIdx: [3, 14],
    title: "정형신경센터",
    enTitle: "Orthopedic & Neurological Surgery center",
    subTitle: `외과학전공의 및 수술 전문팀
철저한 수술 전 검사
한방치료 병행`,
    sec2: {
      title1: "수술 치료의 정점",
      title2: "SKY 정형신경센터",
      description: `정형신경센터에서는 안전한 수술 진행과 만족스러운 예후 확보를 목표로 하고 있습니다. 수술 장비의 멸균 처리와 안전한 마취를 위하여 담당 직원이 상주하고 있으며 모든 수술 과정은 외과학 전공자의 집도로 이루어집니다.
      `,
    },
    sec3: [
      {
        img: sec3img1,
        title: "외과학전공의 및 수술 전문팀",
        enTitle: "",
        content: `외과학 석/박사 출신의 수의사가 상주하고 있으며 모든 수술의 집도를 담당하여 성공률을 높이고 있으며, 수술 전담 테크니션과 구성된 수술팀이 항시 수술실과 수술장비의 멸균 및 소독에 힘쓰고 있습니다.`,
      },
      {
        img: sec3img22,
        title: "철저한 수술 전 검사",
        enTitle: "",
        content: `치밀한 수술 전 검사를 통해 반드시 필요한 수술만을 실시하는 것을 지향하고 있습니다. 영상진단센터 및 내과센터의 사전 체크 후, 수술에 임하고 있습니다.`,
      },
      {
        img: sec3img33,
        title: "한방치료 병행",
        enTitle: "",
        content: `통증관리 및 재활에 있어 한방치료센터와의 협진을 통해 술 후 안전하고 빠른 회복에 집중하고 있습니다.`,
      },
    ],
    equip: [
      {
        img: equip4,
        name: "Stryker Sonopet",
        description:
          "초음파 수술장비로서 공명현상을 통해 조직을 선택적으로 절제할 수 있습니다. 뼈 및 종양조직을 주변 조직의 손상 없이 제거할 수 있어 술 후 재발 가능성을 최소화 할 수 있습니다. 정형외과 및 신경외과 수술 시, 활용도가 매우 높은 장비입니다.",
      },
      {
        img: equip5,
        name: "C-arm 메디슨 MCA-6200",
        description:
          "뼈와 관절을 연속적으로 투시하는 디지털 방사선촬영 장비입니다. 100만 화소의 고해상도 카메라와 9인치 렌즈를 적용하여 영상의 왜곡을 최소화하였습니다. 정형 수술시, 관절 및 골 병변부의 정확한 접근이 가능합니다.",
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
      title: "정형, 신경외과 수술은 전문 의료 영역입니다.",
      description: `슬개골 탈구, 십자인대 단열, 디스크 탈출증과 같은 정형, 신경외과 질환은 전문적인 술기와 함께 그에 맞는 장비를 필요로 합니다. 주변 조직의 손상 및 출혈을 최소화할 수 있어야 수술 이후의 회복을 기대할 수 있습니다.
      
인천 SKY 동물메디컬센터에서는 외과학 석/박사 수의사가 직접 수술을 집도하고 있으며, 최신의 수술 기법을 도입하여 수술 성공률을 높이고 있습니다. 수술 이후로도 내과, 한방센터와의 협진을 통한 술후 관리를 실시하고 있습니다. 고난이도 수술을 위한 최고의 선택, 인천 SKY 동물메디컬센터입니다.`,
    },
  },
  {
    id: 3,
    primaryImg: img101,
    titleImg: titleImg3,
    vetMemberIdx: [5, 2],
    title: "내과질환센터",
    enTitle: "Internal Medicine Center",
    subTitle: `심장, 신장질환 특화
고양이 의료시설 분리
한방치료 병행`,
    sec2: {
      title1: "행복한 노년기를 위해",
      title2: "SKY 내과질환센터",
      description: `내과질환센터에서는 노령에 접어든 환자의 기대 수명 연장 및 삶의 질 개선을 목표로 하고 있습니다. 정확한 진단과 함께 환자 상태를 다방면으로 고려한 내복약 처방이 이루어지며 내과학 전공자의 판단 하에 치료 및 관리가 이루어집니다.
      `,
    },
    sec3: [
      {
        img: sec3img31,
        title: "심장, 신장질환 특화",
        enTitle: "",
        content: `심장, 신장은 긴밀하게 연결되어 있어 치료 과정에서 항상 함께 고려해야하는 장기입니다. 투여 약물의 결정은 내과전공의 및 숙련된 수의사에 의해 이루어지며 약물 사용의 효과 및 부작용, 합병증에 대한 고지 및 충분한 설명이 이루어집니다.`,
      },
      {
        img: sec3img32,
        title: "고양이 의료시설 분리",
        enTitle: "",
        content: `고양이 진료실 및 입원실을 별도로 두어 통원 및 입원 치료 과정에서의 스트레스 최소화에 힘쓰고 있습니다.`,
      },
      {
        img: sec3img33,
        title: "한방치료 병행",
        enTitle: "",
        content: `중증 내과환자의 치료 과정을 양한방의 협진을 통해 다각적인 관점으로 바라보려고 노력하고 있습니다. 수의한방침치료인증과정을 수료한 다수의 수의사가 내과질환 치료에 함께 임하고 있습니다.`,
      },
    ],
    equip: [
      {
        img: equip6,
        name: "이동형 초음파 GE Venue go",
        description:
          "휴대가 가능한 이동형 초음파로서 호흡 곤란과 같이 응급한 상태의 환자에게 신속하게 입원장에서 검사를 실시할 수 있습니다. 폐초음파 검사 및 대형견의 초음파 검사 시 유용하게 사용할 수 있습니다.",
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
      title: "중증, 노령성 내과 질환은 장기 전입니다.",
      description: `반려 동물의 내과 질환 치료는 임상 증상이 확인된 이후로 내원하는 경우가 많다는 특성 상, 진단 시점에서 질환이 많이 진행되어 있는 경우가 많습니다. 따라서 단기에 치료하기 어렵기 때문에 장기적인 관점에서 환자의 연령, 기왕력, 식이 등을 전반적으로 고려하면서 관리해야 하는 장거리 달리기와 같습니다.

인천 SKY 동물메디컬센터에서는 오랜 경력으로 숙련된 수의사들이 내과 환자 치료에 임하고 있으며 효율적인 진료를 통해 환자에게 가장 적합한 치료, 관리 방법을 제시합니다. 환자와 보호자님 곁의 최고의 동행자, 인천 SKY 동물메디컬센터입니다.`,
    },
  },
  {
    id: 4,
    primaryImg: img101,
    titleImg: titleImg4,
    vetMemberIdx: [1, 5, 8],
    title: "한방재활센터",
    enTitle: "Traditional Chinese Medicine Center",
    subTitle: `수의한방침치료인증과정 수료
반복적인 세션 치료
동물전용 한방의료기구 사용`,
    sec2: {
      title1: "비침습적, 하지만 최선의 효과",
      title2: "SKY 한방재활센터",
      description: `한방재활센터에서는 양방 의존적인 고전 방법에서 벗어나 치료 방향의 다양화를 목표로 하고 있습니다. 침습적인 치료가 어렵거나 양방 치료를 통한 예후가 좋지 못한 환자들에게 수의한방침치료인증과정을 수료한 수의사에 의한 한방 및 재활치료가 이루어집니다.
      `,
    },
    sec3: [
      {
        img: sec3img41,
        title: "수의한방침치료인증과정 수료",
        content: `세계적인 동물 한방 및 재활 전문 교육기관인 Chi university에서 공인한 인증과정을 수료한 수의사들의 시침이 이루어집니다.`,
      },
      {
        img: sec3img2,
        title: "반복적인 세션 치료",
        content: `여러 번의 시침이 이루어질 때 효과가 더욱 극대화되는 한방치료의 특성을 고려하여, 일회성 시술로 끝내지 않고 환자 별로 필요한 혈자리 및 침법을 선택하여 주기적인 반복 치료를 실시하고 있습니다.`,
      },
      {
        img: sec3img3,
        title: "동물전용 한방의료기구 사용",
        content: `인의용 제품을 겸용하지 않고, 동물전용으로 개발된 전침기, 침틀, 재활기구를 사용하여 반려동물에게 최적화된 한방치료를 실시합니다.`,
      },
    ],
    equip: [
      {
        img: equip7,
        name: "DIOWAVE 10&15WATT LASER SYSTEM",
        description:
          "근육층에 조사하는 2가지 파장 외에 피부층 및 심부 조직까지 적용할 수 있는 2가지 파장이 추가되어 있는 레이저 재활 치료기입니다. 수술 후 염증 및 통증 관리, 피부 질환, 염증성 질환 등에 폭넓게 사용할 수 있습니다.",
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
      title: "한방 치료는 스스로의 회복력을 일깨우는 치료입니다.",
      description: `한방 침 치료는 통증 관리, 소화기 증상 완화, 만성 질환의 증상 개선 등에 탁월한 효과가 있습니다. 건침, 약침, 전침, 뜸을 사용하는 침법은 한방 치료 단독으로도 충분한 임상 증상 개선을 이룰 수 있으며 양방과 병행 시 효과가 배가 됩니다.
      
인천 SKY 동물메디컬센터에서는 동물침치료인증교육 수료 수의사들의 주관 하의 양 한방 병용의 효과 높은 치료를 경험해보실 수 있습니다. 치료의 새 방향을 제시하는, 인천 SKY 동물메디컬센터입니다.`,
    },
  },
  {
    id: 5,
    primaryImg: img101,
    titleImg: titleImg5,
    vetMemberIdx: [8, 7, 9],
    title: "응급의학센터",
    enTitle: "Emergency Medicine Center",
    subTitle: `응급의학전공의 상주
전 입원장의 ICU화
외,내과와의 긴밀한 협진`,
    sec2: {
      title1: "생사의 위기, 마지막 도전",
      title2: "SKY 응급의학센터",
      description: `응급의학센터에서는 일반적인 야간 진료만이 이루어지는 것이 아니라 주간 진료시간에도 응급의학 전공 수의사가 상주함으로서 위급한 순간에 직면한 환자에게 신속한 의료서비스를 제공하고 있습니다.
      `,
    },
    sec3: [
      {
        img: sec3img1,
        title: "응급의학전공의 진료",
        enTitle: "",
        content: `응급수의학전공의가 교통사고, 쇼크, 중독 등의 응급상황에 대하여 신속한 치료를 실시합니다.`,
      },
      {
        img: sec3img52,
        title: "전 입원장의 ICU화",
        enTitle: "",
        content: `호흡이 불안정한 응급환자들의 관리를 위해 모든 입원장은 독립적으로 고압산소공급이 가능하도록 설계되어 있습니다.`,
      },
      {
        img: sec3img333,
        title: "외,내과와의 긴밀한 협진",
        enTitle: "",
        content: `응급상황을 벗어난 중증환자가 신속하게 다음 단계로 넘어갈 수 있도록 모든 치료 과정에 외과, 내과의와의 협진이 이루어집니다.`,
      },
    ],
    equip: [],
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
      title: "야간, 휴일 진료만이 응급의료센터의 전부가 아닙니다.",
      description: `어린 연령이지만 선천적 질환을 가지고 있거나, 노령성 내과 질환을 가지고 있는 환자들의 경우, 응급 상황은 언제든지 발생할 수 있습니다. 생명을 위협받는 절체절명의 순간에서는 빠른 판단과 신속한 대응이 중요합니다.

응급수의학 전공의 및 숙련된 수의사들이 응급 상황에 대해 빠르게 대응할 준비가 되어 있으며 신속한 생명 구호 처치 후 입원 치료에 들어가게 됩니다. 생사의 갈림길에서의 마지막 선택, 인천 SKY 동물메디컬센터입니다.`,
    },
  },
];

export default centerInfo;
