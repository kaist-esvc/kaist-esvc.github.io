# KAIST ESVC 홈페이지

KAIST 친환경스마트자동차연구센터 홈페이지 소스입니다. Astro로 만든 정적 사이트입니다.

## 내용을 고치는 곳

| 바꾸려는 것 | 파일 |
|---|---|
| 소식(공지·행사) 추가 | `src/content/news/` 에 `.md` 파일 1개 추가 (기존 파일을 복사해 수정) |
| 논문 추가 | `src/data/publications.json` |
| 특허 추가 | `src/data/patents.json` |
| 연구과제·주요 사업 | `src/data/projects.json` (`flagship: true` 이면 주요 사업) |
| 연구 영역·연구 주제 | `src/data/topics.json` |
| EV-LAB 장비 | `src/data/equipment.json` |
| 연혁 | `src/data/history.json` |
| 구성원 | `src/data/people.json` |
| 연락처·주소 | `src/data/site.json` |
| 상단 메뉴 | `src/data/nav.json` |
| 사진·영상 | `public/media/` (대표 영상은 `public/media/hero/`) |

### 논문 한 건의 형식 (`src/data/publications.json`)

```json
{
  "id": "2022-kits-ev-charging",
  "type": "journal",
  "authors": "고영규, 김수완, 심지섭, 손상훈, 임철우",
  "title": "제주지역 전기차 충전 인프라 구축정책에 대한 효과성 연구",
  "venue": "한국ITS학회논문지",
  "volume": "21(6)",
  "pages": "211–224",
  "year": 2022,
  "month": 12,
  "link": "https://doi.org/10.12815/kits.2022.21.6.211",
  "projects": ["ev-conversion", "micro-ev"]
}
```

- `type`: `journal`(저널) 또는 `conference`(학회)
- `link`: 누구나 열 수 있는 주소 (DOI 우선, 없으면 학술지·학회 페이지). 원문 PDF는 올리지 않습니다.
- `projects`: 사사한 과제 id (`projects.json`의 `id`). 공동 사사면 모두 넣습니다. 넣으면 해당 과제 상세 페이지에 자동으로 나타납니다.

### 특허 한 건의 형식 (`src/data/patents.json`)

```json
{
  "id": "kr-10-2053538",
  "title": "원웨이 클러치 풀리를 이용한 엔진 정지 시 차량 부가장치의 구동 장치 및 방법",
  "country": "KR",
  "status": "등록",
  "inventors": "장인권, 금동석, 김경수, 장기태, 이창우, 김종호, 최경환, 김민기",
  "appNo": "10-2018-0075744", "appDate": "2018.06.29",
  "regNo": "10-2053538", "regDate": "2019.12.06",
  "link": "https://patents.google.com/patent/KR102053538B1/ko",
  "projects": ["hybrid-truck"]
}
```

## 내 컴퓨터에서 미리 보기

```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 폴더에 배포용 파일 생성
```

## 배포

`main` 브랜치에 변경이 올라가면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 빌드해 https://kaist-esvc.github.io/ 에 반영합니다. 진행 상황은 저장소의 **Actions** 탭에서 볼 수 있습니다.

### 검색 노출

검토 기간에는 `src/data/site.json`의 `"noindex": true` 때문에 검색엔진에 노출되지 않습니다. 정식 공개 때 `false`로 바꾸세요.
