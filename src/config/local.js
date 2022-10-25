module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  jwtSecretKey: process.env.JWT_SECRET,
  jwtRefreshToken: process.env.REFRESH_TOKEN_SECRET,
  sslEnabled: false,
  NODE_ENV: 'local',
  SERVER_URL: 'https://api.d.peasy.shop/hi',
};
