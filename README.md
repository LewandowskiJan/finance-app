# Finance-app

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

### Others

- [Contributors (commit rules)](./github/contributors.md)

## General info

Project is creating to aggregate structured finance data.
Full concept:

- easy add data using UI


- save data into mongo
- use micro service on BE for:

* authorization
* manage data
* generate data to share/ import for BI tools (like PowerBi)

This project is combine Angular 2+ (FE) and Nodejs (BE) application.

## Technologies

Project is created with:

- Angular: v.12
- NgRx: v.12
- RxjS
- TypeScript

- Node.js: v.14
- Express
- Mongoose
- Nodemon

- MongoDb
- Docker / docker-compose

## Setup

- [Open locally](#locally)
- [Using docker](#docker)

### Locally

#### open terminal

##### 1. Clone repository

```
git clone https://github.com/LewandowskiJan/finance-app.git
```

##### 2. download node_modules

###### for frontend

```
$ cd app/finance-app/
```

- install local library

```
$ npm run lib-util:pack
```

- install deps

```
$ npm i
```

###### for backend

- accounts-service

```
$ cd api/account/
$ npm i
```

- authorization-service

```
$ cd api/authorization/
$ npm i
```

##### 3. Check mongo db is installed

- if not, check https://docs.mongodb.com/manual/installation/

##### 4. Check mongo address

- open cmd and use commend: 'mongo'

##### 5. Check

- \finance-app\api\account\environments\dev.env
- \finance-app\api\authorization\environments\dev.env

* configure port DATABASE_URL, or change the database name

##### 6. Run

- in cmd run 'mongod'

```
$ mongod
```

- in app/finance-app/ open terminal and paste 'ng serve'

```
$ cd app/finance-app/
$ ng serve
```

- in api/account/ open terminal and paste 'nodemon'

```
$ cd api/account/
$ nodemon
```

- in api/authorization/ open terminal and paste 'nodemon'

```
$ cd api/authorization/
$ nodemon
```

after lunch completed the app should start on:
http://localhost:4200/

to check connection, click 'Check connection' button on the first page.

### Docker

##### 1. Clone repository

```
git clone https://github.com/LewandowskiJan/finance-app.git
```

##### 2. Image must to have

- docker -> https://www.docker.com/get-started
- mongo -> https://hub.docker.com/_/mongo

after clone completed

```
$ cd finance-app
```

##### 3. After migration to local library

We have to build and pack library by running:

```
$ npm run lib-util:pack
```

###### Important!

If the package version was change, you have to:

- update package.json

```
"dependencies": {
    ..
    "@my-lib/util": "file:dist/util/my-lib-util-0.0.1.tgz",
    ..
}

```

- run

```
$ npm install
```

##### 4.a Build, deploy and run whole app

Run `docker-compose up --build`

##### 4.b Just run the app

and then run `docker-compose up`

```
docker-compose up
```
