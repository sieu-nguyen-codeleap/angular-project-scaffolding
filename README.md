# Angular scaffolding project

> This project aim to setup an angular starter code with tailwindcss, inline template and style, basic routes, husky, ci for pull and merge

## Folder structure

> Follow atomic design

- Atoms component will set in **/components/patials/**
- Molecules componenst arraneg Atoms and place in **/components/**
- Sit in **/app/** will be list of page components
- To create page component : `ng g c comp-name`
- To create molecule component : `ng g c components/comp-name`
- To create atomic component : `ng g c components/partials`

## Inline Templates. and Styles

- Standalone component and setup with inline templates and styles
- To create : `ng n app-name --inline-style --inline-template`

## Styling Setup:

> Style with tailwindcss v4

- Setup step : [Set up angular with tailwindcss](https://tailwindcss.com/docs/installation/framework-guides/angular)

## Pre-commit Hooks Setup:

> Husky + Eslint + Prettier + lint-staged

### Install Eslint

`ng add eslint`

### Install Prettier

`ng add prettier`

### Install Lint Staged

`npm install lint-staged`

### Set up husky:

- Type `npx husky init`
- Go to package json, add to scripts : <br>
  `"lint:fix": "eslint --fix .",`<br>`"format:check": "prettier --check ."`
- Outside scripts, add : `"lint-staged": {
  "**/*": "prettier --write . --ignore-unknown"
},`
- Go to pre-commit in .husky, add : <br>`npm run lint `<br>`npx lint-staged`

### Git Actions Setup :

- Config 2 jobs for 2 action pull and push on main branches
- Get detail on **workflow**
