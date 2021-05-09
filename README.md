# Finance-app

This project is combine Angular 11 (FE) and Nodejs (BE) application.

# Open locally
0. open terminal
1. git clone https://github.com/LewandowskiJan/finance-app.git

2. download node_modules
// for frontend
    - 'cd app/finance-app/'
    - 'npm i'

// for backend
  * accounts
    - 'cd api/account/'
    - 'npm i'
  * authorization
    - 'cd api/authorization/'
    - 'npm i'

3. Check mongo db is installed
  * if not, check https://docs.mongodb.com/manual/installation/

4. Check mongo address
  * open cmd and use commend: 'mongo'

5. Check 
  * \finance-app\api\account\environments\dev.env
  * \finance-app\api\authorization\environments\dev.env
   - configure port DATABASE_URL, or change the database name
  
6. Run
 * in app/finance-app/ open terminal and paste 'ng serve'
 * in api/account/ open terminal and paste 'nodemon'
 * in api/authorization/ open terminal and paste 'nodemon'

 after lunch completed the app should start on:
 http://localhost:4200/

 to check connection, click 'Check connection' button on the first page.

# Quick-start

## Build and deploy whole app

Run `docker-compose up --build`

## Run app

Run `docker-compose up`

## ./app/finance-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Go to `cd app/finance-app`
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
