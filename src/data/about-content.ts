export type AboutLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  group: string;
  items: readonly string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  role: string;
  /** Card one-liner */
  teaser: string;
  techStack: readonly string[];
  features: readonly string[];
  challenges: readonly string[];
  learnings: readonly string[];
  links: readonly AboutLink[];
  badge?: string;
};

export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  role: string;
  teaser: string;
  bullets: readonly string[];
  links?: readonly AboutLink[];
  /** Longer summary shown inside the Detail modal */
  detailSummary?: string;
  /** Show a Detail button that opens a modal (e.g. architecture diagram) */
  hasDetailPanel?: boolean;
};

export type AboutIntro = {
  brand: string;
  nameKo: string;
  nameEn: string;
  headline: string;
  subline: string;
  body: string;
  ctas: readonly AboutLink[];
};

export type AboutContact = {
  email: string;
  github: string;
  blog: string;
  linkedin: string;
};

export type AboutSectionId =
  | 'intro'
  | 'educations'
  | 'skills'
  | 'projects'
  | 'experiences'
  | 'contact';

export const aboutSections = [
  { id: 'intro', label: 'Intro' },
  { id: 'educations', label: 'Educations' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'contact', label: 'Contact' },
] as const satisfies readonly { id: AboutSectionId; label: string }[];

export const aboutIntro = {
  brand: 'BlueNyang',
  nameKo: '안규태',
  nameEn: 'Gyutae Ahn',
  // profile.md / resume.md 한줄 소개 (body 첫 문장을 headline으로 승격)
  headline: '설계를 중시하고, 개발부터 운영까지의 과정을 이해하는 신입 SW 엔지니어입니다.',
  // profile.md Backend 한줄
  subline:
    'Spring Boot·Go·PostgreSQL과 Docker 기반 홈랩 운영 경험이 있는 백엔드 지향 개발자입니다.',
  body: 'PostgreSQL 및 다양한 백엔드 언어를 활용하여 데이터베이스 통합, 자동화된 배포 파이프라인 구축 등 실전 경험을 쌓았습니다. 신속한 적응력과 문제 해결 역량을 바탕으로, 대용량 데이터 환경에서의 효율적 데이터 처리와 품질 향상에 기여할 수 있습니다.',
  ctas: [
    { label: 'GitHub', href: 'https://github.com/bluenyang' },
    { label: 'Blog', href: 'https://blog.bluenyang.kr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gyutae-ahn-35a860366' },
    { label: 'Contact', href: 'mailto:me@bluenyang.kr' },
  ],
} as const satisfies AboutIntro;

export type EducationItem = ExperienceItem;

export const aboutEducations = [
  {
    id: 'university',
    title: '컴퓨터소프트웨어공학 학사',
    org: '원광대학교',
    period: '2020.03 – 2026.02',
    role: '학사',
    teaser: '강의·실습을 정리하고 GitHub·기술 블로그에 이슈를 기록하는 학습 습관',
    bullets: [
      '학기/과목별로 학습 자료를 정리하고 관련 코드는 GitHub에 기록',
      '특이 이슈는 기술 블로그에 정리',
    ],
    links: [{ label: 'Blog', href: 'https://blog.bluenyang.kr' }],
  },
  {
    id: 'academy',
    title: 'JAVA 풀스택 개발자 아카데미',
    org: '멀티캠퍼스 · [현대이지웰]',
    period: '2025.07 – 2025.12',
    role: '수료 · A11yMARKET 팀장',
    teaser: '접근성 중개 쇼핑몰을 팀장으로 수행, 과정 프로젝트 최우수',
    bullets: [
      '4인 팀 팀장·개발 리드로 Spring Boot 기반 A11yMARKET 설계·구현',
      '도메인/인증/CI·CD·QA runner까지 서버·인프라를 주도',
      '과정 프로젝트 성과 최우수 평가 (2025.12)',
    ],
    links: [
      { label: 'A11yMARKET Server', href: 'https://github.com/gscd-dev/a11y-market-server' },
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=SUjhHUoBB_Y' },
    ],
  },
] satisfies readonly EducationItem[];

export const aboutSkills = [
  {
    group: 'Backend',
    items: ['Java', 'Kotlin', 'Spring Boot', 'Go', 'Node.js (Nitro)'],
  },
  {
    group: 'Infra / Data',
    items: [
      'PostgreSQL',
      'Redis',
      'MinIO',
      'Docker Compose',
      'Traefik',
      'Authentik (OIDC)',
      'Cloudflare',
    ],
  },
  {
    group: 'Desktop / TS',
    items: ['TypeScript', 'Electron'],
  },
  {
    group: 'Frontend (보조)',
    items: ['Vue/Nuxt', 'React'],
  },
  {
    group: 'Delivery',
    items: ['GitHub Actions', 'GHCR', 'AWS', 'Netlify'],
  },
] as const satisfies readonly SkillGroup[];

