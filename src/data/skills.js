import { SiHtml5, SiCss3, SiJavascript, SiReact} from "react-icons/si";

export const CORE_SKILLS = [
  {
    title: "HTML",
    icon: SiHtml5,
    desc: "로그인/회원가입 폼 구조를 설계하고 입력 요소를 구성합니다.",
    tags: ["form-structure", "inputs"],
    colorKey: "html"
  },
  {
    title: "CSS",
    icon: SiCss3,
    desc: "Grid/Flex 기반 레이아웃과 카드 UI를 구현하고 반응형을 적용합니다.",
    tags: ["grid", "flex", "responsive", "transition"],
    colorKey: "css"
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    desc: "이벤트 기반 UI 로직과 데이터 처리(검증/저장/예외처리)를 구현합니다.",
    tags: ["es6+", "async-await", "fetch", "error-handling"],
    colorKey: "js"
  },
  {
    title: "React",
    icon: SiReact,
    desc: "컴포넌트 분리와 상태 기반 UI로 화면 구조를 설계합니다.",
    tags: ["components", "hooks", "router", "state"],
    colorKey: "react"
  },
];

export const STRENGTHS = [
  {
    title: "Component Design",
    desc: "기능 단위로 컴포넌트를 분리하고 재사용을 고려해 설계합니다.",
    tags: ["reusability", "separation-of-concerns"],
  },
  {
    title: "UI / UX Detail",
    desc: "hover, transition, 간격과 타이포그래피 등 디테일을 다듬습니다.",
    tags: ["hover", "transition", "spacing", "readability"],
  },
  {
    title: "Responsive Layout",
    desc: "브레이크포인트 기준으로 모바일에서도 자연스럽게 동작하도록 설계합니다.",
    tags: ["breakpoints", "grid-system"],
  },
];

export const TOOLS = [
  { title: "Git / GitHub", desc: "기능 단위 커밋과 브랜치 기반으로 작업을 관리합니다." },
  { title: "Figma", desc: "디자인을 해석해 컴포넌트 단위로 구현합니다." },
  { title: "Vite / npm", desc: "프로젝트 환경 설정 및 패키지 관리를 수행합니다." },
];