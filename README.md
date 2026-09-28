# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Performance & FE-10

The 3D scene uses simple box and cylinder geometry instead of a large external model, keeping the scene lightweight. The canvas is capped at a device pixel ratio of 1–1.5 to reduce GPU work on high-density screens. The mug geometry was also reduced from 32 to 16 segments without a noticeable visual difference.

The 3D canvas has a loading fallback and a reduced-motion fallback. On smaller screens, the scene height is reduced to 420px to keep the experience usable on mobile devices.

During testing, the scene remained responsive during orbiting and color changes on desktop. The simple geometry and limited object count help keep frame-rate costs low.