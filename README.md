## Descriptions [![CircleCI](https://circleci.com/gh/wszgxa/react-ssr-skeleton.svg?style=svg)](https://circleci.com/gh/wszgxa/react-ssr-skeleton)

A react server side skeleton repo.

## Prerequisites

    node:8.9.1 (nvm use)
    yarn

## DEV
``` bash
yarn install
yarn start:dev
```

## Prod
```bash
yarn start
yarn start:prod
```

## Todo list

- [x] handle css in prod
- [x] performance [best-practice-performance](https://expressjs.com/en/advanced/best-practice-performance.html)
- [x] spike `babel-plugin-css-modules-transform` influence in prod
- [x] build prod js file
- [x] organize the build process
- [x] add flow type check
- [ ] redundant http request in client side
- [x] CI