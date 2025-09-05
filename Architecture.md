# Portfolio Structure

## 1. Main Section (Hero Section)
- Name: 박대희
- Title: 구조해석과 디지털 혁신을 통한 제품 개발 전문가
- Current: LG Electronics TV CAE Team | DX 확산 리더

## 2. About Me
### Personal Info
- Birth: 1994
- Education: 인하대학교 기계공학과 (학사, 2019)

### Career Timeline
- 2024 ~ Present: LG전자 TV CAE팀 - DX 확산 리더 (CDS: Citizen Data Scientist 달성)
- 2023 ~ 2024: LG전자 TV CAE팀 - 구조 강성 및 낙하 FEM 해석
- 2019 ~ 2022: LG전자 LCM 개발팀 - TV 기구/모듈 설계 개발

### Technical Expertise
1. 기구해석/설계
   - Creo
   - Hypermesh
   - Optistruct
   - Abaqus
   - LSDYNA
   - Recurdyn (MBD)
   - Moldflow
   - StarCCM

2. 디지털 솔루션
   - Next.js, Svelte
   - FastAPI
   - MongoDB/SQLite/MariaDB/PostgreSQL
   - MinIO

3. AI/ML
   - Machine Learning
   - Deep Learning
   - PINNs
   - 합성데이터 생성 및 활용
   - 회귀/분류 모델링

4. 기타 보유 기술
   - 피로해석: FEMFAT (초급)
   - Creep 해석: Abaqus 기반 power law
   - Polymer 저온 creep 산학 과제
   - 물성 데이터 분석 및 모델링
   - 제조업 도메인 데이터 기반 D3.js 대시보드드

## 3. Projects

### TV 벽걸이 Auto Tilt 현상 모사 해석 및 예측모델 개발 (2024.03 - 2025.06)
#### Role: 해석 기술/예측모델 개발 리드

#### Description
- 작동력 1000회 cycle 평균 작동력을 push gauge로 측정하여 MBD Tool(Recurdyn)에서 구현
- TV Head의 무게, VESA 포인트, COG 등 변수를 반영한 DoE 기반 batch 해석 수행
- 약 6,000건 DoE 데이터로 2차 앙상블 예측모델 개발
- 가상 검증으로 벽걸이 안정성 시험 대체

#### Key Achievements
- 실측 데이터로 해석 모델 보정 및 신뢰도 확보
- 변수 민감도 분석을 통한 설계 가이드 제시
- 예측 모델 기반 사전 검증 프로세스 구축

#### Technologies Used
- Recurdyn (MBD)
- DoE / Batch Simulation
- Python, ML Ensemble
- 측정장비: Push Gauge

#### Impact
- 현장 시험 대체로 리드타임·비용 절감
- 벽걸이 신뢰성 예측 정확도 향상 및 표준화 기반 마련

### Cover Bottom Snap-Through Buckling 모사 해석기술 개발 (2025.04 - 2025.08)
#### Role: 해석기술 개발

#### Description
- 특정 Cover Bottom에서 자동화 bolt 체결 공정 중 Snap Through 현상 발생 문제 해결을 위한 해석기술 개발
- Nonlinear Static - Buckling mode 기반 강제변위 인가로 작동력 감소 구간 재현

#### Key Achievements
- 문제 발생 메커니즘 규명 및 임계 구간 도출
- 설계/공정 개선 가이드라인 제시로 이슈 해소

#### Technologies Used
- Abaqus (Nonlinear Static, Buckling)
- Hypermesh (전처리)
- 상관성 검증(실험-해석)

#### Impact
- 자동화 공정 안정성 향상 및 불량률 감소

### 8K QNED(MiniLED) TV 개발 프로젝트 (2019-2021)
#### Role: TV 기구/모듈 설계 및 개발

#### Description
- 세계 최초 8K QNED TV 개발 프로젝트 주도
- 초기 콘셉트부터 양산까지 전 과정 참여
- 중국/멕시코 현지 공장 기술 지원

#### Key Achievements
- Press/압출/사출 부품 구조설계 및 최적화
- MiniLED 모듈 진동/낙하 문제 해결 솔루션 개발
- 현지 생산라인 외관 hairline 공정 이슈 해결
- ISTA6 기준 낙하시험 검증 및 Packing 설계 최적화

#### Technologies Used
- Creo (기구설계)
- Abaqus (구조해석)
- ISTA6 Testing Standards