export const aboutProjects = [
  {
    id: 'a11ymarket',
    title: 'A11yMARKET',
    role: '팀장 · 개발 리드 · 4인 · 2025.10–2025.12',
    teaser: '웹 접근성·AI로 정보 격차를 줄이는 중개 쇼핑몰 · 멀티캠퍼스 최우수',
    techStack: [
      'Spring Boot (Java/Kotlin)',
      'JPA',
      'JDSL',
      'React',
      'Zustand',
      'TanStack Query',
      'OracleDB/PostgreSQL',
      'Redis',
      'S3',
      'OAuth2/JWT',
      'Docker',
      'GitHub Actions',
    ],
    features: [
      '도메인별 패키지·계층형 Spring 서버와 REST(URI 버저닝)·DTO/Mapper 격리',
      '관리자 API/UI, JWT·OAuth2 Filter/Advice·에러 핸들링',
      '상품 이미지 LLM 요약으로 스크린리더용 텍스트 접근성 보완',
      '접근성 UI(고대비·하이라이트 등)를 a11y-engine 라이브러리로 분리',
      'PR마다 actions-runner QA 컨테이너·DNS로 검증 자동화',
    ],
    challenges: [
      '이미지 중심 상품 설명 → LLM 분석 API/UI로 시각 정보 소외 완화',
      'PR마다 수동 QA → self-hosted Actions runner로 리뷰·검증 자동화',
      'Git과 분리된 Jenkins 배포 → GitHub Actions·Docker로 CI/CD 통합·스토리지 네트워크 분리',
    ],
    learnings: [
      'fetch join / EntityGraph로 N+1을 줄이고, Kotlin·JDSL로 동적 쿼리·널 안정성 개선 중',
      'RDB·Redis·오브젝트 스토리지를 역할별로 나누는 인프라 설계',
      '멀티캠퍼스 Java 풀스택 아카데미 과정 프로젝트 최우수(2025.12)',
    ],
    links: [
      { label: 'Server', href: 'https://github.com/gscd-dev/a11y-market-server' },
      { label: 'Web', href: 'https://github.com/gscd-dev/a11y-market-web' },
      { label: 'Engine', href: 'https://github.com/gscd-dev/a11y-engine' },
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=SUjhHUoBB_Y' },
      { label: 'Docs', href: 'https://github.com/gscd-dev/A11yMARKET-Resources' },
    ],
  },
  {
    id: 'croffle',
    title: 'croffle',
    role: '팀장 · 아키텍트 · 메인 프로세스 리드 · 5인',
    teaser: '확장 가능한 Electron 생산성/일정 앱 · Release 6+ · 팀 실사용',
    techStack: [
      'Electron',
      'Vue',
      'TypeScript',
      'sqlite3',
      'Drizzle',
      'Pinia',
      'Tailwind CSS',
      'shadcn-vue',
      'pnpm monorepo',
      'electron-updater',
      'changeset',
    ],
    features: [
      '메인/렌더러 타입 공유 IPC·Preload, OS 알림·HTTP 래핑 API',
      'sqlite3 + Drizzle 로컬 DB와 확장용 이벤트 버스·리마인더 스케줄러',
      'manifest 기반 확장: Vue 외 JS/React/Svelte 화면 플러그인 가능',
      'GitHub Release·zip으로 확장 설치, electron-updater CI 배포',
      '@croffledev/* 확장 CLI·types npm 배포',
    ],
    challenges: [
      'WinUI 불안정·Linux 미지원 → Electron 재작성으로 Windows/macOS/Linux 지원',
      '확장 스택이 Vue로 고정 → manifest로 렌더 엔드포인트·설정을 분리해 프레임워크 비의존',
    ],
    learnings: [
      '프로세스 내 enum 이벤트 버스로 모듈 간 결합도를 낮추는 설계',
      '플러그인이 메뉴·설정 영역을 할당받아 독립적으로 UI를 제어하는 구조',
      'Release 6+, 팀 실사용·협업 툴 통합을 목표로 유지보수 중',
    ],
    links: [
      { label: 'Repo', href: 'https://github.com/team-croffle/croffle' },
      { label: 'Releases', href: 'https://github.com/team-croffle/croffle/releases' },
      {
        label: 'README',
        href: 'https://github.com/team-croffle/croffle/blob/master/README.ko.md',
      },
    ],
  },
  {
    id: 'my-blog',
    title: 'my-blog',
    role: 'Solo · Nuxt 4 SSR · Nitro BFF · 2026.07–현재',
    teaser: 'blog.bluenyang.kr · Directus GraphQL + Netlify Edge 운영 블로그',
    techStack: [
      'Nuxt 4',
      'Vue 3',
      'Nitro BFF',
      'Directus GraphQL',
      'Tailwind CSS v4',
      'Redis',
      'Netlify Edge',
      'Yarn Berry',
    ],
    features: [
      '브라우저/SSR → composables → Nitro `/api/*` → Directus GraphQL BFF',
      '페이지별 GraphQL 쿼리로 CMS 호출을 최초 2회·이후 1회로 축소',
      'RSS·sitemap·slug 생성(directus-extensions)과 Redis 캐시 무효화',
      '멀티 사이트용 스키마·권한·공유 Nuxt 패키지/CLI npm 배포',
    ],
    challenges: [
      'Tistory·정적 md 빌드 한계 → Nuxt SSR + Directus로 이전, 구 URL 리다이렉트로 유입 유지',
      '멀티 블로그 CMS 통합 → 스키마·권한·트리거로 서비스 간 콘텐츠 격리',
      'Edge SSR에서 본문 미포함 → useRequestFetch·slug 정규화로 GSC 색인 정상화',
    ],
    learnings: [
      'BFF에서 쿼리 빌드·데이터 가공을 맡아 프론트 composable을 단순화',
      '공개 콘텐츠는 OIDC 없이, 관리 대시보드에서 CMS를 연동하는 운영 분리',
      '티스토리 이전 포함 포스트 48편 운영 중',
    ],
    links: [
      { label: 'Live', href: 'https://blog.bluenyang.kr' },
      { label: 'Repo', href: 'https://github.com/bluenyang/my-blog' },
      {
        label: 'Directus ext.',
        href: 'https://github.com/bluenyang/directus-extensions',
      },
    ],
  },
  {
    id: 'porg',
    title: 'porg',
    role: 'Solo · Go · 2026.06–현재',
    teaser: 'PostgreSQL wire protocol부터 구현하는 실험용 DBMS',
    techStack: ['Go 1.26+', 'PostgreSQL FE/BE wire protocol', 'TCP :5432'],
    features: [
      '완성된 Postgres 대신 FE/BE 계약을 직접 구현하는 학습·실험용 엔진',
      'cmd/porg 진입점과 internal/wire 프로토콜 계층 분리',
      '로드맵: Wire → 인메모리 → 영속성 → 타입/SQL 호환',
    ],
    challenges: [
      '클라이언트가 기대하는 Startup 핸드셰이크를 모름 → StartupMessage 파싱으로 user/database 확인',
    ],
    learnings: [
      'SQL/스토리지보다 wire protocol을 먼저 두면 기존 클라이언트와 같은 계약으로 붙일 수 있음',
      '단계마다 “쓸 수 있는 상태”를 정의하는 로드맵이 실험 범위를 통제함',
      '다음 마일스톤: AuthenticationOk · ReadyForQuery',
    ],
    links: [{ label: 'Repo', href: 'https://github.com/bluenyang/porg' }],
    badge: '진행 중',
  },
] satisfies readonly ProjectItem[];

