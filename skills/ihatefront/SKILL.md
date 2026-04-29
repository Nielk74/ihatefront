# ihatefront Skill

Use this skill when building or reviewing UI that uses the `ihatefront` framework.

## Framework Intent

`ihatefront` is a light-theme-only frontend framework for clean product interfaces. It should feel lean, modern, compact, and utilitarian, closer to GitHub UI or Joy UI than to decorative marketing templates.

## Core Practices

- Import `dist/ihatefront.css` for styling and `dist/ihatefront.js` only when interactive components are present.
- Start from semantic HTML. Add `ih-*` classes for appearance.
- Prefer the global variants `solid`, `soft`, `outlined`, and `plain`.
- Prefer semantic colors `neutral`, `primary`, `success`, `warning`, and `danger`.
- Use `.ih-container`, `.ih-grid`, `.ih-stack`, and `.ih-cluster` for layout before writing custom CSS.
- Use `.ih-sheet` for unbranded surfaces and `.ih-card` for repeated framed content.
- Keep cards at 8px radius unless a component specifically uses a larger dialog radius.
- Do not add alternate theme toggles or alternate theme tokens. `ihatefront` is white-theme only.

## Component Guidance

- Buttons: combine `.ih-btn` with one variant class and one color class, such as `.ih-btn--solid.ih-btn--primary`.
- Forms: wrap fields in `.ih-field`, use `.ih-label`, then `.ih-input` or `.ih-textarea`, and finish with `.ih-helper` when helpful. Use autocomplete as the option picker.
- Input groups: use `.ih-input-group` and `.ih-input-addon` for compact prefixes, suffixes, and filter bars.
- Tables: wrap tables in `.ih-table-wrap`, use `.ih-table`, and choose `.ih-table--dense` for operational dashboards.
- Status: use `.ih-status` with explicit text. Add status classes such as `.ih-status--success` and row classes such as `.is-success`.
- Timeline: use `.ih-timeline` for status history and `.ih-timeline--dense` for dense operational history panels. Pair colored segments with labels, legends, or a nearby table because the bars are a visual summary.
- Navigation: use `.ih-tabs` with WAI-ARIA tab roles. The JS plugin handles activation when `data-ih-tabs` is present.
- Menus, modals, drawers, accordions, autocomplete, and snackbars require the matching `data-ih-*` attributes shown in `docs/index.html`.

## Accessibility Rules

- Never rely on color alone. Pair colors with text, icons, or status labels.
- Keep focus states visible. Do not remove the default `:focus-visible` treatment.
- Tooltips must have a meaningful `data-ih-tooltip` value and must not contain essential-only information.
- Modals and drawers need obvious close buttons.
- Use native `input`, `textarea`, `button`, `table`, `nav`, and heading elements wherever possible.

## Dashboard Rewrite Pattern

For legacy operational pages, map old custom structure to:

- Page shell: `.ih-sidebar-layout`, `.ih-sidebar`, `.ih-main`, `.ih-topbar`
- Status metadata: `.ih-meta-bar`
- Legend: `.ih-legend` and `.ih-legend__item`
- Environment sections: `.ih-section`, `.ih-heading`, `.ih-sheet`
- Deployment grid: `.ih-table-wrap`, `.ih-table`, `.ih-table--dense`, `.ih-status-table`
- Status history: `.ih-timeline`, `.ih-timeline--dense`, `.ih-timeline__segment--success`, `.ih-timeline__segment--warning`, `.ih-timeline__segment--danger`, `.ih-timeline__segment--unknown`
- Links: `.ih-link-stack`

Do not copy private hostnames, database names, fake deployment versions, or monolithic inline HTML/CSS/JS examples into a public repo.
