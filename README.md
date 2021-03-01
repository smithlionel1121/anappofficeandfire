# Getting Started

## Git stuff
* Choose one member of your team to fork this repository into their github account by clicking the fork button. Or if you have a team account, use that. This fork will be considered the "main" repository.

* Once that's done, get each member to clone the main repo: `git clone https://github.com/{ACCOUNT_NAME}/ysys-app.git`

* To contribute to your project, we recommend this common pattern:
  - Checkout the main branch locally: `git checkout main`
  - Make sure this is up-to-date with the main remote branch: `git pull --rebase`
  - Make a new branch to do your work on: `git checkout -b my-new-feature-branch`
  - Write your code
  - When you're ready to commit your code, add the files you want to your commit. Use `git status` to check which files have been modified and/or added. To add files, use `git add {FILE_NAME}`. Chances are all your edits will be within `src`, so to speed things up you can use `git add src/`.
  - Commit the changes with a message: `git commit -m "added sidebar feature"`
  - Push your changes to your _remote_ branch: `git push origin my-new-feature-branch`
  - If that branch is ready to be merged into the main branch, visit it on github.com and open a pull request.
  - Make sure all the changes make sense and that there are no conflicts, then merge your new feature!

## Development stuff
Once you have cloned the repo into a specific directory:

* Navigate into the app directory: `cd {PATH_TO_APP}/ysys-app` - `{PATH_TO_APP}` could be something like `C:/Users/Jon Snow/Desktop`

* If you have not used Create React App before:
  - If you don't already have it, install yarn: `npm install --global yarn`
  - Make sure you have a version of Node >= `10.14.2`, to check this, run `node -v`. If you need to upgrade, go to:
https://nodejs.org/en/download and download the appropriate installer.

* Install the dependencies: `yarn install`

* Start the app: `yarn start`

* Navigate to `localhost:3000` to view the app.

## Publishing stuff

In order to publish stuff to github pages, you'll need to follow a few steps:
#### Within your app:
* Within your project directory, install `gh-pages` by running `yarn add gh-pages --save-dev`.
* Add `"homepage": "http://{ACCOUNT_NAME}.github.io/ysys-app"` in your `package.json` (at the top level)
* Within the `"scripts"`, add:
```
"scripts": {
// ....
  "deploy": "gh-pages -d build",
// ....
}
```
* When your app is in a state that you're happy with, build it using `yarn build`
* Then deploy this build to github using `yarn deploy`
* You will then be able to see your app on the homepage URL you assigned earlier. 

#### Within your repository on github.com

* After your first deployment (the step above), on the main repository screen, go to the Settings tab
* Scroll down to GitHub Pages section and change the branch to `gh-pages`
* This will take a few minutes to update, but eventually your app will be deployed!

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
