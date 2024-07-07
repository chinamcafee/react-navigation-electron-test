# react-navigation-electron-test

## Introduction
An example to reproduce the issue of React Navigation 7.0 not working in Electron.

## Steps to Reproduce:
1. Ensure the branch is on the 6.x version.
2. Run `npm i --force`
3. Run `npm run start`
4. The app runs successfully.
5. Checkout to the branch `7.0-rc` using `git checkout 7.0-rc`
6. Run `npm i --force`
7. Run `npm run start`
8. The app throws an error.