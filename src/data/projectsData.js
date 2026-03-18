export const projects = [
  { 
    id: 1,
    type: "Team",
    title: "Steam 웹사이트 리뉴얼", 
    img:"/images/thumb/project_steam_thumb.jpg",
    alt:"Steam 썸네일", 
    detail_img:"/images/detail/steam_detail.jpg",
    skill:["html","css","JavaScript"],
    summary: "Vanilla JavaScript로 멀티 스텝 회원가입과 로컬스토리지 기반 로그인 흐름을 직접 구현한 프로젝트입니다.",
    bullets: [
      "3-step 회원가입(Next/Prev) + 진행바 상태 전환 로직 구현",
      "정규식 기반 실시간 유효성 검사 및 조건별 에러 메시지 출력",
      "이메일 중복 체크 + 비밀번호 확인 일치 검사 구현",
      "localStorage 기반 로그인 세션 유지 및 로그아웃 처리"
    ],
    core: [],
    links:{
      github: "https://github.com/junhyuk2000/steam_renewal",
      live: "https://steam-renewal.netlify.app/"
    },
    detail:{
      contribution: 
        "50% ( 메인페이지 일부 섹션 UI 및 회원가입/로그인 퍼블리싱, 인증 흐름 구현 담당 )",
      reason:
        "바닐라 JavaScript로 멀티 스텝 폼과 인증 흐름을 직접 설계하며 DOM 제어·이벤트 흐름을 익히는 것을 목표로 했습니다. 실시간 유효성 검증과 시각적 피드백으로 입력 경험을 개선했습니다.",
      structure:
        "3-step 회원가입을 단계 상태로 관리하고, 각 단계의 검증 로직을 분리했습니다. 회원 데이터는 localStorage에 저장/조회하며 이메일 중복 체크와 비밀번호 확인 일치 검사를 포함했습니다. 로그인 성공 시 리다이렉트 및 새로고침 시 세션 유지 로직을 구현했습니다.",
      trouble:
        "실시간 검증에서 입력 상태에 따라 테두리 색/에러 메시지 표시가 꼬이는 경우가 있어 조건 분기를 정리했습니다. 저장된 데이터 기반으로 이메일 중복과 로그인 검증 흐름을 맞추며 예외 케이스를 보완했습니다."
    }
  },

  { 
    id: 2,
    type: "Team",
    title: "Lunest", 
    img:"/images/thumb/project_lunest_thumb.jpg",
    alt:"Lunest 썸네일", 
    detail_img:"/images/detail/lunest_detail.jpg",
    skill:["html","css","JavaScript"],
    summary: "mp3 폴더의 여러 트랙을 재생하는 커스텀 오디오 플레이어와 cloneNode 기반 무한 캐러셀을 구현한 인터랙션 중심 프로젝트입니다.",
    bullets: [
      "브라우저 기본 Audio 객체(HTMLAudioElement) 기반 재생/일시정지 및 진행바 동기화 구현",
      "timeupdate 이벤트로 진행바·재생 시간 동기화",
      "볼륨 조절 기능 구현",
      "cloneNode + transition 제어로 무한 캐러셀 구현 (hover 정지/재개, 인디케이터 이동)"
    ],
    core: [],
    links:{
      github: "https://github.com/junhyuk2000/lunest",
      live: "https://lunest.netlify.app/"
    },
    detail:{
      contribution: 
        "60% ( 디자인 시안을 기반으로 메인페이지 UI 구성 및 퍼블리싱, 주요 기능 로직 구현 담당 )",
      reason:
        "mp3 폴더의 여러 트랙을 재생하는 커스텀 플레이어를 만들며 ‘오디오 상태를 UI로 제어하는 흐름’을 경험하는 것을 목표로 했습니다. 클릭 기반 재생, 진행바/시간 표시, 볼륨 조절 같은 핵심 동작을 직접 구현했습니다.",
      structure:
        "li 목록 클릭 → 선택 트랙 로드/재생 흐름으로 구성했습니다. 재생/일시정지, 진행 시간 동기화, 볼륨 컨트롤 등 플레이어 기능을 분리해 관리했고, 캐러셀은 cloneNode 기반 무한 루프 + hover 정지/재개 + 인디케이터 이동까지 동작하도록 설계했습니다.",
      trouble:
        "무한 캐러셀에서 끝 지점 이동 시 끊김이 보이지 않도록 transition 제어와 위치 초기화 타이밍을 조정했습니다. hover 정지/재개는 setTimeout 흐름을 정리해 반복 루프가 안정적으로 동작하게 했습니다."
    }
  },

  { 
    id: 3,
    type: "Personal",
    title: "Study Dashboard",  
    img:"/images/thumb/project_study-dashboard_thumb.jpg",
    alt:"Study Dashboard 썸네일", 
    detail_img:"/images/detail/study-dashboard_detail.jpg",
    skill:["React","TypeScript","Supabase","css"],
    summary: "React와 Supabase를 활용해 사용자별 학습 일정과 공부 시간을 관리하는 스터디 대시보드 웹 애플리케이션입니다. 사용자 인증 기반으로 학습 데이터를 분리하고 완료된 학습 시간을 주간 단위 그래프로 시각화했습니다.",
    bullets: [
      "Supabase Auth 기반 사용자 인증 및 사용자별 데이터 CRUD 구현",
      "user_id 기준 학습 데이터 분리 및 created_at 정렬 처리",
      "자정 기준 날짜 비교 로직으로 ‘오늘 할 일’ 상태 분기 처리",
      "Recharts를 활용한 주간 학습 시간 시각화",
      "기존 React(JavaScript) 프로젝트를 TypeScript로 마이그레이션하여 props, 상태, API 데이터 타입을 명확히 정의"
    ],
    links:{
      github: "https://github.com/junhyuk2000/study_dashboard",
      live: "https://study-dashboard-junhyuk.netlify.app/login"
    },
    detail:{
      reason:
        "‘오늘 할 일 → 최근 기록 → 주간 통계’ 흐름을 한 화면에서 관리하는 대시보드를 목표로 설계했습니다. React 상태 기반 UI와 Supabase(Auth + DB)를 연결해 로그인부터 사용자별 데이터 저장까지 구현했습니다.",
      structure:
        "Auth 이후 데이터를 로드하고 Summary/Today/History/Chart로 기능을 분리했습니다. user_id 기준으로 CRUD를 처리하고, created_at 정렬과 날짜 분기로 ‘오늘’과 ‘기록’을 나눠 렌더링했습니다.",
      trouble:
        "초기에는 user_id 누락으로 데이터가 섞이는 문제가 있었고, 쿼리에 필터를 강제해 해결했습니다. 자정 이후 상태 유지 문제는 날짜 비교 함수를 분리해 보완했습니다."
    }
  },

  { 
    id: 4,
    type: "Personal",
    title: "weather",  
    img:"/images/thumb/project_weather_thumb.jpg",
    alt:"weather 썸네일", 
    detail_img:"/images/detail/weather_detail.jpg",
    skill:["html","css","JavaScript","React"],
    summary: "OpenWeatherMap API를 활용해 현재 날씨와 예보 데이터를 가공·시각화한 날씨 애플리케이션입니다.",
    bullets: [
      "도시 검색 기반 현재 날씨 조회 및 주요 지표 카드화",
      "UTC 시간을 한국 시간으로 변환해 예보 시간 정확도 보정",
      "3시간 단위 예보를 오늘 기준 24시간 범위로 필터링 렌더링",
      "5일 예보를 날짜 기준으로 정리해 표시"
    ],
    core: [],
    links:{
      github: "https://github.com/junhyuk2000/weather",
      live: "https://weather-app-junhyuk.netlify.app/"
    },
    detail:{
      reason:
        "OpenWeatherMap API를 활용해 외부 데이터 연동과 비동기 처리 흐름을 경험하기 위해 제작했습니다. UTC 기준 시간 데이터를 한국 시간으로 변환해 현재 날씨와 예보 시간에 일관되게 적용했습니다.",
      structure:
        "도시 검색 → API 호출 → 응답 데이터 가공 → 상태 업데이트 흐름으로 구성했습니다. 3시간 단위 예보는 오늘 기준 24시간 범위로 필터링해 시간대별 카드 UI로 렌더링했고, 5일 예보는 날짜 기준으로 정리해 표시했습니다.",
      trouble:
        "API에서 제공하는 시간 값이 UTC 기준이라 예보 시간이 실제 체감과 어긋나는 문제가 있었습니다. UTC 시간을 한국 시간으로 변환해 현재 날씨와 예보 시간 모두 정확히 맞추도록 수정했습니다."
    }
  },
];

