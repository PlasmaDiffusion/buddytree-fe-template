# Buddytree Template (Frontend)

This template has the project setup to use the same technologies and folder structure as the Buddytree front end. Once you finish your code and it's approved, it will be brought into our actual front end.

## General Project Structure

For css you can use the existing classes in global.scss. If you wish to make your own css, you can also create new SCSS modules files for individual components to use. (See src/components/ButtonRow/styles.module.scss)

Generic reusable components you plan to use often go into src/components.
Specific components you only use once for a specific page go into src/pageComponents.

# Typescript

Remember to make sure your project has no errors by running "yarn tsc".

## Getting Started

` yarn && yarn dev`

Open browser and navigate to [http://localhost:3000/](http://localhost:3000/)

## Technology Stack

- [Typescript](https://www.typescriptlang.org/) - Superset of Javascript.
- [Next.js](https://nextjs.org/) - SSR Framework based on react.
- [NextAuth](https://next-auth.js.org/getting-started/introduction) - Open-source authentication solution for Next.js
- [SCSS](https://sass-lang.com/documentation/syntax) - SCSS is a preprocessor scripting language that is interpreted or compiled into CSS.
- [Redux Toolkit](https://redux-toolkit.js.org/) - Client-side global state management.

See [package.json](package.json) for full list of dependencies.

## Linters & Formatter

```bash
# You can use VSCode ESLint, Stylelint extensions for automatic Linting

yarn eslint . --ext .js,.jsx,.ts,.tsx

yarn stylelint "src/**/*.scss"
```

### Formatting

```bash
# auto fixes the files according to the rules

# can enable auto format for Prettier via VSCode Extensions
yarn prettier --write .

# Prettier will not reorder based on rules
yarn stylelint "src/**/*.scss" --fix
```
