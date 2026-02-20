# PID Graphs - Modernization & Improvement Plan

This document outlines the strategic roadmap for improving the PID Graphs client application. The goal is to move from a legacy React 16 codebase to a modern, maintainable, and high-performance TypeScript React 18 application.

## 🏁 Phase 1: Stabilization & Tooling (Current Focus)
*Goal: Ensure the build is stable, fast, and the code is clean before attempting major upgrades.*

- [x] **Webpack Cleanup:** Modernize Webpack 5 config, split into dev/prod.
- [x] **Script Rework:** Standardize `npm run dev/build`.
- [x] **File Cleanup:** Remove unused assets and legacy config files.
- [ ] **Linting & Formatting:** 
    - Ensure `Prettier` is correctly integrated with ESLint.
    - specific formatting rules to avoid "style wars".
- [ ] **Testing Infrastructure:** 
    - Install `Jest` and `React Testing Library`.
    - Create a "Smoke Test" to verify the app mounts and renders without crashing.
    - **Why:** We need tests to ensure subsequent upgrades don't break functionality.

## 🚀 Phase 2: Dependency Upgrades (The "Big Lift")
*Goal: Bring libraries up to current standards to unlock performance and security benefits.*

- [ ] **React Upgrade (16 -> 17 -> 18):**
    - Step 1: Upgrade to React 17 to smooth the transition.
    - Step 2: Upgrade to React 18 (Enable Concurrent features).
- [ ] **Router Migration:** Upgrade `react-router-dom` v5 to v6 (Major breaking changes, requires refactoring routing logic).
- [ ] **UI Library Upgrade:** Upgrade `@material-ui/core` (v4) to `@mui/material` (v5).
- [ ] **Chart Library Consolidation:** 
    - We currently use **Nivo**, **ApexCharts**, and **Recharts**.
    - **Strategy:** Analyze bundle size and usage. Pick 1 primary library (e.g., Nivo or Recharts) and 1 secondary if absolutely needed. Remove the unused ones to significantly reduce bundle size.

## 🏗️ Phase 3: Architectural Refactoring
*Goal: Improve maintainability and developer experience.*

- [ ] **State Management:**
    - Replace verbose legacy Redux (actions/reducers/types) with **Redux Toolkit (RTK)**.
    - Evaluate **React Query (TanStack Query)** for server state (replacing `DataFetcher.js` + Redux thunks). This is the modern standard for data fetching.
- [ ] **Folder Structure:** 
    - Move from "Library-based" grouping (e.g., `components/nivo/`) to "Feature-based" grouping (e.g., `features/dashboard/`, `features/analytics/`).
    - Colocate styles and tests with components.
- [ ] **TypeScript Migration:**
    - Incremental migration. Rename `.js` to `.tsx`.
    - Add strict typing for API responses and Props.

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
