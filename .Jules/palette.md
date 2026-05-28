## 2024-05-18 - Accessibility Refinements
**Learning:** Found multiple common patterns for a11y improvements: interactive `div`s functioning as buttons without keyboard support (`role="button"`, `tabindex`, `onkeydown`), icon-only buttons missing `aria-label`s, and custom toggle switches using `<span>` instead of associated `<label>` elements.
**Action:** Always check custom interactive elements for keyboard and screen reader accessibility and convert them using semantic HTML or ARIA equivalents.
