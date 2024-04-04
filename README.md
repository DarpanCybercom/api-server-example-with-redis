# E-commerce-Single-Page-Application-PWA-Node

# Overview

**TEN stack** is a `Typescript` + `Express` + `Node` starter kit to develop `REST API` server apps.
Nothing new under the sun, just a straight forward combo to make server development a little bit faster. And of course, this make my freelancing days more enjoyable 😎
Comes with:

- Everything typed with [Typescript](https://www.typescriptlang.org/)
- [ES6](http://babeljs.io/learn-es2015/) features/modules
- ES7 [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) / [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- Run with [Nodemon](https://nodemon.io/) for automatic reload & watch
- [ESLint](http://eslint.org/) for code linting
- Code formatting using [Prettier](https://www.npmjs.com/package/prettier)
- Configuration management using [dotenv](https://www.npmjs.com/package/dotenv)
- Improved commits with [Husky](https://typicode.github.io/husky)
- Manage production app proccess with [PM2](https://pm2.keymetrics.io/)

  <br>
  <br>

---

## Prerequisites

- [Node.js](https://nodejs.org) (`>= 16.0.0`)
- [Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://docs.npmjs.com/getting-started/installing-node)

## Install

- Fork or Use [this](https://github.com/filoscoder/tenstack-starter/generate) template repository.
- [Clone](https://github.com/git-guides/git-clone) the forked repository.
- Install the dependencies with [yarn](https://yarnpkg.com/getting-started/usage) or [npm](https://docs.npmjs.com/cli/v7/commands/npm-install).

> Make sure you already have [`node.js`](https://github.com/filoscoder/tenstack-starter#prerequisites) and [`npm`](https://github.com/filoscoder/tenstack-starter#prerequisites) or [`yarn`](https://github.com/filoscoder/tenstack-starter#prerequisites) installed in your system.

- Set your `git remote add origin` path

```bash
 git remote add origin ${forked-and-cloned-path}
```

> [Update the url](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url) if you already have an `origin`

<br>
<br>

## Config

- Copy `.env.example` a file at the root of the application.
- Add or modify specific variables and update it according to your need.

```bash
 cp .env.example .env
```

> Check the `config` folder to customize your settings (`/src/config`)

<br>
<br>

## Alias @

To make paths clean and ease to access `@` is setup up for `/src` path

```javascript
// BEFORE
import config from './config';
import routes from './routes';
```

> You can customize this setup:
> `/tsconfig.json` > compilerOptions.paths
> `/eslintrc.yml` > rules.settings.alias.map

<br>
<br>

## Local Development

Run the server locally. It will be run with Nodemon and ready to serve on port `8080` (unless you specify it on your `.env`)

```bash
 yarn start # or npm start
```

> Check [`package.json`](https://github.com/filoscoder/tenstack-starter/blob/master/package.json) to see more "scripts"

<br>
