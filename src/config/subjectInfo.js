import img101 from '../images/resource/subjects/mgimg_heart.jpg';
import img102 from '../images/resource/subjects/mgimg_digestive.jpg';
import img103 from '../images/resource/subjects/mgimg_breath.jpg';
import img104 from '../images/resource/subjects/mgimg_nervous.jpg';
import img105 from '../images/resource/subjects/mgimg_urology.jpg';
import img106 from '../images/resource/subjects/mgimg_endocrine.jpg';
import img201 from '../images/resource/subjects/derimg_1.jpg';
import img202 from '../images/resource/subjects/derimg_2.jpg';
import img203 from '../images/resource/subjects/derimg_3.jpg';
import img204 from '../images/resource/subjects/derimg_4.jpg';
import img301 from '../images/resource/subjects/gsimg_or.jpg';
import img302 from '../images/resource/subjects/gsimg_neurosurgery.jpg';
import img303 from '../images/resource/subjects/gsimg_thoraci.jpg';
import img304 from '../images/resource/subjects/gsimg_gs.jpg';
import img305 from '../images/resource/subjects/gsimg_cardiovascular.jpg';
import img306 from '../images/resource/subjects/gsimg_tumor.jpg';
import img401 from '../images/resource/subjects/denimg_1.jpg';
import img402 from '../images/resource/subjects/denimg_2.jpg';
import img403 from '../images/resource/subjects/denimg_3.jpg';
import img501 from '../images/resource/subjects/reimg_1.jpg';
import img502 from '../images/resource/subjects/reimg_2.jpg';
import img503 from '../images/resource/subjects/reimg_3.jpg';
import img601 from '../images/resource/subjects/radioimg_1.jpg';
import img602 from '../images/resource/subjects/radioimg_2.jpg';
import img603 from '../images/resource/subjects/radioimg_3.jpg';
import img604 from '../images/resource/subjects/radioimg_4.jpg';
import img701 from '../images/resource/subjects/eyeimg_1.jpg';
import img801 from '../images/resource/subjects/emeimg_1.jpg';
import img901 from '../images/resource/subjects/phyimg_1.jpg';

