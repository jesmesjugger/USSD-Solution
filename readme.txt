### Agent and Phone Stocking

Sample app with  SMS, USSD,


### How to run

- Install node.js version ver >5.x.x (this demo runs with ES6 language features)
- Install mysql (create user root, and database ussdtest)


### Create a .env file at the root of the project with the following configs

```


DB_HOST=
DB_NAME=ussdtest
DB_USER=
DB_PASS=


```

### Install Node Modules and start the app

```bash
$ npm install
$ npm start
```


### Routes

- Routes are under routes folder (sms, ussd)
- they are mapped by app.js (look at the route imports)
