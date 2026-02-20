# GEMINI.md - PID Graphs Data Visualisation Client

## Project Overview
This project is a React-based data visualization client that provides various interactive charts (Line, Bar, Pie, Radar, etc.) using multiple visualization libraries. It acts as a frontend for a separate data server.

### Main Technologies
- **Framework:** React (v16.12.0)
- **State Management:** Redux (v4.0.5) with React-Redux
- **Routing:** React-Router-Dom (v5.3.3)
- **Visualisation:** 
  - **Nivo:** Extensive use of Nivo charts (Bar, Line, Pie, Bubble, Stream).
  - **ApexCharts:** Used for Area, Bar, Heatmap, Line, Pie, Radar, and Radial charts.
  - **Recharts:** Used for Area, Bar, Line, Pie, and Stacked charts.
- **Styling:** Sass (SCSS)
- **API Client:** Axios (fetching data from a backend server, defaults to `http://localhost:8080`).
- **Build System:** Webpack (v5) with Babel (modular config: `common`, `dev`, `prod`).
- **Server:** Express server (`server/server.js`) to serve the production build.

### Architecture
- **`src/components/`**: UI components categorized by chart library (`apex/`, `nivo/`, `recharts/`) and functional groups (`layout/`, `modal/`, `controlls/`).
- **`src/container/`**: Page-level components that orchestrate data fetching and render specific chart types.
- **`src/lib/`**: Core logic including `DataFetcher.js` for API calls and `reducers/` for Redux state management.
- **`src/styles/`**: Centralized Sass styles.
- **`server/`**: Express server for serving the `dist/` folder in production.

---

## Building and Running

### Development
To start the application in development mode with hot module replacement:
```bash
npm run dev
```
This runs the Webpack Dev Server on `localhost:3000`.

### Production Build
To create a production-ready bundle in the `dist/` directory:
```bash
npm run build
```

### Running the Production Server
After building, you can serve the application using the included Express server:
```bash
npm start
```
By default, the server runs on port `3000`.

### Linting
To run ESLint across the source files:
```bash
npm run lint
```
Or to automatically fix issues:
```bash
npm run lint:fix
```

---

## Development Conventions

### Data Fetching
- All API requests should be defined in `src/lib/DataFetcher.js`.
- The application expects a backend server running at `http://localhost:8080`.

### State Management
- Redux is used for global state. Reducers are located in `src/lib/reducers/`.
- Use the standard Redux pattern: actions -> reducers -> store.

### Styling
- Use `.scss` files in `src/styles/`.
- Follow the existing structure: `base/` for global styles and `component/` for specific UI elements.

### Visualization Libraries
- When adding a new chart, choose the library that best fits the requirement (Nivo for complex d3-based charts, ApexCharts for polished SVG charts, or Recharts for simpler React-native SVG charts).
- Ensure consistent styling by wrapping charts in the `GraphComponent` or similar layout components found in `src/components/layout/`.

---

## Roadmap & Planning

For details on the project's modernization strategy, dependency upgrades, and architectural improvements, please refer to [PROJECT_PLAN.md](./PROJECT_PLAN.md).
