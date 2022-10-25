import _ from 'lodash';
import { Users } from '../models/index';
import { HTTP_STATUS, EMAIL_SUBJECTS, RESPOND_MESSAGES } from '../utils/CONSTANTS.js';
import { sendEmail } from './emailService';
import {
  verifyJwt,
  generateToken,
  signRefreshToken,
  hashString,
  errorResponse,
  successResponse,
  compareString,
} from '../utils/helpers.js';

const TEMPORARY_PASS = process.env.TEMPORARY_PASS;

const register = async (_data) => {
  try {
    const data = { ..._data };

    // -- Check user already exists with the given email --//
    const isUser = await Users.findOne({ where: { email: data.email } });

    if (isUser)
      return errorResponse(HTTP_STATUS.BAD_REQUEST, RESPOND_MESSAGES.USER_ALREADY_EXISTS, {
        email: isUser.email,
      });

    data.password = await hashString(TEMPORARY_PASS);
    const newUser = await Users.create(data);
    const user = await newUser.save();

    // --- Sending Email to user with generated token ---//
    const emailBuilder = {
      to: user.email,
      subject: `${EMAIL_SUBJECTS.WELCOME} ${user.firstName}!`,
      text: `Hi ${user.firstName}, your temporary passwors is: ${TEMPORARY_PASS}`,
    };
    const emailResponse = await sendEmail(emailBuilder);
    if (emailResponse.failure) {
      throw new Error(RESPOND_MESSAGES.WELCOME_EMAIL_FAILURE);
    }

    return successResponse({ user }, HTTP_STATUS.OK, RESPOND_MESSAGES.USER_REGISTERED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

const login = async (data) => {
  try {
    const { email, password } = data;
    const user = await Users.findOne({ where: { email } });
    if (!user) return errorResponse(HTTP_STATUS.BAD_REQUEST, RESPOND_MESSAGES.USER_NOT_FOUND);

    // -- Password Check --//
    const isCorrectPassword = await compareString(password, user.password);
    if (!isCorrectPassword)
      return errorResponse(HTTP_STATUS.BAD_REQUEST, RESPOND_MESSAGES.INCORRECT_PASSWORD);

    // -- Generate Token --//
    const accessToken = generateToken({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    const refreshToken = signRefreshToken({ id: user.id });

    return successResponse(
      { accessToken, refreshToken },
      HTTP_STATUS.OK,
      RESPOND_MESSAGES.USER_AUTHUTHENTICATED
    );
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

export default {
  register,
  login,
};
