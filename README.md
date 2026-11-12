# KAIST ESVC 홈페이지

KAIST 친환경스마트자동차연구센터 홈페이지 소스입니다. Astro로 만든 정적 사이트입니다.

## 내용을 고치는 곳

| 바꾸려는 것 | 파일 |
|---|---|
| 소식(공지·행사) 추가 | `src/content/news/` 에 `.md` 파일 1개 추가 (기존 파일을 복사해 수정) |
| 논문 추가 | `src/data/publications.json` |
| 연구과제·주요 사업 | `src/data/projects.json` (`flagship: true` 이면 주요 사업) |
| 연구 영역·연구 주제 | `src/data/topics.json` |
| EV-LAB 장비 | `src/data/equipment.json` |
| 연혁 | `src/data/history.json` |
| 구성원 | `src/data/people.json` |
| 연락처·주소 | `src/data/site.json` |
| 상단 메뉴 | `src/data/nav.json` |
| 사진·영상 | `public/media/` (대표 영상은 `public/media/hero/`) |

### 논문 한 건의 형식

```json
{
  "title": "논문 제목",
  "authors": "Gildong Hong, Kyunghwan Choi",
  "venue": "IEEE Transactions on ...",
  "year": 2026,
  "doi": "10.xxxx/xxxxx",
  "projects": ["glocal-lab"],
  "topics": ["eco-control"]
}
```

- `projects`: 사사한 과제의 id (`projects.json` 참고). 넣으면 해당 사업 페이지에 자동으로 표시됩니다.
- `topics`: 연구 주제 id (`topics.json` 참고). 연구성과 페이지의 주제 필터에 쓰입니다.

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
