export const projects = [
    {
      title: "8K QNED(MiniLED) TV 개발 프로젝트",
      role: "TV 기구/모듈 설계 및 개발",
      period: "2019-2021",
      description: "세계 최초 8K QNED TV 개발 프로젝트를 주도하며, 초기 콘셉트부터 양산까지 전 과정에 참여했습니다.",
      details: {
        description: [
          "세계 최초 8K QNED TV 개발 프로젝트 주도",
          "초기 콘셉트부터 양산까지 전 과정 참여",
          "중국/멕시코 현지 공장 기술 지원"
        ],
        achievements: [
          "Press/압출/사출 부품 구조설계 및 최적화",
          "MiniLED 모듈 진동/낙하 문제 해결 솔루션 개발",
          "현지 생산라인 외관 hairline 공정 이슈 해결",
          "ISTA6 기준 낙하시험 검증 및 Packing 설계 최적화"
        ],
        technologies: [
          "Creo (기구설계)",
          "Abaqus (구조해석)",
          "ISTA6 Testing Standards"
        ]
      }
    },
    {
      title: "무선TV 스탠드 구조 강성 개선 프로젝트",
      role: "구조해석 및 최적화 리드",
      period: "2022",
      description: "One Connect Box 탑재를 위한 중공 스탠드 구조 최적화를 통해 중량 12% 감소, 강성 20% 향상을 달성했습니다.",
      details: {
        description: [
          "One Connect Box 탑재를 위한 중공 스탠드 구조 최적화",
          "10개 이상 설계 변수에 대한 최적화 수행",
          "디자인 가이드라인 준수 및 구조 안정성 확보"
        ],
        achievements: [
          "중량 12% 감소, 강성 20% 향상 달성",
          "Parametric design 및 DoE 해석 수행",
          "최적 설계안 도출 및 양산 적용"
        ],
        technologies: [
          "Optistruct, Abaqus (구조해석)",
          "Design of Experiments (DoE)",
          "Parametric Design"
        ]
      }
    },
    {
      title: "DX주도 웹기반 예측/자동화 해석 프로젝트",
      role: "프로젝트 총괄 리드",
      period: "2023-Present",
      description: "구조해석/다물체동역학 프로세스 자동화 시스템을 구축하여 해석 시간 90% 단축 및 QA 시험의 가상 검증화를 실현했습니다.",
      details: {
        description: [
          "구조해석/다물체동역학 프로세스 자동화 시스템 설계 및 구축",
          "웹 기반 해석 플랫폼 개발",
          "AI/ML 기반 예측 모델 개발"
        ],
        achievements: [
          "Press 부품 nonlinear shell static 해석 자동화",
          "해석 시간 90% 단축",
          "PINNs 기술 활용한 몬테카를로 시뮬레이션 기반 합성데이터 생성",
          "TV 스탠드 안정성 예측 모델 개발 (정확도 95% 이상)",
          "QA 시험의 가상 검증화 실현"
        ],
        technologies: [
          "Frontend: Next.js, D3.js",
          "Backend: FastAPI",
          "Database: MongoDB, SQLite, MariaDB, MinIO",
          "AI/ML: Python, PINNs, 몬테카를로 시뮬레이션",
          "CAE: Abaqus, Optistruct"
        ],
        impact: [
          "제품 개발 프로세스 효율성 대폭 향상",
          "QA 시험 비용 및 시간 절감",
          "데이터 기반 의사결정 체계 구축"
        ]
      }
    },
    {
      title: "데이터 분석 및 예측모델 경진대회 참가",
      role: "데이터 사이언티스트",
      period: "2022-Present",
      description: "Kaggle, Dacon 등 데이터 분석 및 예측모델 경진대회 지속 참여, 평균 상위 15% 성적 기록하며 실무 역량 강화",
      details: {
        description: [
          "Kaggle, Dacon 등 데이터 분석 대회 꾸준히 참여",
          "약 10개 대회 참가, 평균 상위 15% 성적 기록",
          "실무 적용을 위한 회귀, 분류 모델 대회 주로 참여"
        ],
        achievements: [
          "실제 비즈니스 환경에 적용 가능한 ML/DL 솔루션 개발 역량 강화",
          "다양한 데이터셋과 문제에 대한 경험 축적",
          "최신 AI/ML 기술 트렌드 습득 및 적용"
        ],
        technologies: [
          "Python (Scikit-learn, PyTorch, TensorFlow)",
          "데이터 전처리 및 특성 공학",
          "앙상블 기법",
          "시계열 분석"
        ]
      }
    },
    {
      title: "TV 벽걸이 Auto Tilt 현상 모사 해석 및 예측모델 개발",
      role: "해석 기술/예측모델 개발 리드",
      period: "2024.03 - 2025.06",
      description: "Recurdyn 기반 MBD 모델과 DoE batch 해석으로 6,000건 데이터 축적, 2차 앙상블 예측모델로 벽걸이 안정성 가상 검증 체계 구축",
      details: {
        description: [
          "작동력 1000회 cycle 평균 작동력을 push gauge로 측정하여 Recurdyn에서 구현",
          "TV Head 무게, VESA 포인트, COG 변수 반영 DoE 기반 batch 해석",
          "약 6,000건 DoE 데이터로 2차 앙상블 예측모델 개발",
          "가상 검증으로 벽걸이 안정성 시험 대체"
        ],
        achievements: [
          "실측-해석 상관 확보로 모델 신뢰도 확보",
          "변수 민감도 분석을 통한 설계 가이드 제시",
          "예측 모델 기반 사전 검증 프로세스 구축"
        ],
        technologies: [
          "Recurdyn (MBD)",
          "DoE / Batch Simulation",
          "Python, ML Ensemble",
          "Push Gauge 측정"
        ],
        impact: [
          "현장 시험 대체로 리드타임·비용 절감",
          "신뢰성 예측 정확도 향상 및 표준화 기반 마련"
        ]
      }
    },
    {
      title: "Cover Bottom Snap-Through Buckling 모사 해석기술 개발",
      role: "해석기술 개발",
      period: "2025.04 - 2025.08",
      description: "Nonlinear Static - Buckling mode 기반 강제변위 시 작동력 감소 구간을 재현하여 자동화 공정 이슈 해결",
      details: {
        description: [
          "특정 Cover Bottom 자동화 bolt 체결 공정 중 Snap Through 문제 재현",
          "Nonlinear Static - Buckling mode 기반 강제변위 인가로 임계/감소 구간 확인"
        ],
        achievements: [
          "문제 메커니즘 규명 및 임계 구간 도출",
          "설계/공정 개선 가이드 제시로 이슈 해소"
        ],
        technologies: [
          "Abaqus (Nonlinear Static, Buckling)",
          "Hypermesh (전처리)",
          "실험-해석 상관 검증"
        ],
        impact: [
          "자동화 공정 안정성 향상 및 불량률 감소"
        ]
      }
    },
];

