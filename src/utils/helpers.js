import { sign, verify } from 'jsonwebtoken';
import { genSalt, hash, compare } from 'bcrypt';
import { randomBytes } from 'crypto';
import { HTTP_STATUS } from './CONSTANTS.js';

export const constructResponse = (res, responseData) => {
  const { success, message, status, data } = responseData;
  if (success)
    return res.status(status).json({
      data,
      message,
      success: true,
      status,
    });
  if (data)
    return res.status(status).json({
      data,
      message,
      success: false,
      status,
    });
  return res.status(status).json({
    message,
    success: false,
    status,
  });
};

export const successResponse = (data, status, message) => ({
  data,
  status: status || HTTP_STATUS.OK,
  message,
  success: true,
});

export const errorResponse = (status, message, data = null) => ({
  data,
  status: status || HTTP_STATUS.INTERNAL_SERVER_ERROR,
  message: message || 'Internal server error',
  success: false,
});

export const getKeyByValue = (obj, val) => Object.keys(obj).find((key) => obj[key] === val);

export const encryptText = (salt, text) => {
  const textToChars = (t) => t.split('').map((c) => c.charCodeAt(0));
  const byteHex = (n) => ('0' + Number(n).toString(16)).slice(-2); // slice in an alternative to substr w.r.t. current context
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

  return text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
};

export const decryptText = (salt, encoded) => {
  const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join('');
};

export const hashString = async (string) => {
  try {
    if (!string) throw new Error('In order to Hash the required string, please provide a string');
    const SALT_ROUNDS = 10;
    const salt = await genSalt(SALT_ROUNDS);
    return await hash(string, salt);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const confirmAndParseIntId = (id = null) => {
  let newId = null;
  if (!isNaN(id)) {
    newId = parseInt(id, 10);
  }
  return newId;
};

export const compareString = async (string, string2) => {
  try {
    if (!string)
      throw new Error('In order to compare the required string, please provide a string');
    string2 = string2.replace(/^\$2y(.+)$/i, '$2a$1');
    return await compare(string, string2);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const generateToken = (data) =>
  sign(
    {
      ...data,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    process.env.JWT_SECRET
  );

export const signRefreshToken = (data) =>
  sign(
    {
      ...data,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 100000),
    },
    process.env.REFRESH_TOKEN_SECRET
  );

export const verifyJwt = (token) => verify(token, process.env.JWT_SECRET);

export const randomStringGenerator = (length) => {
  const buf = randomBytes(length);
  return buf.toString('hex');
};

const getDomain = () => {
  if (process.env.NODE_ENV === 'local') return 'localhost';
  return process.env.NODE_ENV === 'production' ? 'bookado.uk' : 'togethersupport.co.uk';
};

export const createCookie = (res, key, value) =>
  res.cookie(key, value, {
    httpOnly: true,
    secure: ['development', 'quality', 'production', 'staging'].includes(process.env.NODE_ENV),
    domain: getDomain(),
  });
export const removeCookie = (res, key) =>
  res.clearCookie(key, {
    httpOnly: true,
    secure: ['development', 'quality', 'production', 'staging'].includes(process.env.NODE_ENV),
    domain: getDomain(),
  });

export const isValidUrl = (url) => {
  return url.startsWith('https://');
};
