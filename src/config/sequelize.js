const keys = require('./keys');
module.exports = {
  username: keys.username,
  password: keys.password,
  database: keys.database,
  host: keys.host,
  port: keys.port,
  dialect: 'mysql',
  logging: (_log) => {
    // if (process.env.NODE_ENV === 'local') console.log(log); */
  },
};
