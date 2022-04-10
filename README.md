# ci-speed-ui
Frontend for CI Speed

## Requirements

* NVM

## Install

```
nvm use
npm install
npx next telemetry disable
```

## Run

```
npm start
```

## Deploy

```
npm run dist
```

This will automatically commit and push any changes in the `doc` directory.

It will be deployed automatically to github pages.

## Todo

* Sort out CSS safari deployment
* Signup
* Login
* Viewing test runs
* Viewing test results
* Most failing tests
* Longest tests
* Flakey tests
