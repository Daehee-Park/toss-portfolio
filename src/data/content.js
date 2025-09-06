export const projects = [
    {
      title: "TV 스탠드 안정성 예측 ML 모델 서빙 시스템",
      role: "ML Engineer & Backend Developer",
      period: "2022.03 - 2024.06",
      description: "대용량 시뮬레이션 데이터를 활용한 앙상블 ML 모델을 개발하고 FastAPI로 서빙하여 물리적 안정성 시험을 완전 가상화했습니다.",
      details: {
        description: [
          "기술적 도전: 6개 안정성 항목을 90% 이상 정확도로 예측하는 ML 모델 개발 및 실시간 서빙",
          "학습한 기술: PINNs(Physics-Informed Neural Networks), 몬테카를로 시뮬레이션, 스태킹 앙상블, FastAPI 비동기 처리",
          "해결 과정: 실측 데이터 수집 → 합성데이터 생성 → 다단계 앙상블 모델 개발 → FastAPI 서빙 → QA팀 검증"
        ],
        achievements: [
          "PINNs와 몬테카를로 시뮬레이션으로 실측 1,000개 → 30,000개 합성데이터 생성",
          "3단계 스태킹 앙상블 모델 설계 (1차: XGBoost+LightGBM+DNN, 2차: CatBoost, 3차: Stacking)",
          "FastAPI + 비동기 처리로 실시간 예측 API 구현 (응답시간 < 300ms)",
          "기존 시험 방법 대비 정확도 검증",
          "Next.js 프론트엔드와 연동한 사용자 친화적 예측 인터페이스"
        ],
        technologies: [
          "ML: Scikit-learn, XGBoost, LightGBM, CatBoost",
          "DL: PyTorch, PINNs, Neural Networks",
          "Backend: FastAPI, Python, Asyncio",
          "Data: Pandas, NumPy, 몬테카를로 시뮬레이션",
          "Frontend: Next.js, D3.js (시각화)",
          "Database: MariaDB, MongoDB"
        ],
        impact: [
          "물리적 안정성 시험 비용 100% 절감 (실물 TV Set 불필요)",
          "시험 시간 3일 → 1분으로 99% 단축",
          "예측 정확도 92.3% 달성 (기존 시험 대비 오차 7.7%)",
          "QA팀과 협업으로 업계 최초 완전 가상 검증 프로세스 구축",
          "월 평균 150+ 예측 수행으로 개발 속도 대폭 향상"
        ]
      }
    },
    {
      title: "Ray Casting 기반 Press 부품 해석 자동화 백엔드 시스템",
      role: "Backend Lead Developer & System Architect", 
      period: "2023.06 - 2025.02",
      description: "CAD 파일 업로드만으로 전체 구조해석 과정을 자동화하는 FastAPI 기반 백엔드 시스템을 설계하고 구축했습니다.",
      details: {
        description: [
          "기술적 도전: 복잡한 CAD 형상을 자동으로 인식하여 해석 메쉬를 생성하고 조건을 설정하는 시스템 구축",
          "학습한 기술: Ray Casting 알고리즘, Hypermesh API, 비동기 작업 큐, 파일 스토리지 시스템",
          "해결 과정: 3D 형상 분석 알고리즘 구현 → API 서버 설계 → 데이터베이스 스키마 설계 → 프론트엔드 연동"
        ],
        achievements: [
          "FastAPI로 비동기 작업 큐 시스템 설계 및 구현",
          "Ray Casting 알고리즘을 활용한 3D CAD 형상 자동 인식 시스템 개발", 
          "MongoDB를 활용한 해석 진행 상황 실시간 추적 시스템",
          "MinIO 기반 대용량 파일(CAD, 결과) 스토리지 관리 시스템",
          "RESTful API 설계로 프론트엔드와 해석 엔진 간 데이터 교환",
          "Docker 컨테이너화 및 HPC 클러스터 배포"
        ],
        technologies: [
          "Backend: FastAPI, Python",
          "Database: MongoDB",
          "Storage: MinIO (Object Storage)",
          "3D Processing: Ray Casting, Hypermesh API",
          "Infrastructure: Docker, HPC SSH 연동",
          "API: RESTful API"
        ],
        impact: [
          "해석 전처리 시간 95% 단축 (8시간 → 20분)",
          "사용자 오류율 80% 감소 (자동화로 인한 일관성 확보)",
          "월 평균 200+ 해석 작업 자동 처리",
          "해석 전문 지식 없는 설계자도 독립적 해석 수행 가능"
        ]
      }
    },
    {
      title: "통합 물성 데이터베이스 및 RESTful API 시스템",
      role: "Backend Developer & Database Architect",
      period: "2024.09 - 2025.05",
      description: "MS사업본부 전체가 사용하는 통합 물성 데이터베이스를 설계하고, Solver 연동 API까지 포함한 완전한 백엔드 시스템을 구축했습니다.",
      details: {
        description: [
          "기술적 도전: 다양한 물성 데이터 타입과 복잡한 Stress-Strain 곡선을 효율적으로 저장하고 검색할 수 있는 DB 스키마 설계",
          "학습한 기술: 관계형 DB 설계, 수치 해석 알고리즘, FastAPI, 데이터 검증, 통계적 데이터 처리",
          "해결 과정: 요구사항 분석 → ERD 설계 → API 명세 작성 → FastAPI 구현 → Solver 연동 테스트"
        ],
        achievements: [
          "MariaDB 기반 정규화된 물성 데이터베이스 스키마 설계 및 구현",
          "Raw Stress-Strain 곡선에서 대표 곡선 추출하는 통계 알고리즘 개발",
          "FastAPI 기반 RESTful API 개발 (CRUD + 고급 검색 기능)",
          "LS-DYNA/Optistruct Solver Card 자동 생성 API 엔드포인트 구현",
          "Swagger UI를 활용한 API 문서화 및 테스트 환경 제공"
        ],
        technologies: [
          "Backend: FastAPI, Python, Pydantic",
          "Database: MongoDB",
          "Data Processing: NumPy, SciPy, 통계 분석",
          "API: RESTful API, Swagger/OpenAPI",
          "Integration: Solver Card 생성, 파일 처리"
        ],
        impact: [
          "본부 산하 전 조직(500+ 엔지니어)에서 일일 평균 100+ 조회",
          "물성 데이터 검색 시간 90% 단축 (수동 검색 1시간 → API 조회 5분)",
          "Solver Card 생성 자동화로 설정 오류율 95% 감소",
          "데이터 표준화로 조직 간 일관성 확보 및 품질 향상",
          "API 기반 확장성 확보로 향후 AI/ML 연동 기반 마련"
        ]
      }
    },
    {
      title: "HPC 연동 방열해석 자동화 시스템",
      role: "DevOps Engineer & System Integrator",
      period: "2024.09 - 2025.09",
      description: "CelsiusEC API와 SSH 통신을 활용하여 HPC 클러스터와 연동된 완전 자동화 방열해석 시스템을 구축했습니다.",
      details: {
        description: [
          "기술적 도전: 외부 해석 소프트웨어(CelsiusEC)를 API로 제어하고 HPC 클러스터에서 원격 실행하는 자동화 시스템",
          "학습한 기술: SSH 프로토콜, HPC 작업 스케줄링, 외부 API 통합, 파일 시스템 동기화, 상태 모니터링",
          "해결 과정: CelsiusEC API 분석 → SSH 연결 안정화 → 작업 큐 시스템 구현 → 모니터링 시스템 구축"
        ],
        achievements: [
          "CelsiusEC API + FastAPI + HPC SSH 통신 통합 시스템 구축",
          "비동기 작업 큐로 다중 해석 작업 병렬 처리 시스템 구현",
          "HPC 클러스터 자원 상태 모니터링 및 작업 스케줄링 최적화",
          "파일 동기화 시스템으로 로컬-HPC 간 데이터 자동 전송",
          "실시간 온도 Contour 시각화 및 센서 데이터 추출 자동화",
        ],
        technologies: [
          "Integration: CelsiusEC API, SSH Protocol",
          "Backend: FastAPI, Python, Asyncio",
          "Infrastructure: HPC 클러스터, Job Scheduling",
          "Monitoring: 시스템 상태 추적, 로그 관리",
          "Data: 파일 동기화, 결과 파싱",
          "Visualization: 온도 Contour, 센서 테이블블"
        ],
        impact: [
          "방열해석 전체 과정 완전 무인화 달성 (사람 개입 0%)",
          "해석 처리량 200% 향상 (병렬 처리로 동시 2개 작업)",
          "해석자 업무 시간 90% 절약 (설정/모니터링 자동화)",
          "연간 방열해석 100+ 건 자동 처리",
        ]
      }
    },
];

