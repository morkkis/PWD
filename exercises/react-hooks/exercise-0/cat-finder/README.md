# Getting Started with Create React App

1) Create App: npx create-react-app cat-finder --template typescript
2) Add React Router: npm install --save react-router-dom
3) Add React Router types: npm install --save-dev @types/react-router-dom
4) Add ScSS & CSS Modules: cd cat-finder & npm install node-sass@4.14.1 --save-dev - Now you can rename all [name].css to [name].module.scss. example: src/App.css to src/App.module.scss and update src/App.js to import src/App.module.scss. This file and any other file will be automatically compiled if imported with the extension .scss or .sass.
5) Optional - Change files strcture:
   - Create app folder inside cat-finder/src
   - Create styles folder inside cat-finder/src
   - Move the following files to app folder:  App.module.scss, App.test.tsx, App.tsx, logo.svg
   - Move index.scss to styles folder
   - Update index.tsx with new index.scss & app.tsx path
6) Install generate-react-cli: npx generate-react-cli
    - Does this project use TypeScript? (Y/n): Y
    - Does this project use CSS modules? (Y/n): Y
    - Does this project use a CSS Preprocessor? Choose - scss
    - What testing library does your project use? (Use arrow keys) Choose Testing Library
    - Set the default path directory to where your components will be generated in? (src/components) src/app
    - Would you like to create a corresponding stylesheet file with each component you generate? (Y/n) Y
    - Would you like to create a corresponding test file with each component you generate? (Y/n) n
    - Would you like to create a corresponding story with each component you generate? (Y/n) n
    - Would you like to create a corresponding lazy file (a file that lazy-loads your component out of the box and enables code splitting: https://reactjs.org/docs/code-splitting.html#code-splitting) with each component you generate? (Y/n) n
7) run npm start and check application is starting without errors


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