const subjectInfo = [
	{
		id: 1,
		title: '내과',
		description:
			'내과에서는 순환기, 소화기, 호흡기, 신경계, 내분비, 면역계 질환등에 내한 진단 및 비수술적 치료 등을 담당하고 있습니다.',
		subjects: [
			{
				id: 101,
				name: '심장 내과',
				img: img101,
				content: [
					{
						subName: '',
						subContent:
							'심장 내과에서는 심장 및 혈관 질환의 환자에 있어서 혈액검사, 방사선 검사, 심초음파 검사 등의 진단방법을 통해 개, 고양이에서 발생하는 선천적/후천적 심장질환 등에 대한 감별 진단 및 치료를 실시하고 있습니다. 개에서 발생하는 노령성 판막질환, 고양이에서 발생하는 비대성 심근 병증 등에 대한 영상진단의학 전공자의 정밀 심장 초음파 검사 및 내과 전공자의 단계에 따른 최적의 치료 방향을 설정을 통해 심장 질환 환자의 기대 수명 증가 및 삶의 질 향상을 위한 최적의 치료를 실시하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 102,
				name: '소화기 내과',
				img: img102,
				content: [
					{
						subName: '',
						subContent:
							'소화기 내과에서는 구토 및 식욕부진, 설사등의 주증으로 하는 소화기 질환과 관련하여, 구강, 식도, 위, 소장, 대장, 간, 담도 및 췌장 등의 질환에 대한 진단 및 치료를 실시하고 있습니다. 본원에서는 혈액검사, 초음파 검사, 조영 방사선 촬영, 내시경 검사 등을 통한 종합적인 진단을 실시하고 있으며, 초음파 검사 이외에도 소화기 CT 촬영 및 내시경 등을 통해 병변 부위를 국소화하여 최적을 진단 및 치료를 실시하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 103,
				name: '호흡기 내과',
				img: img103,
				content: [
					{
						subName: '',
						subContent:
							'호흡과 관련된 기침, 호흡 곤란, 빈호흡 등을 유발하는 호흡기 질환은 상부 기도 질환과 하부기도 질환으로 구분하게 됩니다. 대표적으로 상부 기도에 발생하는 만성 비염, 감염성 질환, 기도 협착 , 하부 기관지에서 발생하는 폐질환 등에 대해 청진 및 방사선 검사를 통해 병변 부위를 국소화하며, 혈액 검사 등을 통해 정확한 진단 및 치료를 실시하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 104,
				name: '신경계 내과',
				img: img104,
				content: [
					{
						subName: '',
						subContent:
							'신경계 내과에서는 뇌와 척수를 포함하는 중추 신경계 및 뇌신경, 말초신경 장애 등의 신경계에 발생하는 염증성, 종양성 질병에 대한 진단 및 치료를 실시하고 있습니다. 대표적인 질환으로 강아지에서 경련 증상 또는 마비 증상을 유발하는 선천적 뇌질환, 염증성 뇌질환(뇌수막염), 종양성 뇌질환에 대한 감별 진단 및 약물 처방을 통한 경련 조절 등을 실시하고 있으며, 종양성 뇌질환에 대한 내과적 항암치료 등을 실시하고 있습니다. 이외에도 전신의 떨림 증상을 발생 시키는 말초 신경에서 발생하는 특발성 진전, 말초 신경염 등에 대한 내과적 약물 처방을 통한 진단 및 치료를 실시하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 105,
				name: '비뇨기 내과',
				img: img105,
				content: [
					{
						subName: '',
						subContent:
							'콩팥, 요관, 방광, 요도 등에 발생하는 질환 등에 대한 내과적 치료를 담당하며, 대표적으로 노령견 및 노령묘에서 발생하는 만성 신질환의 내과적 관리, 방광염 등에 대한 진단 및 처방, 수컷 고양이에서 호발하는 급성 배뇨 장애 등에 대한 진단검사의학 및 영상진단 평가와 혈액검사 등을 통해 진단하고 치료, 관리합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 106,
				name: '내분비 내과',
				img: img106,
				content: [
					{
						subName: '',
						subContent:
							'내분비 내과는 신체의 각종 내분비 기관에서 분비되는 호르몬 이상, 대사성 질환, 내분비 기관에서 발생하는 종양 등을 진단하고 치료하는 내과로서 다음, 다뇨, 고혈당의 증세로 대표되는 당뇨병, 활력감소 체중 감소 등 증세로 하는 고양이 갑상선질환, 다음, 다뇨, 복부 팽만 등을 증세로하는 부신기능질환, 고혈압, 이외의 각종 대사성 질병 등을 진단검사의학 및 영상진단적 평가와 혈액검사 및 호르몬 검사 등으로 진단하고 치료, 관리합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
		],
	},
	{
		id: 2,
		title: '피부과',
		description: '',
		subjects: [
			{
				id: 201,
				name: '감염성 피부과',
				img: img201,
				content: [
					{
						subName: '',
						subContent:
							'반려동물의 가장 대표적인 피부질환은 감염성질환으로 세균성, 곰팡이성, 기생충성 및 바이러스 성으로 나뉩니다. 감염성 질환의 정확한 원인을 찾기위해서는 슬라이드도말검사, 귀도말검사, 항생제감수성 테스트 등의 검사를 진행하며, 감염원을 찾아낸 이후 원인에 맞는 처방을 실시합니다. 감염성 질환은 단순 감염성 질환으로 인한 경우와 원발 원인에 의한 2차적인 감염으로 나뉘며, 이에 대한 감별이 필요합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 202,
				name: '알러지성 피부과',
				img: img202,
				content: [
					{
						subName: '',
						subContent:
							'알러지성 피부질환은 크게 급성과 만성질환으로 나뉩니다. 급성 알러지의 경우 알러젠노출에 의해 가려움증 및 발적등의 증상이 급작스럽게 나타나는 것이 일반적입니다. 만성 알러지의 경우 피부 증상이 완치되지 않고 지속적으로 반복되는 경우가 매우 빈번하며, 알러젠을 확인하여 알러젠에 대한 노출의 빈도를 감소시키고 알러지반응을 억제하는 치료가 필요합니다. 대표적인 알러지성 질환으로 아토피 및 음식알러지가 있으며, 이 두 질환이 병발하는 경우가 많으므로 지속적으로 피부병이 반복되었다면 알러지성 피부질환 에 대한 검사 및 치료가 필요합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 203,
				name: '호르몬성 피부과',
				img: img203,
				content: [
					{
						subName: '',
						subContent:
							'호르몬성 피부질환은 일반적으로 중년에서 고령의 아이에서 나타나는 것이 일반적입니다. 대표적인 질환으로 쿠싱 (부신피질기능항진증), 갑상선기능저하증, 당뇨병 등이 있으 며 중년 및 고령의 아이들에서 매우 흔한 피부질환으로 지속적으로 진단 및 치료가 되지 않을 경우 피부질환 이외에도 전신적인 증상을 일으킬 수 있으므로 조기 진단 및 적절한 치료가 필요합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 204,
				name: '종양성 피부과',
				img: img204,
				content: [
					{
						subName: '',
						subContent:
							'피부에 덩어리가 만져질 경우 및 피부 전반에 걸쳐 미란증상이 나타날 경우 종양성 피부 질환을 의심할 수 있습니다. 덩어리가 만져지는 경우 정확한 진단을 위해 미세침흡인 세포 검사 및 조직검사를 진행하여 정확한 진단명을 찾은 후 내과적 혹은 외과적인 치료를 실시합니다. 종양의 종류에 따라 그 예후는 매우 상이하므로 조직검사를 통한 확진이 매우 중요합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
		],
	},
	{
		id: 3,
		title: '외과',
		description: '',
		subjects: [
			{
				id: 301,
				name: '정형 외과',
				img: img301,
				content: [
					{
						subName: '',
						subContent:
							'정형외과에서는 사지와 척추 및 이외의 골격계 질환에 대한 내과적, 외과적 치료를 병행하는 진료과입니다. 각종 골격의 골절에 대한 보존적 치료 및 수술적 수복을 기본으로 하여, 무릎관절, 고관절 등에 대한 정확한 평가 및 수술적 치료 및 기능 회복에 대한 치료가 시행되는 전문적인 진료 분야로, 강아지에서 호발하는 고관절 질환(LCPD Hip dysplasia), 슬개골 탈구(MPL), 전십자 인대 단열(CCLR) 등은 정확한 임상 단계의 평가 및 환자 맞춤 수술 방법의 취사 선택이 중요한 질환입니다. 본원에서는 외과 전공 전문 수의사와, 영상 의학 전공 전문 수의사의 협진으로 최상의 수술적 결과 낼 수 있도록 협진시스템이 이루어 지고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 302,
				name: '신경 외과',
				img: img302,
				content: [
					{
						subName: '',
						subContent:
							'신경외과는 뇌 질환, 척수 질환 등 신경계 질환에 대한 외과적 치료를 병행하는 진료과 입니다. 강아지에서 호발하는 후두골이형성(COMS, syringogydromyelia), 뇌수두증, 종양 및 디스크 질환(IVDD, Intervertebral disc disease)에 대한 보존적 치료 및 수술적 치료를 실시 하고 있으며, 전문가의 정확한 신경계 검사, 질환 부위의 국소화 및 첨단 영상의학 장비를 통한 수술 부위에 대한 확정 진단을 통해 술 후 회복기간을 단축 시키고, 최상의 술 후 경과를 낼 수 있도록 영상의학과와 협진이 이루어지고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 303,
				name: '흉부 외과',
				img: img303,
				content: [
					{
						subName: '',
						subContent:
							'흉부외과에서는 흉강내 발생하는 종양성 질환, 선천적 혈관 기형 질환 등에 대한 수술적 치료를 실시하는 진료과로서, 흉강 내 발생할 수 있는 폐, 가슴샘, 종격동 등의 심혈관계 질환에 대한 수술적 치료를 실시하고 있으며, 이외에 외상으로 인해 발생할 수 있는 횡격막 탈장증(Diaphragmatic hernia), 기흉(Pneumothorax) 등에 대한 수술적 치료를 실시하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 304,
				name: '일반 외과',
				img: img304,
				content: [
					{
						subName: '',
						subContent:
							'일반외과에서는 환자의 삶의 질의 향상을 위한 다양한 수술을 진행 중에 있으며, 만성 호흡 곤란을 유발하는 연구개 노장, 각종 이물 제거, 방광 결석 수술 등 다양한 범위의 수술에 대한 치료를 진행하고 있습니다. 숙련된 외과 전공자의 전문화된 최소 침습 수술을 통해 수술 후 회복 기간의 단축 및 재발 방지를 위해 최선을 다하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 305,
				name: '심혈관 외과',
				img: img305,
				content: [
					{
						subName: '',
						subContent:
							'심혈관 외과에서는 강아지 심장에서 호발하는 PDA(Patent ductus arteriosus; 동맥관 개존증), 선천성 식도 폐색 질환인 우대동맥궁잔존증(PRAA, Persistent right aor tic arch) 등과 같은 선척전 심장 혈관 기형 질환, 복강에서 발생하는 문맥관 개존증(PSS, Portosystemic shunt) 등의 질환에 대한 수술을 진행하고 있습니다. 해당 질환의 경우 혈관 분포 및 기형 형태에 따라 다양한 수술 방법을 적용하고 있으며, 수술 계획을 위해 첨단 CT 장비 및 3D Printing 기술을 활용하여 수술 안정성 확보 및 수술 성공률 향상을 위해 최선을 다하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 306,
				name: '종양 외과',
				img: img306,
				content: [
					{
						subName: '',
						subContent:
							'종양외과에서는 체표에 발생하는 피부 종양에서부터 구강, 간 종양, 비장 종양, 장 종양을 포함하는 복강 종양 및 근육 종양, 뼈종양 등 근골격계 종양성 질환에 대한 수술적 치료를 실시하고 있습니다. 종양 외과의 경우 정확한 전이 평가 및 수술 범위에 대한 설정, 수술 전후 전이 여부에 대한 재평가 등 장기적인 치료 방향의 설정이 중요한 진료 과목입니다. 본원에서는 첨단 영상 장비 및 전문화 된 조직검사 등을 통하여 종양에 대한 정확한 평가 및 정확한 수술 범위 확보를 위해 노력하고 있습니다. 또한 대학병원에 버금가는 수술장비 및 숙련된 외과 전공자의 전문화된 최소 침습 수술을 통해 술 후 회복 기간의 단축 및 재발 방지를 위해 최선을 다하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
		],
	},
	{
		id: 4,
		title: '치과',
		description: '',
		subjects: [
			{
				id: 401,
				name: '예방치과',
				img: img401,
				content: [
					{
						subName: '',
						subContent:
							'구강건강 관리의 필수요소는 정기적인 스케일링입니다. 치석은 고약한 입 냄새와 잇몸 염증을 유발하고, 잇몸 염증이 깊어지면 잇몸뼈, 치주인대가 손상되어 통증을 유발하게 됩니다. 주기적인 구강검진과 스켈링은 필수입니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 402,
				name: '구강외과',
				img: img402,
				content: [
					{
						subName: '',
						subContent:
							'구강내 발생하는 종양의 경우 악성인 경우가 많습니다. 스카이동물메디컬센터는 구강 CT촬영을통해 절제 부위의 적절한 마진을 평가해서 보다 안전하게 진행합니다. 또한 턱뼈의 병적 골절 또는 외상성 골절로 턱뼈 수복이 필요한 경우가 생기게 됩니다. 외과팀과 협진하여 수술 시 최선의 결과를 만들어 냅니다. 이 외에도 치근단 농양, 부러진 치아의 발치 등을 치료합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 403,
				name: '고양이치과',
				img: img403,
				content: [
					{
						subName: '',
						subContent:
							'고양이 치과질환중 가장 많은 케이스는 치아 흡수성 병변(FORL)과 구내염입니다.흡수성 병변의 원인은 정확히 밝혀지지는 않았으나 고양이에서 발생하는 치과질환 중 30%를 차지할 정도로 많으며 치아 뿌리 또는 크라운 부위가 흡수되는 질환입니다. 구강CT를 촬영하여 정확히 평가 후 턱뼈 손상을 최소화 하며 발치를 진행하게 됩니다. 구내염의 경우 심한 정도에 따라 치료방법과 약물이 달라질 수 있습니다. 본원에서는 적절한 약물을 사용하여 부작용을 최소화하고 치료율을 높이는데 최선을 다하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
		],
	},
	{
		id: 5,
		title: '재활의학과',
		description:
			'본원에서는 다양한 슬개골 탈구, 전십자 인대 단열 등을 포함한 관절질환, 디스크 질환, 척수 질환 등을 포함한 신경계 환자를 대상으로 다양한 재활의학방법을 통해 재활 치료를 실시하고 있으며, 효과적인 재활 치료를 위해 전문화 된 간호 인력을 양성하고 있습니다.',
		subjects: [
			{
				id: 501,
				name: '레이저 치료',
				img: img501,
				content: [
					{
						subName: '',
						subContent:
							'레이져 치료는 관절질환, 디스크 질환, 연부조직의 외상 및 염증 등 광범위하게 활용할 수 있는 물리 치료 입니다. 레이져 치료 시 해당 조직의 세포활성을 유도하여, 항염증, 통증억제 등을 유도할수 있으며, 조직 재생 효과, 염증 억제 등의 효과가 있는 것으로 알려져 있습니다. 본원에서는 정형외과 수술 환자에서 수술 부위의 회복 및 디스크 환자의 재활 치료 등의 목적으로 주기적으로 사용하고 있으며, 환자의 특성에 적합한 레이져의 강도, 진동수 등의 설정을 통해 최적의 레이져 치료를 도모하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 502,
				name: '초음파 치료',
				img: img502,
				content: [
					{
						subName: 'TENS (Transcutaneous electrical nerve stimulation)',
						subContent:
							'TENS 는 전류를 이용하여 피부의 말초 감각신경을 자극 병변부에서 발생하는 통증신호를 척수와 내뢰 전달하는 능력을 떨어뜨려, 디스크 및 관절 질환의 환자들에서 발생하는 통증을 치료하는 방법입니다.',
						subImg: '',
						extraContent: [],
					},
					{
						subName: 'NMES (Neuromuscular electrical stimulation)',
						subContent:
							'NMES 는 전기적 신호를 통해 인위적으로 근육의 수축을 유도하는 재활 치료 입니다. 일반적으로 디스크 질환등에서 자발적인 운동이 불가한 환자를 대상으로 실시하며, 이는 신경과 근육이 자발적 운동을 할 때와 동일한 효과를 이끌어 냄으로써, 마비 증상의 환자에서 불용성 근위축의 진행을 막아주는 역할을 합니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 503,
				name: '재활 운동 치료',
				img: img503,
				content: [
					{
						subName: '능동적 운동치료',
						subContent:
							'일반적인 정형외과 질환(슬개골 탈구, 십자인대, 고관절수술, 골절 수술)의 환자의 경우 능동적 운동은 가능하나, 근육 위축, 균형감각 저하, 관절의 가동범위 저하등이 파행의 주된 원인으로 작용하게 됩니다. 이러한 환자에서 위축된 근육의 재생, 관절의 가동 범위를 넓히기 위해 자발적인 운동을 유도하는 것이 향후 보행 개선에 주요한 요소로 작용하게 됩니다. 이러한 경우 통증 완화를 위한 약물 처방 및 초음파 치료를 병행하면서, 운동 시에 통증이 발생하지 않는 다는 점을 인식시켜 주는 것이 중요하며, 이를 위해 다양한 운동기구(짐볼, 피넛 짐볼, 카발레티 레일) 을 통한 운동 유도를 실시하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
					{
						subName: '수동적 운동치료',
						subContent:
							'신경계 질환은 증상의 경중에 따라 Grade를 5단계로 구분하게 됩니다. 환자가 능동적 운동이 불가한 경우 4단계 이상으로 분류하게 되는 데, 디스크 질환, 신경계 염증성 질환 및 외상에 의한 능동적 운동이 불가한 4단계 이상의 마비 증상이 발생한 환자의 경우, 자발적 운동이 불가하므로, 근위축이 빠른 시간 내에 발생하게 됩니다. 이렇게 발생한 근위축은 향후 신경회복이 이루어진 이후에도 기능적 장애의 기간을 길게 하고, 환자의 운동 능력 회복기간을 길게 만드는 요소가 됩니다. 본원에서는 이러한 기능적 장애가 있는 환자를 대상으로 수동적 관절운동, 마사지, 짐볼을 이용한 균형 운동 등을 통해 환자의 고유감각에 대한 자극, 근육 소실 예방 등을 목적으로 치료하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
		],
	},
	{
		id: 6,
		title: '영상의학과',
		description:
			'영상진단과에서는 다양한 첨단 영상의학검사장비를 이용하여 질병을 정확하게 진단하는 것을 목표로 하며, 모든 촬영과 판독이 전공자에 의해 이루어 지며, 안전한 검사를 위한 전용 마취 장비 및 모니터링 장비가 구비되어 있습니다.',
		subjects: [
			{
				id: 601,
				name: '일반 방사선 검사',
				img: img601,
				content: [
					{
						subName: '',
						subContent:
							'환자의 질병 진단에 있어 짧은 시간 내에 비침습적 전단 장비로서 다양한 정보를 제공해주는 유용한 검사방법입니다. 고해상도 Digital 방사선 장비를 통해 다양한 흉/복부 질환 및 관절, 정형 질환에서 단시간 내에 정확한 진단이 가능하며, 정확한 진단을 위한 의료영상저장전송시스템(PACS system) 을 설치하여 각 지점의 영상전공의의 면밀한 판독을 통해 진단의 정확도를 높이고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 602,
				name: '초음파 검사',
				img: img602,
				content: [
					{
						subName: '심장 초음파',
						subContent:
							'심장초음파 검사는 흉강내 심장 및 주변 대형혈관 등의 형태적, 혈류역학적 변화 양상을 정확하게 진단할수 있는 영상 장비로, 본원에서는 GE 사의 최첨단 초음파 검사 장비와 영상진단 전공자의 정확한 진단을 통해 최적의 치료가 이루어 질수 있도록 노력하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
					{
						subName: '복부 초음파',
						subContent:
							'복부 초음파 검사는 일반 방사선 검사상에서 확인이 되지 않는 실질 장기의 정확한 진단이 가능하며, 장기내 혈류 분포, 혈관내 혈류속도 등을 통해 다양한 복부 장기의 염증상 질환에서부터 종양성 질환까지 감별이 가능한 검사법입니다. 방사선상 진단이 명확하지 않은 질병등에 대한 감별 진단이 가능하며, 내부 실질장기의 평가와 더불어 초음파 유도하의 세포 흡인 검사, 흉복부의 천자 등을 진행하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 603,
				name: 'CT',
				img: img603,
				content: [
					{
						subName: '',
						subContent:
							'일반 방사선은 복강의 단면에 대한 검사가 불가한 한계를 가지고 있으며, 이러한 일반 방사선 검사의 한계를 극복하기 위한 검사법으로, 신체의 단층검사를 통하여 정확한 복강 질환의 진단이 가능한 검사법입니다. 본원에서는 16 channel 의 Muti-Detector CT 장비를 통하여 빠른 시간 및 고해상도의 영상을 최소 피폭량으로 촬영하고 있습니다. 또한 CT 촬영 전용 특수 조영 장비를 통하여 신체 내 조영제의 분포를 초단위로 구분하여 진단에 활용하고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
			{
				id: 604,
				name: 'MRI',
				img: img604,
				content: [
					{
						subName: '',
						subContent:
							'본원에서는 GE signa HDXT 를 보유하고 있으며, 해당 장비는 영상의 질을 결정하는 중요한 요소인 자장의 균질성이 뛰어나고, 강력한 경사코일, 코출력 촬영 Software 를 갖추고 있어, 뇌, 뇌혈관, 두경부, 척추, 무릎 관절 등에 대한 최상의 영상을 제공합니다.',
						subImg: '',
						extraContent: [
							{
								title: 'SKY 동물메디컬센터 MRI의 특징',
								info: [
									{
										name: '부위별 전용 코일 보유',
										content: [
											'MRI 검사는 신체의 부위에 따른 전용 코일을 사용해야 정확한 MRI 검사 및 판독이 가능합니다. 본원에서는 뇌, 척추(경추, 흉요추), 무릎 등 환자의 각 부위별 전용 코일을 사용하여 촬영의 정확성을 높이고 있습니다.',
										],
									},
									{
										name: '영상 전공의, 당일 판독',
										content: [
											'MRI 검사는 마취에서부터 촬영, 판독 등 모든 과정이 대학병원 출신의 영상진단의학 전공 수의사에 이루어지며, 검사 후 당일 영상검사의 상담은 물론 치료에 필요한 세부적인 정보를 제공하여, 치료과정의 중추적인 역할을 하고 있습니다.',
										],
									},
									{
										name: '신경계 검사와의 연관성을 고려한 정확한 진단',
										content: [
											'MRI 검사 전 신경계 검사를 통하여, 증상의 원인으로 판단되는 신경계 부위를 국소화하고, 정확한 촬영 부위의 설정을 통한 마취 시간의 감소 촬영 결과 및 신경계 검사 결과를 고려하여 정확한 진단을 실시하고 있습니다.',
										],
									},
									{
										name: '무릎 관절 MRI 검사',
										content: [
											'전십자 인대 단열에서 인대의 완절단열, 부분단열에 대한 판단, 반월판 손상 여부의 판단 등은 신체 검사만으로는 한계가 있습니다. MRI 촬영을 통해 해당 부위에 대한 정확한 손상정도를 평가하고 이에 따른 수술 계획의 설정을 통해 보다 나은 술후 경과를 기대할 수 있습니다.',
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		id: 7,
		title: '안과',
		description: '',
		subjects: [
			{
				id: 701,
				name: '안과',
				img: img701,
				content: [
					{
						subName: '',
						subContent:
							'안과 수술의 경우 정밀한 조작과 정확한 시야 확보가 중요합니다. 스카이동물메디컬센터는 첨단 안과 장비를 도입하여  세분화고 정확한 안과 진료와 수술을 하고 있습니다. 각막 궤양 또는 포도막염의 치료뿐만 아니라 홍채와 망막의 선천적 또는 노령성 변화에 따른 녹내장 및 백내장 질환의 진단 및 수술을 진행하고 있습니다. 이 외에 안구 탈출, 안검 성형술 및 체리아이 수술이 이루어지며 각막 궤양의 치료와 더불어 검판 봉합술과 다양한 결막플랩이 이용되고 있습니다. 또한 노령화된 동물이 많은 요즘 백내장 수술을 통해 눈이 다시 보일 수 있도록 도와주고, 각종 녹내장의 치료 및 수술이 이루어지고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
		],
	},
	{
		id: 8,
		title: '응급의학과',
		description: '',
		subjects: [
			{
				id: 801,
				name: '응급의학과',
				img: img801,
				content: [
					{
						subName: '',
						subContent:
							'저희 스카이메디컬센터는 아이들의 중점적인 치료를 위해 24시간 수의사 및 간호테크니션이 상주하여 입원 환자의 관리 및 응급진료에 최선을 다하고 있습니다. 응급 내원 시 아이의 상태를 신속하게 확인하여 적절한 검사 및 text 에 근거한 진단 및 치료를 실시하고 있습니다. 중환자 케어를 위해 집중치료실 (ICU: intensive care unit)을 운영하여 아이의 vital 관리에 힘쓰고 있습니다.',
						subImg: '',
						extraContent: [],
					},
				],
			},
		],
	},
	{
		id: 9,
		title: '건강검진센터',
		description: '',
		subjects: [
			{
				id: 901,
				name: '건강검진센터',
				img: img901,
				content: [
					{
						subName: '',
						subContent:
							'아무리 좋은 치료도 예방보다 좋을 수는 없습니다. 객관적인 데이터를 통해 아이의 상태를 정확하게 파악하고 증상이 나타나기 전에 관리하는 것이 중요합니다. 저희 병원에서는 첨단 장비를 활용한 건강검진 프로그램을 운영하고 있습니다.',
						subImg: '',
						extraContent: [
							{
								title: '3세 이하 프로그램',
								info: [
									{
										name: '신체검사',
										content: ['RCS 평가', '신경계 검사', '관절 운동 평가'],
									},
									{
										name: '혈액검사',
										content: [
											'전혈구 검사',
											'전해질·가스 검사',
											'혈청화학검사 17종',
										],
									},
									{
										name: '방사선검사',
										content: ['흉부방사선검사', '복부방사선검사'],
									},
									{
										name: '초음파검사',
										content: ['복부초음파검사'],
									},
								],
							},
							{
								title: '3세 - 6세 이하',
								info: [
									{
										name: '신체검사',
										content: ['BCS 평가', '신경계 검사', '관절 운동 평가'],
									},
									{
										name: '혈액검사',
										content: [
											'전혈구 검사',
											'전해질·가스 검사',
											'혈청화학검사 17종',
											'SDMA 검사',
											'proBNP(고양이)',
										],
									},
									{
										name: '방사선검사',
										content: ['흉부방사선검사', '복부방사선검사'],
									},
									{
										name: '초음파검사',
										content: ['복부초음파검사'],
									},
									{
										name: '소변검사',
										content: ['Dip스틱 검사', '뇨비중 검사'],
									},
								],
							},
							{
								title: '6세 - 10세 이하',
								info: [
									{
										name: '신체검사',
										content: ['BCS 평가', '신경계 검사', '관절 운동 평가'],
									},
									{
										name: '혈액검사',
										content: [
											'전혈구 검사',
											'전해질·가스 검사',
											'혈청화학검사 17종',
											'SDMA 검사',
											'proBNP(고양이)',
											'호르몬 검사',
										],
									},
									{
										name: '방사선검사',
										content: ['흉부방사선검사', '복부방사선검사'],
									},
									{
										name: '초음파검사',
										content: ['복부초음파검사', '심장초음파검사'],
									},
									{
										name: '소변검사',
										content: ['Dip스틱 검사', '뇨비중 검사'],
									},
								],
							},
							{
								title: '노령 프로그램',
								info: [
									{
										name: '신체검사',
										content: ['BCS 평가', '신경계 검사', '관절 운동 평가'],
									},
									{
										name: '혈액검사',
										content: [
											'전혈구 검사',
											'전해질·가스 검사',
											'혈청화학검사 17종',
											'SDMA 검사',
											'proBNP(고양이)',
											'호르몬 검사',
										],
									},
									{
										name: '방사선검사',
										contennt: ['흉부방사선검사', '복부방사선검사'],
									},
									{
										name: '초음파검사',
										content: [
											'복부초음파검사',
											'심장초음파검사',
											'안구초음파검사',
										],
									},
									{
										name: '소변검사',
										content: ['Dip스틱 검사', '뇨비중 검사', 'UPC검사'],
									},
								],
							},
							{
								title: '선택심화검사',
								info: [
									{
										name: '신체검사',
										content: [
											'알러지검사',
											'췌장기능검사',
											'수면내시경 검사',
											'수면CT/MRI 검사',
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

export default subjectInfo;