export const aboutExperiences = [
  {
    id: 'croffle-dev',
    title: 'Croffle Dev.',
    org: 'Team Croffle',
    period: '2024.09 – 현재',
    role: '개발 리드 / 아키텍트',
    teaser: '확장형 Electron 생산성 앱의 메인 프로세스·배포를 리드',
    bullets: [
      '5인 팀에서 croffle 설계·메인 프로세스·확장 로딩·배포 담당',
      '교내 수상작을 Electron으로 재작성해 크로스플랫폼으로 운영',
      'Release 6+, @croffledev/* npm, 팀 실사용 유지보수',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/team-croffle' }],
  },
  {
    id: 'homelab',
    title: 'Homelab',
    org: 'Self-hosted · Rocky Linux',
    period: '운영 중',
    role: '인프라 · 운영',
    teaser: 'Traefik·OIDC·통합 DB 기반 Docker 홈랩으로 서비스·CI를 운영',
    detailSummary:
      "Rocky Linux + Docker로 리버스 프록시·OIDC·통합 DB 기반 self-hosted를 운영합니다. Cloudflare DNS 앞단, Traefik(Let's Encrypt), Authentik SSO, 통합 PostgreSQL·Redis·MinIO, AFFiNE/oCIS/Outline 등 협업 도구와 croffle-poll·Directus(CMS)를 Compose로 묶고, GHCR CI/CD로 앱을 올립니다.",
    bullets: [
      '서비스별 DB 분산 → 통합 PostgreSQL · 네트워크 격리로 백업·운영 단순화',
      '인증 파편화 → Authentik OIDC 통합 · SSO · RBAC',
      "Let's Encrypt + Traefik으로 TLS 자동 발급·갱신",
      'GitHub Actions → GHCR → Compose 자동 배포 파이프라인',
      'AFFiNE / oCIS / Outline / Directus / croffle-poll 등 Compose 운영',
    ],
    hasDetailPanel: true,
  },
] satisfies readonly ExperienceItem[];

export const aboutContact = {
  email: 'me@bluenyang.kr',
  github: 'https://github.com/bluenyang',
  blog: 'https://blog.bluenyang.kr',
  linkedin: 'https://www.linkedin.com/in/gyutae-ahn-35a860366',
} as const satisfies AboutContact;

/** Shared glass panel classes for About sections */
export const glassPanelClass = 'rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl';
