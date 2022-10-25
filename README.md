# Ropstam MERN TEST

## _Overview_

This is a simple car management portal where user can add, update and delete cars and its categories. Besides, user authentication is also present in the application.

## Component Overview

This app uses a number of tools to work:

- [Node.js] - I/O for the backend
- [Express.js] - Framework
- [MySql] - A database provider used by the application

## Third party integrations

Different packages have been installed in order for the App to function properly.

- [Express] - Node.js network app framework for creating RESTful APIs and handling requests.
- [Express Validator] - For adding validations into incoming requests.
- [Sequelize] - Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite,
- [Swagger UI Express] - A module that allows you to feed a Swagger UI (auto-generated views based on the swagger-ui project) from a `swagger.json` file, or from an inline object.
- [Swagger-jsdoc] - This library reads your JSDoc-annotated source code and generates an OpenAPI (Swagger) specification.

## Installation

Thi app requires [Node.js](https://nodejs.org/) v14 to run.
On the root directory of the project run the following

    npm i

or

    yarn install

This will install

#### Back-end setup

The back-end server requires `.env` to get started.

```sh
cd server
npm i
npm run dev
```

[node.js]: http://nodejs.org
[express]: http://expressjs.com
[mysql]: https://www.mysql.com/
[sequelize]: https://sequelize.org/master/
[express validator]: https://express-validator.github.io/docs/
[swagger ui express]: https://www.npmjs.com/package/swagger-ui-express
[swagger-jsdoc]: https://github.com/Surnet/swagger-jsdoc