export const projectDetail = [
  {
    id:1, 
    title:"Steam 웹사이트 리뉴얼", 
    img:"/images/detail/steam_detail.jpg",
    skill:"html, css, JavaScript", 
    desc:"Steam 웹사이트를 리디자인한 팀 프로젝트로, 기존 UI의 불편을 해소하고 사용자 친화적 인터페이스를 목표로 주요 페이지와 기능을 재구현했습니다. 팀장을 맡아 전체 구성·디자인 가이드를 정리하고 기능 전반을 보완했으며, 로그인/회원가입은 바닐라 자바스크립트만으로 구현했습니다. 로컬스토리지로 회원 정보를 관리하고 세션을 유지하며, 이메일·비밀번호·비밀번호 확인에 실시간 폼 검증을 적용해 중복 이메일 차단, 필드별 에러 메시지, 유효 시 테두리 색 변화 등 즉시 수정 가능한 UX를 제공했습니다.", 
    url : "https://steam-renewal.netlify.app/", 
    github: "https://github.com/junhyuk2000/steam_renewal", 
    main:"바닐라 JS로 로컬스토리지 기반 로그인·회원가입 구현, 폼 검증으로 입력값 유효성 체크 및 실시간 에러 메시지 출력"
  },
  
  {
    id:2, 
    title:"Lunest", 
    img:"/images/detail/lunest_detail.jpg",
    skill:"html, css, JavaScript", 
    desc:"팀 프로젝트 Lunest에서 오디오 플레이어와 캐로셀 슬라이드 기능을 담당했습니다. 오디오 플레이어는 JavaScript의 Audio 객체를 활용해 트랙 재생, 교체, 일시정지/재생 토글, 진행 바 시크, 볼륨 조절 등의 핵심 기능을 구현했습니다.loadedmetadata와 timeupdate 이벤트를 통해 총 재생 시간과 현재 시간을 실시간으로 동기화했으며, 사용자가 프로그레스바를 직접 조작해 원하는 구간으로 이동할 수 있도록 했습니다.곡이 종료되면 버튼 상태와 재생 바를 자동으로 초기화해, 별도의 조작 없이 다음 트랙을 직관적으로 재생할 수 있는 UX를 제공했습니다. 또한 재생 중 발생할 수 있는 상태 불일치(예: 일시정지 중 시간값 미반영, 종료 시 progress bar 오버플로 등)를 이벤트 기반으로 제어하여 정확한 타이밍과 안정적인 재생 흐름을 유지했습니다. 캐로셀 슬라이드 기능은 사용자가 다양한 음원을 직관적으로 탐색할 수 있도록 설계했습니다.경계 슬라이드에서는 클론 노드를 이용해 슬라이드가 순환되는 무한 루프 구조를 구현했고, 인디케이터를 통해 현재 위치를 명확히 표시했습니다. 자동 재생 기능과 마우스 호버 시 일시정지·재시작 로직도 구현해 사용자 경험을 높였으며, 모든 로직은 외부 라이브러리 없이 순수 JavaScript로만 작성해 가볍고 안정적인 인터랙션 UI를 완성했습니다.", 
    url : "https://lunest.netlify.app/", 
    github: "https://github.com/junhyuk2000/lunest", 
    main:"커스텀 플레이어(재생/일시정지, 이전/다음, 시크바, 볼륨) , 케로셀 슬라이드, 프리셋 플레이리스트, 모바일 반응형 UI"
  },
  
  {
    id:3, 
    title:"Study Dashboard", 
    img:"/images/detail/study-dashboard_detail.jpg",
    skill:"html, css, JavaScript, React", 
    desc:"React(Vite)와 Supabase를 기반으로 구현한 학습 관리 대시보드입니다. 단순한 Todo 앱을 넘어 학습의 흐름을 관리하는 것을 목표로 설계했으며, 오늘 할 일과 최근 기록을 분리해 현재와 과거 학습 데이터를 명확히 구분했습니다. Recharts를 활용해 주간 학습 시간을 시각화했고, 자정 기준 필터링 로직을 적용해 날짜 기반 상태 관리를 구현했습니다. 또한 공통 Layout 구조를 설계해 재사용성과 확장성을 고려했으며, Netlify와 GitHub를 연동해 CI/CD 자동 배포 환경까지 구성했습니다.", 
    url : "https://study-dashboard-junhyuk.netlify.app/", 
    github: "https://github.com/junhyuk2000/study_dashboard", 
    main:"오늘 할 일 추가·완료·삭제 및 최근 기록 자동 반영 기능을 제공, 주간 학습 시간을 그래프로 시각화해 학습 흐름을 한눈에 확인할 수 있도록 구현."
  },
  
  {
    id:4, 
    title:"weather", 
    img:"/images/detail/weather_detail.jpg",
    skill:"html, css, JavaScript, React", 
    desc:"OpenWeatherMap API를 활용해 도시 이름 기준의 현재 날씨와 단기 예보를 보여주는 웹앱입니다. 검색창에서 도시를 입력하면 API 응답으로부터 온도, 체감온도, 습도, 풍속, 날씨 아이콘 등을 받아와 카드 형태로 출력하고, 시간대별·일자별 데이터는 가공하여 간단한 예보 리스트로 구성했습니다. 잘못된 도시명을 입력하거나 응답이 없을 경우에는 에러 메시지를 표시해 사용자에게 안내하며, 날짜와 시간은 포맷팅해 읽기 쉽게 변환하고 아이콘 매핑으로 기상 상태를 직관적으로 확인할 수 있도록 구성했습니다.", 
    url : "https://weather-app-junhyuk.netlify.app/", 
    github: "https://github.com/junhyuk2000/weather", 
    main:"OpenWeatherMap API를 통해 도시 검색으로 현재 날씨(온도·체감온도·습도·풍속·아이콘)와 단기 예보를 조회하고, 잘못된 입력 시 에러 메시지를 표시."
  },
  

]