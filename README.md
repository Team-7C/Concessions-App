## Important Information
#### Deployed Heroku Link
[Chomper!](https://chomperapp.herokuapp.com/)

#### Resources Used
- [Salting passwords](https://ciphertrick.com/salt-hash-passwords-using-nodejs-crypto/)

## Set-Up & Use
First, run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again.

Setup the connection to the MongoDB database of your choosing based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".


In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

