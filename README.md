cat > README.md << 'EOF'

# React Sprint Learning Workbook

**Status:** Month 7 (React Fundamentals) · Blocks B1–B9 Complete · B10 In Progress

## What This Is

This repository is a structured, Pomodoro-driven learning journal for React fundamentals. It contains incremental experiments, component drills, and small exercises built while working through a 12-month frontend engineering roadmap.

Every commit corresponds to a learning block. The code evolves as concepts are introduced, refactored, and sometimes deliberately broken to understand why things work.

## Roadmap Context

| Month | Focus                                                       | Status         |
| ----- | ----------------------------------------------------------- | -------------- |
| 1–5   | HTML, CSS, JavaScript, DOM                                  | ✅ Complete    |
| 6–7   | React (Vite, JSX, Components, Props, State, Hooks, Effects) | 🔄 In Progress |
| 8–9   | Advanced React, TypeScript, Backend Basics                  | ⏳ Upcoming    |
| 10–11 | Portfolio, CV, LeetCode, Interview Prep                     | ⏳ Upcoming    |
| 12    | Job Applications                                            | ⏳ Upcoming    |

## Completed Blocks

- **B1** — Vite scaffold, project structure, `main.jsx` entry point
- **B2** — JSX syntax, expressions, `className`, self-closing tags, single root element
- **B3** — Function components, composition, file structure, export/import
- **B4** — Props, destructuring, one-way data flow, `children` prop
- **B5** — `useState`, re-renders, state vs. plain variables
- **B6** — Event handling, controlled inputs, forms, `preventDefault`
- **B7** — Conditional rendering: ternary `? :`, `&&` short-circuit, early returns
- **B8** — Lists & `.map()`, `key` prop, why index-as-key breaks on reorder
- **B9** — `useEffect`, dependency array `[]`, fetch on mount, cleanup concept

## Current Block

- **B10** — React To-Do App (first shipped project, separate repo: `react-todo-app`)

## Tech Stack

- React 19 (functional components + Hooks)
- Vite
- ESLint

## How to Run

```bash
npm install
npm run dev
```
