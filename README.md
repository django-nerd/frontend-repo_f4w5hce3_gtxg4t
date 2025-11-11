Studio English — Frontend

Overview
A premium, calm, and focused frontend for an English communication platform. Built with React 18 + TypeScript and Emotion for styling. No backend — all data is mocked.

Stack
- React 18 with TypeScript (strict)
- Vite
- Emotion (styled + theme)
- React Router (code-split routes)

Run locally
- npm install
- npm run dev

Structure
- theme: design tokens and ThemeProvider (light/dark)
- components: reusable, accessible UI primitives (buttons, inputs, cards, modals, tooltip)
- pages: example screens (Landing, Catalog, Course Detail, Lesson Player, Live Class, Chat, Profile, Settings, 404)
- data: mocked JSON-like data

Accessibility
- Keyboard accessible controls, focus styles, aria labels on interactive components
- Color contrast meets WCAG AA with muted palette and strong text colors
- Reduced motion respected via prefers-reduced-motion

Notes
- Pages use mocked media and simple placeholders for audio/video
- Routes are dynamically imported for performance
- Ready for i18n: copy is written in plain components and can be swapped with translations
