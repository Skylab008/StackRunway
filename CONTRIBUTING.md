# Contributing to StackRunway

StackRunway is deliberately small: a private, local-first developer tool that runs from one HTML file. Contributions are welcome when they preserve that clarity.

## Before opening a pull request

Search existing issues first. For a material feature or behavioural change, open a feature request before writing code so the direction can be agreed without wasting anyone's time.

Bug fixes, accessibility improvements, calculation corrections and careful interface refinements are especially valuable.

## Project principles

- Keep the application usable without an account, backend or build step.
- Keep user financial data inside the browser.
- Do not add analytics, advertising, tracking or bank connections.
- Avoid runtime dependencies unless there is a compelling security or accessibility reason.
- Preserve the downloadable single-file `index.html` edition.
- Use clear language and accessible interaction patterns.

## Development

Open `index.html` directly in a modern browser or serve the repository with any static server.

Run the repository checks before submitting:

```bash
npm test
```

## Pull requests

Keep each pull request focused. Explain the user problem, the change and how it was tested. Include screenshots for visible interface changes. Update `CHANGELOG.md` when the change affects users.

By contributing, you agree that your contribution may be distributed under the repository's [MIT Licence](LICENSE).
