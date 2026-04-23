# PNU HSE Lab Homepage 수정 가이드

이 저장소는 부산대학교 HSE Lab 연구실 홈페이지 소스코드입니다. 이 문서는 **개발자가 아닌 연구실 구성원**이 홈페이지 내용(멤버, 논문, 뉴스 등)을 수정할 수 있도록 작성되었습니다. LLM(ChatGPT, Claude 등)에게 도움을 받아 수정할 때, 이 문서를 통째로 붙여넣고 요청하면 됩니다.

---

## 0. 한눈에 보기

- **프레임워크**: React 18 + Vite + Tailwind CSS
- **라우팅**: React Router v7
- **배포**: `main` 브랜치에 push → GitHub Actions가 자동으로 `gh-pages` 브랜치에 빌드/배포 ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
- **데이터 저장 방식**: 별도 DB나 JSON 파일 없이, 각 컴포넌트 `.jsx` 파일 안에 하드코딩된 배열로 관리

즉, **"어떤 내용을 바꾸려면 해당 파일 안의 배열을 수정하면 된다"** 가 전부입니다.

---

## 1. 처음 세팅 (로컬에서 실행)

### 필요한 것
- [Node.js](https://nodejs.org) 20 이상 설치
- [Git](https://git-scm.com/) 설치
- 편집기 ([VS Code](https://code.visualstudio.com/) 권장)

### 명령어 (터미널에서)
```bash
# 저장소 클론 (최초 1회)
git clone https://github.com/PNUHSELAB/PNUHSELAB.github.io.git
cd PNUHSELAB.github.io

# 의존성 설치 (최초 1회, 또는 package.json 바뀔 때)
npm install

# 개발 서버 실행 (수정하면서 바로 확인)
npm run dev
# → 터미널에 뜨는 http://localhost:5173 접속
```

수정 후 저장하면 브라우저가 자동 새로고침됩니다.

### 배포 (GitHub에 올리기)
```bash
git add .
git commit -m "멤버 업데이트"
git push origin main
```
→ 1~2분 후 https://pnuhselab.github.io 에 자동 반영됩니다. (GitHub Actions 탭에서 진행 상황 확인)

---

## 2. 디렉토리 구조

```
PNUHSELAB.github.io/
├── src/
│   ├── App.jsx                # 전체 페이지 라우팅 설정
│   ├── components/            # 각 페이지/섹션 컴포넌트 (수정 대상)
│   │   ├── Hero.jsx           # 홈 메인 영역
│   │   ├── About.jsx          # 연구실 소개
│   │   ├── Members.jsx        # 구성원
│   │   ├── Publication.jsx    # 국제 저널 논문
│   │   ├── InternationalConferences.jsx
│   │   ├── DomesticJournals.jsx
│   │   ├── DomesticConferences.jsx
│   │   ├── Books.jsx
│   │   ├── News.jsx           # 뉴스/수상
│   │   ├── Projects.jsx       # 프로젝트
│   │   ├── Patents.jsx        # 특허
│   │   ├── Professor.jsx      # 교수 소개
│   │   ├── ResearchAreas.jsx  # 연구 분야
│   │   ├── ResearchFacilities.jsx
│   │   ├── LabStatusGlobe.jsx # 홈 지구본
│   │   └── Photo.jsx          # 갤러리
│   ├── assets/                # 이미지 (멤버 사진, 뉴스, 로고 등)
│   └── index.css              # 전역 스타일 (거의 건드릴 일 없음)
├── public/                    # 정적 파일 (3D 모델 .glb 등)
├── package.json
└── .github/workflows/deploy.yml   # 자동 배포 설정
```

**원칙**: 내용만 바꿀 거면 `src/components/` 안의 `.jsx` 파일과 `src/assets/`의 이미지만 건드립니다.

---

## 3. 페이지 경로 (URL ↔ 파일)

| URL | 파일 |
|---|---|
| `/` (홈) | [src/components/Hero.jsx](src/components/Hero.jsx), [src/components/LabStatusGlobe.jsx](src/components/LabStatusGlobe.jsx) |
| `/about` | [src/components/About.jsx](src/components/About.jsx) |
| `/professor` | [src/components/Professor.jsx](src/components/Professor.jsx) |
| `/people` | [src/components/Members.jsx](src/components/Members.jsx) |
| `/research` | [src/components/ResearchAreas.jsx](src/components/ResearchAreas.jsx) |
| `/research/projects` | [src/components/Projects.jsx](src/components/Projects.jsx) |
| `/research/patents` | [src/components/Patents.jsx](src/components/Patents.jsx) |
| `/research/facilities` | [src/components/ResearchFacilities.jsx](src/components/ResearchFacilities.jsx) |
| `/publication` | [src/components/Publication.jsx](src/components/Publication.jsx) |
| `/publication/international-conferences` | [src/components/InternationalConferences.jsx](src/components/InternationalConferences.jsx) |
| `/publication/domestic-journals` | [src/components/DomesticJournals.jsx](src/components/DomesticJournals.jsx) |
| `/publication/domestic-conferences` | [src/components/DomesticConferences.jsx](src/components/DomesticConferences.jsx) |
| `/publication/books` | [src/components/Books.jsx](src/components/Books.jsx) |
| `/news` | [src/components/News.jsx](src/components/News.jsx) |
| `/photo` | [src/components/Photo.jsx](src/components/Photo.jsx) |

---

## 4. 자주 하는 수정 작업

### 4-1. 멤버 추가/수정/삭제 — [src/components/Members.jsx](src/components/Members.jsx)

파일 맨 위쪽 `memberGroups` 배열에 카테고리별로 나뉘어 있습니다.

**카테고리**: `research-professor`, `administrative-staff`, `phd-candidates-and-students`, `ms-students`, `research-staff`, `undergraduate-students`, `alumni`

**현직 멤버 추가 예시** (학부생 카테고리에):
```jsx
{
  name: "홍길동 (Gildong Hong)",
  interest: "인간공학",
  img: gildongHongPhoto      // 사진이 있을 때만
}
```
사진이 없으면 `img` 줄을 통째로 빼면 됩니다. ("Photo coming soon"으로 표시됨)

**사진 추가 절차**:
1. `src/assets/` 폴더에 사진 저장 (예: `gildong-hong.jpg`, 권장: 정사각형 500x500, 2MB 이하)
2. 파일 **최상단**에 import 문 추가:
   ```jsx
   import gildongHongPhoto from '../assets/gildong-hong.jpg';
   ```
3. 해당 멤버 객체에서 `img: gildongHongPhoto` 사용

**Alumni 추가** (현직과 필드가 다름):
```jsx
{
  name: "홍*동 (*dong Hong)",
  degree: "석사과정 졸업",
  field: "산업디자인",
  email: "gildong@pusan.ac.kr"
}
```

### 4-2. 논문 추가 — [src/components/Publication.jsx](src/components/Publication.jsx) 외

연도별로 그룹이 나뉘어 있습니다. 해당 연도 그룹의 `items` 배열에 추가:
```jsx
{
  title: "논문 제목",
  citation: "Author1, Author2, ... (Year). Journal Name, Vol(Issue), pages.",
  link: "https://doi.org/..."
}
```

새로운 연도면 `publicationGroups` 배열에 새 그룹 추가:
```jsx
{
  year: "2026",
  items: [ /* ... */ ]
}
```

국내 저널/학회/단행본도 같은 방식이며 각각 별도 파일에 있습니다.

### 4-3. 뉴스/수상 추가 — [src/components/News.jsx](src/components/News.jsx)

1. 이미지를 `src/assets/`에 추가 (예: `news-award-2026-excellence.png`)
2. 파일 맨 위 import 추가
3. `newsItems` 배열 **맨 앞에** (최신순) 객체 추가:
   ```jsx
   {
     id: [기존 최대 id + 1],
     title: "제목",
     author: "수상자 이름",
     date: "2026.04.23",          // 반드시 YYYY.MM.DD
     award: "상명",
     authors: "저자들",
     affiliation: "소속",
     paperTitle: "논문 제목",
     images: [newsAward2026Excellence]
   }
   ```

### 4-4. 프로젝트 추가 — [src/components/Projects.jsx](src/components/Projects.jsx)

`projectGroups` 배열의 해당 카테고리(`Industry Project`, `Government Project`, `Academic Research`)에 추가:
```jsx
{
  title: "과제명",
  meta: "2026.03 ~ 2027.02 / 발주처",
  note: "설명 (선택)"
}
```

### 4-5. 교수 활동 업데이트 — [src/components/Professor.jsx](src/components/Professor.jsx)

`activities` 배열에서 새 역할 추가 또는 종료일 갱신. 날짜 형식은 `'YY.MM~'` (진행중) 또는 `'YY.MM~YY.MM'`.

### 4-6. 홈 화면 문구/키워드 — [src/components/Hero.jsx](src/components/Hero.jsx)

포커스 키워드 배열 수정: `['Safety Engineering', 'Cognitive Engineering', 'Biomechanics', 'HMI']`

### 4-7. 연구실 운영 시간(지구본 상태등) — [src/components/LabStatusGlobe.jsx](src/components/LabStatusGlobe.jsx)

```jsx
const STATUS_START = { hour: 8, minute: 30 };   // 운영 시작
const STATUS_END   = { hour: 18, minute: 0 };   // 운영 종료
```
평일 이 시간대에 지구본에 초록불이 들어옵니다.

---

## 5. 이미지 가이드

| 용도 | 저장 위치 | 파일명 규칙 |
|---|---|---|
| 멤버 사진 | `src/assets/` | `firstname-lastname.jpg` (예: `hyunjin-lee.jpg`) |
| 뉴스(수상) | `src/assets/` | `news-award-YYYY-TYPE.png` |
| 뉴스(단체사진) | `src/assets/` | `news-photo-DESCRIPTION.png` |
| 시설 | `src/assets/` | `facility-NAME.png` |
| 3D 모델(.glb) | `public/` | 그대로 두고 건드리지 말 것 |

**공통 규칙**: `src/assets/`에 넣은 이미지는 **반드시 컴포넌트 파일 맨 위에 `import`**해야 브라우저에 보입니다. `public/` 이미지는 import 없이 `/파일명`으로 접근합니다.

---

## 6. LLM에게 수정 요청할 때 — 판단 가이드

> 이 섹션은 ChatGPT / Claude 등 LLM이 이 저장소를 처음 볼 때 **반드시 읽고 따라야 할 규칙**입니다. 사용자(연구실 구성원)에게 "이거 README.md 같이 올리고 부탁해" 라고 안내하세요.

### LLM이 파일을 수정하기 전에 확인할 것

1. **이 저장소는 별도의 DB/JSON/CMS가 없다.** 모든 컨텐츠는 `src/components/*.jsx` 안의 배열에 하드코딩되어 있다. 사용자가 "멤버 바꿔줘"라고 하면 외부 데이터 파일을 찾지 말고 해당 컴포넌트의 배열을 수정해야 한다.

2. **어느 파일을 고칠지 결정**: 위의 "페이지 경로" 표와 "자주 하는 수정 작업" 섹션을 참고. 애매하면 먼저 파일을 열어 구조를 확인한 뒤 편집.

3. **수정 범위를 최소화**: 리팩토링, 변수명 변경, 주석 추가, 스타일(className) 변경, 파일 재구성 등을 **요청받지 않았다면 하지 말 것**. 사용자는 개발자가 아니라 변경사항을 리뷰하기 어렵다. 데이터 배열 한두 줄만 바꾸는 것이 이상적.

4. **기존 데이터 구조(필드명)를 그대로 유지**:
   - Members 현직: `name`, `interest`, `img` (선택)
   - Members 졸업생: `name`, `degree`, `field`, `email`
   - Publications: `title`, `citation`, `link`
   - News: `id`, `title`, `author`, `date`, `award`, `authors`, `affiliation`, `paperTitle`, `images`
   - 필드명을 임의로 바꾸거나 추가 필드를 넣지 말 것. 컴포넌트 렌더 코드가 정확히 이 이름으로 접근한다.

5. **이미지를 추가할 때**:
   - 실제 이미지 파일은 사용자가 직접 `src/assets/`에 넣어야 한다. LLM이 임의의 경로로 import 문만 쓰면 빌드가 깨진다.
   - LLM은 "이 파일명으로 이미지를 `src/assets/`에 넣어주세요"라고 **명시적으로 안내**하고, 그 파일명에 맞춰 import 문과 `img:` 참조를 작성.

6. **문법 주의사항**:
   - 배열 항목 사이 콤마 누락 금지
   - 문자열은 반드시 일반 따옴표 `'` 또는 `"` (스마트 따옴표 `'` `"` 금지)
   - JSX에서 `img: 변수명`은 따옴표 없이, 문자열 값은 따옴표로 감싸기
   - 새 항목을 배열 중간에 넣을 때 앞 항목 끝에 콤마가 있는지 확인

7. **확인 의무**: 수정 후 사용자에게 **반드시 다음을 안내**:
   ```
   변경 확인 방법:
   1. 터미널에서 `npm run dev` 실행
   2. 브라우저에서 해당 페이지 확인
   3. 이상 없으면:
      git add .
      git commit -m "간단한 설명"
      git push origin main
   4. 1~2분 후 https://pnuhselab.github.io 에서 반영 확인
   ```

8. **건드리면 위험한 것 (사용자가 명시적으로 요청해도 확인 후 진행)**:
   - `package.json`, `package-lock.json`, `vite.config.js`, `eslint.config.js`
   - `.github/workflows/deploy.yml`
   - `src/App.jsx` (라우팅 구조) — 새 페이지 추가가 꼭 필요할 때만
   - `src/index.css`, 컴포넌트의 Tailwind 클래스명
   - `public/` 안의 `.glb` 3D 모델 파일

9. **지우는 작업은 확인 후**: 멤버 삭제, 논문 삭제 등 데이터 제거 요청은 사용자에게 "정말 지울까요?" 한 번 더 확인. 졸업생으로 옮기는 것인지, 완전 삭제인지 구분 필요.

10. **의심스러우면 질문하라**: 사용자가 개발자가 아니라는 점을 기억. 어떤 카테고리에 넣을지, 어떤 파일에 추가할지 모호하면 추측 말고 되물을 것.

### 사용자(연구실 구성원)에게 권장하는 요청 방식

LLM에게 이렇게 요청하면 가장 안정적입니다:

> "이 저장소 README.md 규칙을 읽고, [Members.jsx]의 Undergraduate Students에 '홍길동 (Gildong Hong), 인간공학' 을 추가해줘. 사진은 `gildong-hong.jpg`로 할게."

즉, **(1) 파일명 (2) 어떤 섹션 (3) 정확한 데이터** 3가지를 명시하면 됩니다.

---

## 7. 문제가 생겼을 때

- **로컬에서 페이지가 하얗게 나옴**: 브라우저 F12 → Console 탭의 빨간 에러 메시지를 LLM에게 보여주기. 대부분 콤마 누락이나 import 오타.
- **GitHub에 push했는데 반영이 안 됨**: GitHub 저장소 페이지 → Actions 탭에서 워크플로우 실행 상태 확인. 빨간 X가 있으면 로그 확인.
- **이미지가 안 보임**: import 문의 경로와 파일명(대소문자 포함)이 실제 `src/assets/` 안의 파일과 정확히 일치하는지 확인.
- **되돌리고 싶음**: `git log --oneline` 으로 커밋 확인 후 `git revert <커밋해시>` 또는 GitHub 웹에서 이전 커밋 내용을 복사해서 되돌리기.

---

## 8. 연락처

이 문서로도 해결이 안 되는 문제는 저장소 관리자(이현진)에게 문의하세요.
