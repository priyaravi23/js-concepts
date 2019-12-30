# Express JS

 - Check if you have the `express backend` (make sure that this is not a sub git or yarn repository)
 - If `express` does not exist, use `npm install -g express-generator`
 - `cd backend`
 - `yarn install`
 - `yarn start`
 - Go to `http://localhost:3000` and make sure it works
 - Navigate to the `public` directory.
 - Create an `index.html` file in the `public` folder.
 - Set up boiler plate that says `Hello World` there.
 - `yarn add nodemon --dev`
 - Go to `package.json` and make the following change to the scripts
```json
{
  "script": {
    "start": "nodemon bin/www"
  }
}
```
 - Restart your server. Shut down the `yarn start` and then do `yarn start` again.
 - Make changes to the following file `routes/users`: Change the message to 'Hello world from route';
 - Get the kaggle dataset json (download it here) [Wine Reviews](https://www.kaggle.com/zynicide/wine-reviews)
 - Create a directory called `db` in the root.
 - Dump the json file into the `db`;
 - Copy the `routes/users` and create a new file called `routes/wine-reviews`
 - In the new file, change the message to 'Hello from wine-reviews'
 - In the `app.js` file, add the following statements at lines 8 and 24 approx
    - `var wineReviewsRouter = require('./routes/wine-reviews');`
    - `app.use('/wine-reviews', wineReviewsRouter);`
 - Go back to the `routes/wine-reviews`
 - On the top, after the imports, import the json data.
    - `const wineReviews = require("../db/wine-reviews.json");`
 - Change the `res.send` to `res.json(wineReviews)`
 - On your browser `http://localhost:3000/wine-reviews`, you should be able to see the json data.

## Push your changes to heroku
  - Create an account on heroku.
  - Get access credentials and create an app.
  - Copy the ssh git location
  - In your local m/c, in the project root, run the following command
      - In case you don't have the heroku cli installed, do thisL
          - https://devcenter.heroku.com/articles/heroku-cli
          - `heroku --version` to check version
          - `heroku login` to check if the heroku login works
  - Make the following changes in your package.json
```json
{
  "name": "backend",
  "version": "0.0.0",
  "private": true,
  "main": "app.js",
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
  "engines": {
    "node": "10.x"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
}
```
  - Create a file `Procfile` in root with the following statement: `web: ./bin/www npm start`
  - Initialize the git repository and make a commit.
  - `git init &&  git add . && git commit -m 'first draft'`
  - `git remote add heroku <ssh url>`
  - `git push heroku master`


## Creating a raw DOM Scripting Application

 - In the public directory, change the `index.html` to make an api call to `/wine-reviews` and load the json data.
 - Display the json data in the console
 - Note: Place all js and css files within the public directory.
 - In the `index.js` file make a `fetch('/wine-reviews')` and console log the data.
 - Refer to the `fetch` API on mdn and our examples if you get stuck.

## Pushing your code to github

 - Create a repository on github
 - Copy the ssh link. It should look like this: `git@github.com:bindhyeswari/test-delete.git`
 - `git remote add origin git@github.com:bindhyeswari/test-delete.git`
 - `git push origin master`

## Open website
 - `heroku open`
 - `heroku logs`

## Exercises

 - Show the data in a table
 - Allow sorting on all columns in ascending and descending fashion
 - Allow search on all columns (place an input search field above every column)
 - Provide a button on the top that allows grouping

