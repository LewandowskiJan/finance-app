# Finance-app

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Project is creating to aggregate structured finance data.
Full concept:
- easy add data using UI
- save data into mongo
- use micro service on BE for:
 * authorization
 * manage data
 * generate data to share/ import for BI tools (like PowerBi)

This project is combine Angular 11 (FE) and Nodejs (BE) application.
	
## Technologies
Project is created with:
* Angular: 11.2.2
* NgRx: 11.0.1
* RxjS: 6.6
* TypeScript: 4

* Node.js: 14.15.5
* Express: 4.17.1
* Mongoose: 5.11.17
* Nodemon

* MongoDb
* Docker / docker-compose

## Setup
To run this project, install it locally using npm:

### Open locally

#### open terminal
##### 1. git clone https://github.com/LewandowskiJan/finance-app.git

##### 2. download node_modules
###### for frontend

```
$ cd app/finance-app/
$ npm i
```

###### for backend

* accounts-service

```
$ cd api/account/
$ npm i
```

* authorization-service

```
$ cd api/authorization/
$ npm i
```

##### 3. Check mongo db is installed

* if not, check https://docs.mongodb.com/manual/installation/

##### 4. Check mongo address

* open cmd and use commend: 'mongo'

##### 5. Check

- \finance-app\api\account\environments\dev.env
- \finance-app\api\authorization\environments\dev.env

* configure port DATABASE_URL, or change the database name

##### 6. Run

* in cmd run 'mongod'
```
$ mongod
```
* in app/finance-app/ open terminal and paste 'ng serve'
```
$ cd app/finance-app/
$ ng serve
```
* in api/account/ open terminal and paste 'nodemon'
```
$ cd api/account/
$ nodemon
```
* in api/authorization/ open terminal and paste 'nodemon'
```
$ cd api/authorization/
$ nodemon
```

after lunch completed the app should start on:
http://localhost:4200/

to check connection, click 'Check connection' button on the first page.


### Open using docker

#### Image must to have

- mongo -> https://hub.docker.com/_/mongo

after clone completed
```
$ cd finance-app
```

#### Build, deploy and run whole app

Run `docker-compose up --build`

#### Just run the app

and then run `docker-compose up`

```
docker-compose up
```
