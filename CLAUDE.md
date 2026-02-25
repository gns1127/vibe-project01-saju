# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 명령어

```bash
pnpm dev       # 개발 서버 시작
pnpm build     # 프로덕션 빌드
pnpm start     # 프로덕션 서버 시작
pnpm lint      # ESLint 실행
```

테스트 프레임워크는 설정되어 있지 않습니다.

## 아키텍처

### 라우트 그룹 (이중 레이아웃 패턴)

Next.js 라우트 그룹을 사용해 두 개의 독립적인 레이아웃을 구성합니다. 폴더명은 URL에 포함되지 않습니다.

- `app/(marketing)/` — `Header` + `Footer` 레이아웃의 공개 페이지. 현재 랜딩 페이지(`/`)만 존재.
- `app/(dashboard)/` — 접을 수 있는 `Sidebar` + 상단 헤더 레이아웃의 앱 페이지. 현재 `/dashboard`만 존재.

루트 레이아웃 `app/layout.tsx`에서 폰트(Geist), `ThemeProvider`, `Sonner` 토스트를 처리합니다.

### 컴포넌트 구조

- `components/ui/` — shadcn/ui 컴포넌트 (직접 수정 금지; `pnpm dlx shadcn@latest add <name>` 으로 추가)
- `components/layout/` — 구조적 컴포넌트: `Header`, `Footer`, `SidebarNav`, `ThemeProvider`, `ThemeToggle`
- `components/marketing/` — 랜딩 페이지 섹션: `Hero`, `Features`, `CTA`
- `lib/utils.ts` — `cn()` 유틸리티 함수 (clsx + tailwind-merge)
- `hooks/use-mobile.ts` — `useIsMobile()` 훅 (기준점: 768px)

### TailwindCSS v4 (CSS-first)

`tailwind.config.ts` 파일이 없습니다. 모든 설정은 `app/globals.css`에 있습니다.
- `@import "tailwindcss"` 와 `@import "tw-animate-css"` 가 기존 지시어와 플러그인을 대체
- `@custom-variant dark (&:where(.dark, .dark *))` 로 `dark:` 접두사 활성화
- 색상은 OKLCH를 사용하며 `:root` / `.dark` 블록에 CSS 변수로 정의 (`@layer base` 내부가 아닌 최상위에 위치)
- `@theme inline` 으로 CSS 변수를 Tailwind 유틸리티 클래스에 매핑

### shadcn/ui

- 스타일: `new-york`; 기본 색상: `zinc`; 아이콘 라이브러리: `lucide-react`
- `components.json`의 `"tailwind": { "config": "" }` 설정은 Tailwind v4 호환을 위해 필수
- 컴포넌트 설치: `pnpm dlx shadcn@latest add <component-name>` (`init` 생략 — 설정 파일이 이미 존재)
- `sidebar` 컴포넌트는 `tooltip`을 피어 의존성으로 자동 설치

### 경로 별칭

`@/` 는 프로젝트 루트를 가리킵니다 (`tsconfig.json`에 설정됨).
