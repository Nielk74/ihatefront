# Component Notes

`ihatefront` components are HTML-first. Start with semantic markup, add `ih-*` classes for presentation, and add `data-ih-*` attributes only when a vanilla JavaScript plugin is needed.

## Shared API

Most visual components use a simple class stack:

```html
<button class="ih-btn ih-btn--solid ih-btn--primary">Save</button>
```

Variants:

- `solid`
- `soft`
- `outlined`
- `plain`

Colors:

- `neutral`
- `primary`
- `success`
- `warning`
- `danger`

Sizes:

- `sm`
- default
- `lg`

## Accessibility

- Use native controls before custom controls.
- Preserve labels with `.ih-label`, `aria-label`, or visible text.
- Do not communicate status by color alone. Use `.ih-status` text and row labels.
- Use `button` elements for actions and links for navigation.
- Keep modal and drawer close controls visible and keyboard reachable.

## Dashboard Patterns

The original application example that inspired this framework should not be committed as a repo root `index.html`. Use `ih-sidebar-layout`, `ih-meta-bar`, `ih-legend`, `ih-status`, and `ih-status-table` to rebuild that class of page with reusable parts and anonymized data.
