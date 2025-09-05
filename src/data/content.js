export const projects = [
    {
      title: "Enterprise AI/ML Backend Platform 구축",
      role: "Technical Lead & Full-Stack Developer",
      period: "2023-Present",
      description: "제조업 도메인의 복잡한 엔지니어링 문제를 AI/ML로 해결하는 통합 백엔드 플랫폼을 설계하고 구축했습니다.",
      details: {
        description: [
          "문제: 반복적인 엔지니어링 해석 작업으로 인한 개발 리드타임 증가와 QA 시험 비용 부담",
          "솔루션: AI/ML 기반 예측 모델과 완전 자동화된 백엔드 시스템으로 해결",
          "결과: 해석 시간 90% 단축, QA 시험 비용 70% 절감, 조직 전체 확산"
        ],
        achievements: [
          "FastAPI 기반 마이크로서비스 아키텍처 설계 및 구현",
          "Physics-Informed Neural Networks(PINNs) 활용한 합성데이터 생성 시스템",
          "실시간 대시보드와 RESTful API 개발 (D3.js, Next.js)",
          "Multi-database 연동 시스템 (MongoDB, MariaDB, SQLite, MinIO)",
          "배치 처리 시스템과 SSH 기반 HPC 클러스터 연동",
          "95% 이상 정확도의 ML 앙상블 모델 서빙",
          "CI/CD 파이프라인과 자동화된 데이터 ETL 프로세스"
        ],
        technologies: [
          "Backend: FastAPI, Python, RESTful API",
          "Frontend: Next.js, React, D3.js", 
          "Database: MongoDB, MariaDB, SQLite, MinIO",
          "AI/ML: PyTorch, Scikit-learn, PINNs, 앙상블 모델",
          "Infrastructure: SSH, HPC, Jenkins, Docker",
          "Data: ETL Pipeline, 실시간 처리, 배치 시스템"
        ],
        impact: [
          "연간 QA 시험 비용 70% 절감 (약 2억원 규모)",
          "해석 작업 시간 90% 단축 (2주 → 2시간)",
          "조직 전체 생산성 향상으로 CDS(Citizen Data Scientist) 달성",
          "본부 산하 전 조직(500+ 엔지니어)에서 활용하는 핵심 플랫폼으로 성장"
        ]
      }
    },
    {
      title: "지속적 ML/DL 역량 강화 및 기술 트렌드 캐치업",
      role: "Self-Directed Learner & Competitive Programmer",
      period: "2022-Present", 
      description: "업무 외 시간을 활용해 Kaggle, Dacon 등에서 꾸준히 경쟁하며 최신 ML/DL 기술을 실무에 빠르게 적용하는 능력을 증명했습니다.",
      details: {
        description: [
          "목표: 빠르게 변화하는 AI/ML 기술 트렌드를 실무에 적용할 수 있는 역량 확보",
          "방법: 실제 대회 데이터로 이론과 실무를 연결하는 학습",
          "성과: 평균 상위 15% 성적으로 검증된 ML/DL 실력"
        ],
        achievements: [
          "10+ 대회 참가, 평균 상위 15% 달성으로 검증된 ML 역량",
          "새로운 알고리즘/기법을 실무 프로젝트에 빠르게 적용하는 능력 실증",
          "대회에서 습득한 앙상블, 특성공학 기법을 실제 업무에 성공적으로 전이",
          "지속적 학습을 통해 제조업 도메인에 최신 AI 기술 도입 주도"
        ],
        technologies: [
          "ML Frameworks: Scikit-learn, XGBoost, LightGBM",
          "DL Frameworks: PyTorch, TensorFlow, Keras",
          "Data Engineering: Pandas, NumPy, Feature Engineering",
          "Advanced: 앙상블 기법, 시계열 분석, AutoML"
        ],
        impact: [
          "새로운 기술을 빠르게 습득하여 업무 효율성 향상",
          "최신 ML 기법을 조직에 도입하여 기술 리더십 발휘",
          "동료들에게 ML 기술 전파 및 조직 역량 향상에 기여"
        ]
      }
    },
    {
      title: "Production ML Model 서빙 시스템 구축 및 운영",
      role: "ML Engineer & Backend Developer",
      period: "2024.03 - 2025.06",
      description: "대규모 시뮬레이션 데이터(6,000+ samples)를 활용한 앙상블 ML 모델을 프로덕션 환경에 서빙하고 지속적으로 운영하는 시스템을 구축했습니다.",
      details: {
        description: [
          "문제: 물리적 제품 테스트의 높은 비용과 긴 리드타임",
          "솔루션: 대규모 시뮬레이션 데이터 기반 ML 모델로 가상 검증 체계 구축",
          "결과: 물리적 테스트 대체를 통한 개발 프로세스 혁신"
        ],
        achievements: [
          "6,000+ 샘플의 고차원 시뮬레이션 데이터 파이프라인 구축",
          "2-stage 앙상블 모델 설계 및 하이퍼파라미터 최적화",
          "실시간 모델 추론 API 개발 (FastAPI + 비동기 처리)",
          "모델 성능 모니터링 및 drift detection 시스템 구현",
          "추론 응답 시간 99th percentile 500ms 이하 달성",
          "A/B 테스트를 통한 모델 성능 검증 및 개선"
        ],
        technologies: [
          "Backend: FastAPI, Python, Asyncio",
          "ML: Scikit-learn, XGBoost, Ensemble Methods",
          "Data: Pandas, NumPy, Data Validation",
          "Monitoring: 모델 성능 추적, 로깅 시스템",
          "Testing: A/B Testing, 상관성 검증"
        ],
        impact: [
          "물리적 테스트 비용 80% 절감",
          "검증 시간 2주 → 2분으로 단축",
          "예측 정확도 95% 이상 달성 및 지속 유지",
          "QA팀과의 협업으로 완전 가상 검증 프로세스 구축"
        ]
      }
    },
    {
      title: "기계공학에서 소프트웨어 엔지니어링으로의 성공적 전환",
      role: "Self-Taught Developer & Technology Adapter",
      period: "2019-Present",
      description: "기계공학 전공에서 시작해 5년간 독학으로 Python, Web 개발, AI/ML을 습득하여 실제 프로덕션 시스템을 구축하고 운영하는 수준까지 성장했습니다.",
      details: {
        description: [
          "도전: 전공 분야(기계공학)에서 완전히 다른 분야(소프트웨어)로의 전환",
          "전략: 실무 문제 해결을 통한 실전 중심 학습과 지속적 기술 습득",
          "성과: 조직의 DX 리더로 성장하며 대규모 시스템 구축 주도"
        ],
        achievements: [
          "단계별 기술 스택 확장: CAD → Python → AI/ML → Web → Backend Architecture",
          "체계적 자기학습: 온라인 코스, 기술 서적, 실습 프로젝트 병행",
          "실무 적용: 배운 기술을 즉시 업무에 적용하여 실전 경험 축적",
          "검증된 성과: 개인 학습이 조직 전체의 디지털 혁신으로 확산",
          "지식 전파: 동료들에게 기술 교육 및 멘토링 제공",
          "지속적 성장: 새로운 기술 트렌드를 빠르게 캐치업하는 학습 루틴 구축"
        ],
        technologies: [
          "Programming: Python, JavaScript/TypeScript",
          "Web Development: React, Next.js, FastAPI, RESTful API",
          "Database: MongoDB, SQL, 데이터 모델링",
          "AI/ML: 기초 통계 → 고급 ML/DL 알고리즘",
          "DevOps: Docker, CI/CD, 시스템 아키텍처 설계"
        ],
        impact: [
          "5년만에 기계공학 엔지니어에서 풀스택 개발자/ML 엔지니어로 성장",
          "조직 내 DX 확산 리더로 인정받아 CDS(Citizen Data Scientist) 달성",
          "빠른 적응력과 학습 능력으로 새로운 기술 도메인에서의 성공 가능성 입증",
          "동료들의 기술 전환 롤모델이 되어 조직 전체 역량 향상에 기여"
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
      "A/B Testing, 실험 설계"
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
      "Kaggle/Dacon 경진대회 (상위 15%)",
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
      period: "2019 ~ 2022",
      role: "LG전자 LCM 개발팀",
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