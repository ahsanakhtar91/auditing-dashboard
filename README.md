# Auditing Dashboard

Digital transformation and compliance tracking platform.

**Live Demo:** https://auditing-dashboard-two.vercel.app/

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- Radix UI components

## How It Was Built

Started with Vite + React + TypeScript setup. Built reusable components (`SideNav`, `Header`, `Icon` and more) in `components/` folder (most of the reusable components are in `components/core`), with page screens in `screens/`. Used Tailwind for styling to match the design mockups. Radix UI provides accessible primitives for Select, Tabs, and Avatar components. Navigation is state-based (no router) since there are only two screens.

## Notes

- Data is static (no backend)

## Improvements that could be done with more time

- API integration (proper data coming from API that should change for each perspective)
- Better Mobile responsiveness
- Proper routing (React Router - where each perspective route is like `/perspective/[id]`)
- Unit tests
