# ihatefront

`ihatefront` is a small, light-theme frontend framework for building clean product interfaces with plain HTML, CSS, and vanilla JavaScript. It is intentionally close to Bootstrap in delivery: import one CSS file, add semantic classes, and opt into small JS plugins when a component needs behavior.

The visual direction is modern, lean, and utilitarian: closer to GitHub UI and Joy UI than to a marketing kit. Components favor compact spacing, clear borders, CSS variables, accessible states, and predictable class names.

## Status

This repository is the initial public scaffold. The API is expected to move while the component set is hardened.

## Quick Start

Use the compiled files:

```html
<link rel="stylesheet" href="dist/ihatefront.css">
<script type="module" src="dist/ihatefront.js"></script>
```

Create a button:

```html
<button class="ih-btn ih-btn--solid ih-btn--primary">Deploy</button>
<button class="ih-btn ih-btn--outlined ih-btn--neutral">Cancel</button>
```

## Repository Layout

```text
src/
  css/                 Framework source styles
  js/                  Vanilla JavaScript plugins
  tokens/              Design token source
dist/                  Generated release artifacts
docs/                  Component showcase and examples
skills/ihatefront/     Codex skill for using ihatefront well
scripts/               Build, test, and local docs server scripts
tests/                 Lightweight repository checks
```

## Component Set

Foundations: tokens, reboot, typography, links, dividers, aspect ratio, density, shadows, utilities.

Layout: container, grid, stack, cluster, app shell, sidebar layout, top bar, sheets.

Inputs: button, icon button, button group, toggle group, input, textarea, checkbox, radio, switch, slider, autocomplete.

Data display: avatar, badge, chip, list, table, status indicator, status legend, timeline, tooltip.

Feedback: alert, progress, spinner, skeleton, snackbar.

Surfaces: card, accordion, modal, drawer.

Navigation: breadcrumbs, nav list, menu, tabs, stepper, link stack.

Operational patterns: dense status table, refresh metadata bar, dashboard shell.

## Scripts

```bash
npm run build
npm test
npm run dev
```

`npm run build` copies and minifies source files into `dist/` without external build dependencies.

`npm run dev` serves the docs and compiled assets locally.

## Docs

Open `docs/index.html` after running `npm run build`, visit the hosted docs at https://nielk74.github.io/ihatefront/, or run:

```bash
npm run dev
```

The docs intentionally use the compiled files from `dist/` so broken packaging is visible immediately.

## Design Principles

- White theme only. No alternate theme API is exposed.
- Use global variants: `solid`, `soft`, `outlined`, and `plain`.
- Use semantic colors: `neutral`, `primary`, `success`, `warning`, and `danger`.
- Keep component classes composable and HTML-first.
- Make dense app surfaces readable without turning them into heavy cards.
- Do not rely on color alone for status. Pair status color with labels or indicators.

## License

MIT.
