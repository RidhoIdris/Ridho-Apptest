# BTPN-frontend-test

> BTPN Frontend Test is my repo for the solutions of assignment to BTPN hiring process.



## Stack used

- [React Native](https://reactnative.dev/)
- [TypeScript](https://typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Formik](https://formik.org/)
- [Redux](https://redux.js.org/)

## Developing

A Node.js LTS setup with [yarn](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# run ios
yarn ios

# run android
yarn android

# build android debug apk
yarn build:android

# check error & warning type
yarn lint

# fix all error & warning type
yarn lint-fix
```

## Architecture

### State management

We use [Redux](https://redux.js.org) for our state management. Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors, network errors, and other forms of bugs that might come up during production.

We use Redux to track the state of our app's filter settings.