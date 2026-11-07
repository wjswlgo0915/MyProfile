# MyProfile

전북대학교 컴퓨터인공지능학부 학생의 개인 소개 및 활동 기록을 위한 웹사이트입니다.

Hugo의 LucentLink-Hugo 테마를 기반으로 제작했으며, HTML, CSS, JavaScript를 수정하여 개인 포트폴리오 형태로 구성했습니다.

## 1. 사이트 주소

- 웹사이트: https://wjswlgo0915.github.io/MyProfile/
- GitHub 저장소: https://github.com/wjswlgo0915/MyProfile

## 2. 주요 콘텐츠

- **Home:** 프로필 사진 및 소속 소개
- **About Me:** 관심 분야와 자기소개
- **My Activities:** 개인 활동 목록
- **TA 세션:** HTML/CSS 웹페이지 수정 실습
- **학생회 활동:** 학생회 홍보 콘텐츠 제작

## 3. 주요 기능

- 프로필 사진 클릭 시 원본 이미지 팝업 및 확대
- 활동 목록과 개별 상세 페이지 연결
- 상세 페이지 간 이동 및 목록으로 돌아가기
- 크림 피치 색상의 카드와 버튼 디자인
- 화면 아래에서 위로 이동하는 하트 애니메이션
- 모바일 화면을 고려한 레이아웃

## 4. 사용 기술 및 작업 환경

- 운영체제: Windows 11 Home 25H2
- 코드 편집기: Visual Studio Code
- 버전 관리: Git, GitHub
- 사용 언어: HTML, CSS, JavaScript, Markdown
- 정적 사이트 생성기: Hugo Extended v0.154.5 (GitHub Actions 빌드 기준)
- Python: 3.10.6
- 준비 스크립트: `prepare_github_pages (1).py`
- 배포: GitHub Actions, GitHub Pages

## 5. 프로젝트 구조

| 파일 | 설명 |
|---|---|
| `site/hugo.toml` | Hugo 설정 |
| `site/content/_index.md` | 메인 프로필 및 소개 |
| `site/content/activities.md` | 활동 목록 |
| `site/content/ta-detail.md` | TA 세션 활동 내용 |
| `site/content/student-council.md` | 학생회 활동 내용 |
| `site/static/css/style.css` | 색상, 카드, 버튼, 사진 팝업 디자인 |
| `site/static/images/` | 이미지 파일 |
| `site/layouts/partials/profile.html` | 프로필 표시 및 확대 기능 |

## 6. 설치 및 실행 방법

Git과 Hugo Extended를 설치합니다. Hugo는 배포 환경에서 v0.154.5를 사용하도록 설정했습니다.

저장소 복제:

```bash
git clone https://github.com/wjswlgo0915/MyProfile.git
cd MyProfile/site
```

로컬 개발 서버 실행:

```bash
hugo server -D
```

실행 후 `http://localhost:1313/`에서 확인합니다.

정적 사이트 빌드:

```bash
hugo --gc --minify
```

※ 위 명령어는 Hugo가 설치된 환경에서 실행할 수 있습니다. 현재 로컬 Git Bash에서는 Hugo 명령어가 인식되지 않아, 실제 배포 빌드는 GitHub Actions에서 수행했습니다.

## 7. 수정 및 재배포 방법

1. VS Code에서 `site/` 내부의 콘텐츠, 스타일 또는 레이아웃 파일을 수정합니다.
2. 파일을 저장하고 변경 내용을 확인합니다.
3. Git에서 변경 사항을 커밋합니다.
4. `main` 브랜치로 Push합니다.
5. GitHub Actions에서 자동 빌드 및 배포 성공 여부를 확인합니다.
6. 공개 사이트에 접속하여 변경 사항을 점검합니다.

```bash
git add .
git commit -m "Describe the changes"
git push origin main
```

- GitHub Actions: https://github.com/wjswlgo0915/MyProfile/actions
- 공개 사이트: https://wjswlgo0915.github.io/MyProfile/

## 8. 개선 및 구현 내용

기본 Hugo 테마를 개인 포트폴리오에 맞게 변경했습니다.

- 기존 테마의 색상과 카드 디자인을 크림 피치 스타일로 변경
- 프로필 이미지를 클릭하여 크게 볼 수 있는 기능 추가
- TA 세션과 학생회 활동을 개별 상세 페이지로 구성
- 활동 상세 페이지의 이동 버튼과 정렬 개선
- 하트 애니메이션의 개수, 크기, 위치 및 속도 조절
- 화면 가독성과 사용자 편의성을 고려한 디자인 수정

## 9. 출처 및 라이선스

- 원본 테마: [LucentLink-Hugo](https://github.com/cx48/LucentLink-Hugo)
- 원본 테마 제작자: cx48
- 원본 테마 라이선스: MIT License
- 테마 ZIP 다운로드 날짜: 2026-11-03
- 프로젝트 설명 및 활동 내용: 본인 활동 기반 작성
- 코드 및 디자인 개선: 본인이 직접 수정하고 ChatGPT의 도움을 받음
- 이미지 출처: 사용 이미지별 제작자·원본 및 이용 조건 확인 후 기재

원본 테마의 라이선스와 저작권 고지를 유지합니다.

## 10. AI 활용

ChatGPT(GPT-6)를 활용하여 HTML·CSS·JavaScript 코드 작성 및 수정, 디자인 개선과 오류 해결에 도움을 받았습니다. 제안된 내용을 바탕으로 직접 파일을 수정하고 결과를 확인했습니다.