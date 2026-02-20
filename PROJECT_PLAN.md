# PID Graphs - Modernization & Improvement Plan

This document outlines the strategic roadmap for improving the PID Graphs client application. The goal is to move from a legacy React 16 codebase to a modern, maintainable, and high-performance TypeScript React 18 application.

## 🏁 Phase 1: Stabilization & Tooling (Current Focus)
*Goal: Ensure the build is stable, fast, and the code is clean before attempting major upgrades.*

- [x] **Webpack Cleanup:** Modernize Webpack 5 config, split into dev/prod.
- [x] **Script Rework:** Standardize `npm run dev/build`.
- [x] **File Cleanup:** Remove unused assets and legacy config files.
- [x] **Linting & Formatting:** 
    - Integrated Prettier with ESLint.
    - Standardized formatting rules in `.prettierrc.js`.
    - Applied formatting across the `src/` directory.
- [ ] **Testing Infrastructure:** 
    - **Frameworks:** Jest + React Testing Library (Unit/Integration), Playwright (E2E), MSW (API Mocking).
    - **Scope:**
        - **Unit:** Utility functions (`lib/Functions.js`) and atomic components (`SpinnerComponent`).
        - **Integration:** Data fetching containers (e.g., `NivoBarContainer`) mocking the API with MSW.
        - **E2E:** Basic smoke tests for navigation and chart rendering.
    - [x] Install and configure Jest & RTL.
    - [x] Create initial unit and component tests.
    - [x] Setup MSW for API mocking.
    - [x] Install and configure Playwright for E2E.

## 🚀 Phase 2: Dependency Upgrades (The "Big Lift")
*Goal: Bring libraries up to current standards to unlock performance and security benefits.*

- [x] **React Upgrade (16 -> 17 -> 18):** 
    - Upgraded to React 18.2.0.
    - Switched to `createRoot` API in `src/index.js`.
    - Updated `@testing-library/react` to v13.

- [x] **Router Migration:** 
    - Upgraded to `react-router-dom` v6.
    - Refactored `App.js` to use `Routes` and `element`.
    - Replaced `useHistory` with `useNavigate`.
- [x] **UI Library Upgrade:** 
    - Upgraded `@material-ui/core` (v4) to `@mui/material` (v5).
    - Migrated from JSS (`makeStyles`) to the `sx` prop and Emotion.
    - Updated all MUI imports across the codebase.
- [x] **Chart Library Consolidation & Modernization:** 
    - Decided to keep Nivo, ApexCharts, and Recharts as a showcase.
    - Upgraded all three libraries to their latest versions (React 18 compatible).
    - Verified compatibility with existing functional component patterns.

## 🏗️ Phase 3: Architectural Refactoring
*Goal: Improve maintainability and developer experience.*

- [ ] **State Management:**
    - Replace verbose legacy Redux (actions/reducers/types) with **Redux Toolkit (RTK)**.
    - Evaluate **React Query (TanStack Query)** for server state (replacing `DataFetcher.js` + Redux thunks). This is the modern standard for data fetching.
- [ ] **Folder Structure:** 
    - Move from "Library-based" grouping (e.g., `components/nivo/`) to "Feature-based" grouping (e.g., `features/dashboard/`, `features/analytics/`).
    - Colocate styles and tests with components.
- [ ] **TypeScript Migration:**
    - [x] Initial setup (tsconfig, Babel, Webpack).
    - [x] Migrate core utilities (`lib/Functions.ts`).
    - [x] Migrate atomic components (`SpinnerComponent.tsx`).
    - [x] Migrate Redux reducers and state accessors (`lib/reducers/`, `lib/ReduceAccessor.ts`).
    - [x] Migrate application entry points (`index.tsx`, `App.tsx`).
    - [x] Migrate layout components (`components/layout/`).
    - [x] Migrate control components (`components/controlls/`).
    - [x] Migrate chart components (`components/recharts/`, `components/apex/`, `components/nivo/`).
    - [ ] Systematic migration of all other components.
    - [x] Add strict typing for Redux state.
    - [ ] Add strict typing for API responses.

## 🎨 Phase 4: UI/UX & Quality
*Goal: Make it look good and accessible.*

- [ ] **Accessibility (a11y):** Audit color contrast and keyboard navigation.
- [ ] **Responsive Design:** Ensure charts resize gracefully on mobile devices.
- [ ] **CI/CD:** Setup GitHub Actions to run Lint/Test/Build on every push.

---

## Immediate Next Steps
1. **Setup Jest & React Testing Library** (Critical safety net).
2. **Create a basic smoke test**.
3. **Begin TypeScript setup** (can coexist with JS).
