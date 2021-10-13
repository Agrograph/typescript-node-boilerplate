# Node-TypeScript Template

## Requirements

- [Node](https://nodejs.dev/)
- [Yarn](https://yarnpkg.com/)

## Getting Started

- This project uses `nvm` to handle node versions, once `nvm` is installed, run `nvm use` to use the correct version of node
- Install all packages by running `yarn`
- Run `yarn dev` to create a `dist` folder at the project root, this will compile TypeScript each time you save, so keep the terminal running while writing code.

## VS Code extensions to install

- Run `yarn setup:extensions` to install VS Code extensions below that make life easier

  - Prettier
  - ESLint
  - Prisma
  - Bracket Pair Colorizer 2
  - Better Comments
  - GitLens

- Some of these extensions require configuration, which you can do in the Command Palette

  1. In VS Code, press `SHFT + CMD + P` to open the Command Palette
  2. Search for `Preferences: Open Settings (JSON)`
  3. Adjust this file to contain all of the rows below:

  ```
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.insertSpaces": false,
    "editor.formatOnSave": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "git.enableSmartCommit": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "auto",
    "prettier.printWidth": 100,
    "prettier.semi": false,
    "diffEditor.ignoreTrimWhitespace": false,
    "[prisma]": {
        "editor.defaultFormatter": "Prisma.prisma"
      }
  }
  ```

  4. Alternatively, you can adjust these settings as you like in Code > Preferences > Settings
