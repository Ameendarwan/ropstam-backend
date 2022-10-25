const keys = require('./keys.js');
module.exports = {
  username: keys.username,
  password: keys.password,
  database: keys.database,
  host: keys.host,
  dialect: 'mysql',
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeSeedData',
  freezeTableName: true,
  charset: 'utf8',
  collate: 'utf8_general_ci',
  sslEnabled: keys.sslEnabled,
  SERVER_URL: keys.SERVER_URL,
  JWT_SECRET_KEY: keys.jwtSecretKey,
  WEBHOOK_URL: keys.WEBHOOK_URL,
};