export const technicalExpertise = {
    "CAD/설계": [
      "Creo 9.0",
      "Autodesk Inventor"
    ],
    "기구 CAE (선행해석기술파트)": [
      "Hypermesh (상급)",
      "Simlab (상급)", 
      "Lsdyna (상급)",
      "Optistruct (상급)",
      "Abaqus (중급)",
      "Recurdyn MBD (중급)",
      "Moldflow (초급)",
      "Star CCM+ (초급)",
      "CelsiusEC (구 6SigmaET, 초급)"
    ],
    "웹 개발": [
      "Docker",
      "Next.js",
      "React",
      "FastAPI (Python Backend)",
      "MongoDB/SQLite/MariaDB",
      "MinIO"
    ],
    "데이터 엔지니어링": [
      "PyTorch",
      "TensorFlow",
      "Keras", 
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "Kaggle/Dacon 대회 다수 참가"
    ],
    "전문 해석 기술": [
      "PINNs (Physics-Informed Neural Networks)",
      "몬테카를로 시뮬레이션",
      "합성데이터 생성 및 활용",
      "DoE (Design of Experiments)",
      "Creep 해석 (Abaqus 기반)",
      "Buckling/Snap-Through 해석"
    ]
}

export const careerHistory = [
    {
      period: "2023 ~ Present",
      role: "LG전자 TV CAE팀",
      description: "DX 확산 리더 (CDS: Citizen Data Scientist 달성)"
    },
    {
      period: "2022 ~ 2023",
      role: "LG전자 TV CAE팀",
      description: "구조 강성 및 낙하 FEM 해석"
    },
    {
      period: "2019 ~ 2021",
      role: "LG전자 LCM 개발팀",
      description: "TV 기구/모듈 설계 개발"
    }
]

export const certificates = [
    {
      name: "ADSP (데이터분석 준전문가)",
      issuer: "한국데이터산업진흥원",
      date: "2023"
    },
    {
      name: "Google Data Analytics",
      issuer: "Google",
      date: "2024"
    },
    {
      name: "일반기계기사",
      issuer: "한국산업인력공단",
      date: "2020"
    }
  ];

export const education = {
  university: "인하대학교",
  degree: "기계공학 학사",
  year: "2019"
};

export const contactInfo = {
  email: '400yad@gmail.com',
  phone: '+82 10 7709 7326'
};

export const handleCopyEmail = async (setCopySuccess) => {
  try {
    await navigator.clipboard.writeText(contactInfo.email);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};