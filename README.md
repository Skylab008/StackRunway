# StackRunway

**Know the balance before the bills land.**

StackRunway is a free, private developer subscription runway calculator. Add subscriptions, infrastructure, API credits, domains and annual renewals, then see the minimum opening balance required to survive the next 30, 60 or 90 days without a failed payment.

The primary answer is intentionally direct:

> You need $684.20 in this account on 1 September to cover every scheduled development expense through 30 November.

It also identifies the most expensive week, annual costs hidden behind monthly equivalents, an upcoming funding gap and the savings created by pausing an expense.

## Use StackRunway

Open the [live GitHub Pages app](https://skylab008.github.io/StackRunway/) or download `index.html` and open it in any modern browser.

No installation, account, bank connection, build command or server is required.

## Privacy and backups

All data stays in the browser. StackRunway autosaves after every change using `localStorage`. Use **Export JSON** to keep a portable backup and **Restore JSON** to recover it after clearing browser data or moving to another device.

The repository contains no analytics, cookies, trackers or third-party runtime dependencies.

## Run locally

Clone the repository and open `index.html`:

```bash
git clone https://github.com/Skylab008/StackRunway.git
cd StackRunway
open index.html
```

You can also serve the directory through any static file server. The result is identical because the app has no backend.

## Calculation model

- The selected start date is day one of the runway.
- The selected horizon includes 30, 60 or 90 calendar days.
- Recurring expenses are projected from their next billing date.
- Month-end dates remain at the last valid day when a later month is shorter.
- Paused expenses remain in the planner but are removed from the active calculation.
- The funding-gap view compares the available opening balance with cumulative scheduled charges.

StackRunway is a planning tool. It does not predict taxes, usage-based overages, price changes or exchange-rate movements.

## Make it yours

Fork the repository or copy the single `index.html` file into another static site. Everything needed to run the app — interface, styles and calculation logic — is contained in that file.

Contributions and thoughtful improvements are welcome through issues and pull requests.

## Licence

[MIT](LICENSE)
