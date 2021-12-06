# SERVER'S EXPLORER APP

Requirements:
[x] Implement login
[x] Display servers list
[x] Make servers list sortable by name/distance
[x] App must work on all modern browsers

Implicit requirements:
[x] App must be production-ready - (functionality, performance, error handling etc.) -> I focused on authentication once I believe security is important, and therefore one extra feature I did was, in case the user refreshes the servers page, he'll be logged out. (I also introduced the option to logout).
[x] There is no design provided but make it visually appealing. -> I got inspired by NordVPN layout.. I didn't put much efforts in the authenticated area due to time, but I hope it's good enough (I'll explain a bit more in the email)

Other expectations:
[x] Use React (or Svelte if you’re applying for more of a web-focused team) -> Done with React'
[x] Don't import too many libraries, keep away from full-featured libraries like bootstrap, material-ui, etc. Utility libraries like lodash,
TailwindCSS etc. are fine. -> I introduced only libs for tooling (webpack, jest, etc), plus, axios for handling api requests and lodash for the sorting.
[] create-react-app is fine for entry/mid-level positions
[x] We like tests (Since built it using react hooks, I found more convenient use RTL for the tests - I introduced some tech debts since I didn't have enough time to cover the entire app, but I setup the tests and included many scenarios, both with unit testing and snapshots)


## Commands

| Command                  | Description                               |
| ------------------------ | ----------------------------------------- |
| `yarn build`             | Generates the production build            |
| `yarn dev`               | Start the app in develop mode             |
| `yarn lint`              | Check for linting issues                  |
| `yarn test`              | Runs the tests                            |
| `yarn test:watch`        | Runs the tests in watch mode              |

## Commit Message Conventions

[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