export const technicalExpertise = {
    "Backend Development": [
      "Python, FastAPI",
      "RESTful API 설계 및 구현",
      "마이크로서비스 아키텍처",
      "비동기 처리 (Asyncio)",
      "Docker, CI/CD"
    ],
    "AI/ML Engineering": [
      "PyTorch, TensorFlow, Keras",
      "Scikit-learn, XGBoost, LightGBM", 
      "앙상블 모델링 및 하이퍼파라미터 최적화",
      "PINNs (Physics-Informed Neural Networks)",
      "모델 서빙 및 성능 모니터링",
      "실험 설계(DoE), Monte-Carlo"
    ],
    "Database & Data Engineering": [
      "MongoDB, MariaDB, SQLite, PostgreSQL",
      "MinIO (Object Storage)",
      "ETL Pipeline 구축",
      "대용량 데이터 처리",
      "데이터 검증 및 품질 관리"
    ],
    "Frontend & Visualization": [
      "Next.js, React, TypeScript",
      "D3.js (데이터 시각화)",
      "Interactive Dashboard 개발",
      "Responsive UI/UX 설계"
    ],
    "Infrastructure & DevOps": [
      "SSH 기반 HPC 클러스터 연동",
      "Jenkins, 배치 처리 시스템",
      "시스템 모니터링 및 로깅",
      "성능 최적화 및 튜닝"
    ],
    "Problem Solving & Learning": [
      "Kaggle/Dacon 경진대회",
      "새로운 기술 스택 빠른 습득",
      "복잡한 비즈니스 문제 해결",
      "크로스 도메인 지식 융합"
    ]
}

export const careerHistory = [
    {
      period: "2023 ~ Present",
      role: "LG전자 TV CAE팀",
      description: "DX 확산 리더 | AI/ML Backend Platform 구축 및 운영 총괄"
    },
    {
      period: "2022 ~ 2023",
      role: "LG전자 TV CAE팀",
      description: "Python 기반 자동화 시스템 개발 | ML 역량 강화"
    },
    {
      period: "2019 ~ 2021",
      role: "LG전자 LCM/기구구 개발팀",
      description: "제품 개발 | 기계공학에서 소프트웨어로의 전환 시작"
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