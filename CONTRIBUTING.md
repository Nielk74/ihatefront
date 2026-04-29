# Contributing

Thanks for helping make `ihatefront` sharper.

## Local Workflow

```bash
npm install
npm run build
npm test
npm run dev
```

Keep component work small and documented in `docs/index.html`. New components should include:

- CSS source in `src/css/ihatefront.css`.
- A docs example using `dist/` output.
- JS behavior in `src/js/ihatefront.js` only when HTML and CSS are not enough.
- A short note in `skills/ihatefront/SKILL.md` when usage guidance changes.

## Component Guidelines

- Prefer semantic HTML and progressive enhancement.
- Preserve keyboard and screen reader access for interactive components.
- Use CSS custom properties for theming hooks.
- Follow the existing class naming pattern: `ih-component`, `ih-component__part`, `ih-component--variant`.
- Keep light-theme support complete before adding dark-theme surface area.

## Pull Requests

Run `npm run build` and `npm test` before opening a PR. Include screenshots for visual changes when useful.
