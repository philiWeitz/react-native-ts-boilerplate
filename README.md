
# React Native Typescript Boilerplate

## Setup

1. Install React Native:
  - https://facebook.github.io/react-native/docs/getting-started.html

2. Create .env file:
  - navigate to project root directory and create file: config/.env
  ```
  touch config/.env
  ```

3. Install Yarn
  ```
  brew install yarn
  ```

4. Install NPM packages
  ```
  yarn install
  ```
  
5. Connect your Android device and build the project
- dev build:
  ```
  yarn android-dev
  ```
- prod build:
  ```
  ENVFILE=./config/.env react-native run-android --variant=release
  ```