### 무선TV 스탠드 구조 강성 개선 프로젝트 (2022)
#### Role: 구조해석 및 최적화 리드

#### Description
- One Connect Box 탑재를 위한 중공 스탠드 구조 최적화
- 10개 이상 설계 변수에 대한 최적화 수행
- 디자인 가이드라인 준수 및 구조 안정성 확보

#### Key Achievements
- 중량 12% 감소, 강성 20% 향상 달성
- Parametric design 및 DoE 해석 수행
- 최적 설계안 도출 및 양산 적용

#### Technologies Used
- Optistruct, Abaqus (구조해석)
- Design of Experiments (DoE)
- Parametric Design

### DX주도 웹기반 예측/자동화 해석 프로젝트 (2023-Present)
#### Role: 프로젝트 총괄 리드

#### Description
- 구조해석/다물체동역학 프로세스 자동화 시스템 설계 및 구축
- 웹 기반 해석 플랫폼 개발
- AI/ML 기반 예측 모델 개발
- 물성 데이터 추출/적재/변환 기능 개발
- 구조/충격/방열/ 해석 데이터 및 물성 데이터 기반의 대시보드 개발
- 해석 의뢰 기능 개발

#### Key Achievements

##### 1. Ray Casting 기술 응용 Press 부품 해석 자동화 시스템
- **자동화 파이프라인 구축**: End-user가 CAD File만 업로드하면 전체 해석 프로세스 자동 실행
- **데이터 처리 자동화**: 필요 데이터 자동 추출 및 진행 상황 log DB 적재
- **전처리 완전 자동화**: Hypermesh와 Ray Casting 기술을 활용한 해석 전처리 풀 자동화
- **결과 관리**: 해석 input/결과 파일 스토리지 적재 및 Contour 결과 제공
- **적용 범위**: Nonlinear shell static 해석 전 과정 자동화

##### 2. TV 스탠드 안정성 시험 예측모델 개발 및 배포
- **합성데이터 생성**: PINNs 기술과 몬테카를로 시뮬레이션을 활용한 실측 데이터 기반 합성데이터 생성
- **다단계 앙상블 모델 개발**:
  - 1차: 트리/부스팅 계열 ML + DL 모델
  - 2차: 부스팅 ML 모델  
  - 3차: 스태킹 앙상블 모델
- **높은 신뢰도 확보**: 90% 이상의 예측 정확도 달성
- **웹 서비스 배포**: FastAPI 백엔드 기반 예측모델 웹 서비스 구축
- **사용자 편의성**: 초기 컨셉 sketch의 좌표값만으로 안정성 시험 6개 항목 예측 가능
- **업무 혁신**: QA팀과 협업하여 시험의 완전 가상검증화 실현

##### 3. 통합 물성 데이터베이스 및 Curve 추출 시스템
- **통합 데이터베이스 구축**: MS사업본부 통합 물성 데이터베이스 개발
  - 기본 물성: modulus, yield stress, failure point 등
  - CAE용 tensile stress-strain curve 저장
- **대표 Curve 추출 기능**: 
  - 다수의 raw tension s-s curve로부터 하나의 대표 CAE s-s curve 추출
  - Offset 및 regression method 활용으로 non-negative slope 보장
- **Solver 연동**: 데이터베이스에서 LS-DYNA/Optistruct Solver Card 직접 추출 기능
- **조직 전체 활용**: 본부 산하 모든 조직에서 활용 중

##### 4. 데이터 기반 인터랙티브 대시보드 개발
- **D3.js 기반 대시보드**: 해석 데이터 기반 시각화 시스템 구축
- **다차원 분석 기능**:
  - 모델별/부품별 데이터 기반 특이점 및 인사이트 도출
  - 물성의 vendor별, 보충재별 강도 비교
  - Stress-strain curve 비교 분석
- **인터랙티브 기능**: 여러 물성값 실시간 비교 가능한 대화형 인터페이스

##### 5. 자체 해석 의뢰 시스템 개발
- **기존 시스템 한계 극복**: Dassault SPDM 대비 비용 효율성 및 커스터마이징 가능성 확보
- **국제 협업**: 베트남 외주개발 업체(FPT)와 협업 개발
- **핵심 기능 구현**:
  - 결재 시스템 연동
  - DB 및 스토리지 자동 적재
  - 해석 결과에서 특정 parameter 자동 추출 및 적재
