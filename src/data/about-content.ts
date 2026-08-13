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
  summary: string;
  links: readonly AboutLink[];
  badge?: string;
};

export type HomelabContent = {
  summary: string;
  bullets: readonly string[];
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

export type AboutSectionId = 'intro' | 'skills' | 'projects' | 'homelab' | 'contact';

export const aboutSections = [
  { id: 'intro', label: 'Intro' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'homelab', label: 'Homelab' },
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
    role: '팀장 · 개발 리드 · Spring Boot',
    summary:
      '접근성 중심 중개 쇼핑몰. Spring Boot로 도메인·인증(JWT/OAuth)·인프라를 설계하고, 상품 이미지 LLM 분석으로 스크린리더 접근성을 보완했습니다. PR마다 actions-runner QA를 자동화하고, Jenkins 분리 배포를 GitHub Actions·Docker로 통합했습니다. 멀티캠퍼스 프로젝트 최우수. Java→Kotlin·JDSL 진행 중.',
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
    role: '메인 프로세스 · 확장 · 배포 리드',
    summary:
      '확장 가능한 Electron·Vue 생산성/일정 데스크톱 앱. WinUI 한계를 Electron 재작성으로 풀어 크로스플랫폼과 electron-updater CI를 구축했고, manifest 기반 확장으로 프레임워크 비의존 플러그인을 설계했습니다. Release 6+, 팀 실사용, @croffledev/* npm.',
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
    role: 'Nuxt 4 SSR · Nitro BFF · Directus',
    summary:
      'blog.bluenyang.kr 운영. GraphQL로 페이지당 CMS 호출을 줄이고, Edge SSR 본문 미포함을 useRequestFetch·slug 정규화로 해결해 GSC 색인을 정상화했습니다. 멀티 사이트 스키마·공유 패키지/CLI를 npm 배포. 티스토리 이전 포함 포스트 48편.',
    links: [
      { label: 'Live', href: 'https://blog.bluenyang.kr' },
      { label: 'Repo', href: 'https://github.com/bluenyang/my-blog' },
    ],
  },
  {
    id: 'porg',
    title: 'porg',
    role: 'Go · PostgreSQL wire protocol',
    summary:
      'PostgreSQL wire protocol 호환을 목표로 하는 실험용 DBMS. 클라이언트가 말하는 FE/BE 계약을 직접 구현하는 것이 목적입니다. 현재 StartupMessage 파싱·접속 파라미터 확인 단계이며, Auth/ReadyForQuery → 인메모리 → 영속성 → 타입/SQL 호환으로 확장할 예정입니다.',
    links: [{ label: 'Repo', href: 'https://github.com/bluenyang/porg' }],
    badge: '진행 중',
  },
] satisfies readonly ProjectItem[];

export const aboutHomelab = {
  summary:
    "Rocky Linux + Docker로 리버스 프록시·OIDC·통합 DB 기반 self-hosted를 운영합니다. Cloudflare DNS 앞단, Traefik(Let's Encrypt), Authentik SSO, 통합 PostgreSQL·Redis·MinIO, AFFiNE/oCIS/Outline 등 협업 도구와 croffle-poll·Directus(CMS)를 Compose로 묶고, GHCR CI/CD로 앱을 올립니다.",
  bullets: [
    '서비스별 DB 분산 → 통합 PostgreSQL · 네트워크 격리로 백업·운영 단순화',
    '인증 파편화 → Authentik OIDC 통합 · SSO · RBAC',
    "Let's Encrypt + Traefik으로 TLS 자동 발급·갱신",
    'GitHub Actions → GHCR → Compose 자동 배포 파이프라인',
  ],
} as const satisfies HomelabContent;

export const aboutContact = {
  email: 'me@bluenyang.kr',
  github: 'https://github.com/bluenyang',
  blog: 'https://blog.bluenyang.kr',
  linkedin: 'https://www.linkedin.com/in/gyutae-ahn-35a860366',
} as const satisfies AboutContact;

/** Shared glass panel classes for About sections */
export const glassPanelClass = 'rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl';
