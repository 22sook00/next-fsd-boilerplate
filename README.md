# Next.js + FSD Boilerplate

root 의 app, pages 와 `src` 내부 FSD 파일을 수정하여 사용해주세요.

[📚 문서 읽기](https://feature-sliced.design/kr/docs/guides/tech/with-nextjs)  
> ⚠️ root에 있는 `app`, `pages` 디렉토리는 절대 삭제하지 마세요!
  
## 🗂️ FSD 폴더구조

| Folder            | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **app**           | Next App folder for App Routing ([Next.js App router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)) |
| **pages** *       | Next Pages folder for Pages Routing                                          |
| **public**        | Public files                                                                |
| **src/app**       | App FSD Layer                                                                |
| **src/pages**     | Pages FSD Layer                                                              |
| **src/widgets**   | Widgets FSD Layer                                                            |
| **src/features**  | Features FSD Layer                                                           |
| **src/entities**  | Entities FSD Layer                                                           |
| **src/shared**    | Shared FSD Layer                                                             |

## 📌 FSD 아키텍처 규칙

- 🏛 **app** – 애플리케이션 전역 설정을 정의해주세요.
- 📄 **pages** – 실제 사용자에게 보여지는 화면 단위로, widget 혹은 feature 들을 조합하여 각 페이지의 레이아웃과 구성할 수 있습니다.
- 🧩 **widgets** – 헤더, 푸터, 사이드바와 같이 여러 페이지에서 재사용되는 큰 단위의 독립적인 블록들을 관리합니다.
- ⚙️ **features** – 로그인, 검색, 필터링과 같은 사용자 중심의 기능들을 구현하는 디렉토리 입니다.
- 🏗 **entities** – 사용자, 상품, 주문과 같은 비즈니스 도메인과 연관된 API 호출함수를 정의할 수 있어요.
- 🔗 **shared** – 공통 유틸리티, 스타일, 라이브러리를 포함해주세요.

## 📦 Slice 내부 구조 (Segment)

- 🎨 **ui** – 컴포넌트 및 스타일을 정의해주세요.
- 🧠 **model** – 상태 및 비즈니스 로직을 관리해주세요.
- 🔌 **api** – 서버 요청 및 API 통신을 처리해주세요.