- **전사 확산**: 본부 산하 모든 조직에서 활용 중

##### 6. CelsiusEC 활용 TV Set 방열/냉각 해석 자동화
- **완전 자동화 시스템 구축**: CelsiusEC API + FastAPI + HPC SSH 통신을 활용한 해석 풀 자동화
- **Carry-over 제품군 특화**: Long Carry-over 제품군의 특성을 고려한 맞춤형 자동화 솔루션
- **효율적 변경점 관리**: 
  - 매년 발생하는 소규모 변경점(Chip 소비전력, 방열 부자재) 대응
  - Silicon Pad, AL shield 등 방열 부자재 변경사항 자동 반영
- **무인 해석 프로세스**: 해석자 및 개발자의 별도 작업 없이 웹에서 변수 변경만으로 해석 실행
- **실시간 결과 확인**: 
  - Mainboard, PSU, Panel 온도 Contour 자동 생성
  - 설정된 Sensor 위치의 온도 값 실시간 확인 가능
- **업무 효율성 극대화**: 반복적인 방열 해석 업무의 완전 무인화 달성

##### 7. VPDS 시스템 연동 VPD Task 기능 개발
- **시스템 간 연동 구축**: 사내 개발 프로젝트 진행 시스템(VPDS)과 자체 웹앱 간 데이터 연동 시스템 구축
- **데이터베이스 아키텍처 설계**: 
  - MongoDB -> MariaDB 스케줄링 변환/이동 시스템 구축
  - VPDS 양식에 맞는 MariaDB 구조 설계 및 구현
- **다부서 협업**: 
  - VPDS SW 개발자와 기술적 연동 방안 협의
  - 전사 데이터 관리 및 보안팀과 데이터 보안 정책 수립
- **스케줄링 시스템 구현**: Jenkins와 Cron을 활용한 자동 데이터 변환/이동 파이프라인
- **DB2DB 연동 시스템**: 
  - 변환된 MariaDB ↔ VPDS MariaDB 간 연동 구현
  - End-user 요청 기반 API 트리거 방식 채택
- **사용자 중심 설계**: End-user가 개발 프로젝트별 해석 결과 매칭 정보를 보유한 특성을 고려한 설계
- **업무 효율성 향상**: 해석 결과 데이터의 쉽고 빠른 VPDS 등록 프로세스 구현

#### Technologies Used
- Frontend: Next.js, D3.js
- Backend: FastAPI
- Database: MongoDB, SQLite, MariaDB, MinIO
- AI/ML: Python, PINNs, 몬테카를로 시뮬레이션
- CAE: Abaqus, Optistruct, Ls-dyna, CelsiusEC Solver
- Infrastructure: SSH 통신, HPC 연동, Jenkins, Cron
- Data Integration: DB2DB 연동, 스케줄링 시스템

#### Impact
- 제품 개발 프로세스 효율성 대폭 향상
- QA 시험 비용 및 시간 절감
- 데이터 기반 의사결정 체계 구축

### 데이터 분석 및 예측모델 경진대회 참가 (2022-Present)
#### Role: 데이터 사이언티스트

#### Description
- Kaggle, Dacon 등 데이터 분석 대회 꾸준히 참여
- 약 10개 대회 참가, 평균 상위 15% 성적 기록
- 실무 적용을 위한 회귀, 분류 모델 대회 주로 참여

#### Key Achievements
- 실제 비즈니스 환경에 적용 가능한 ML/DL 솔루션 개발 역량 강화
- 다양한 데이터셋과 문제에 대한 경험 축적
- 최신 AI/ML 기술 트렌드 습득 및 적용

#### Technologies Used
- Python (Scikit-learn, PyTorch, TensorFlow)
- 데이터 전처리 및 특성 공학
- 앙상블 기법
- 시계열 분석

## 4. Certifications & Contact
### Certifications
- ADSP (데이터분석 준전문가) - 한국데이터산업진흥원, 2023
- Google Data Analytics - Google, 2024
- 일반기계기사 - 한국산업인력공단, 2020

### Contact
- Phone: +82 10 7709 7326
- Email: 400yad@gmail.com

### Current Interest
## 데이터 엔지니어링 기술
- SQL 학습 중 (SQLD 자격증 취득 목표)
- Docker-compose: PostgreSQL/Airflow/Spark 를 이용한 제조업 센서 및 해석 합성 데이터 기반 DE 사이드프로젝트 진행 중