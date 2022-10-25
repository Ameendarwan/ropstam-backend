import _ from 'lodash';
import { Users } from '../models/index';
import { HTTP_STATUS, EMAIL_SUBJECTS, LOGGER_TAGS, RESPOND_MESSAGES } from '../utils/CONSTANTS.js';
import { sendEmail } from './emailService';
import {
  signRefreshToken,
  generateToken,
  verifyJwt,
  hashString,
  randomStringGenerator,
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

    // // --- Sending Email to user with generated token ---//
    // const emailBuilder = {
    //   to: user.email,
    //   subject: EMAIL_SUBJECTS.VERIFICATION,
    //   template: 'emailVerification/html2.ejs',
    //   paramsToRender: {
    //     name: user.firstName + ' ' + user?.lastName,
    //     token: verificationToken.token,
    //     hostUrl: process.env.APP_URL,
    //     email: user.email,
    //   },
    // };
    // const emailResponse = await sendEmail(emailBuilder);
    // if (emailResponse.failure) {
    //   throw new Error(RESPOND_MESSAGES.VERIFICATION_MAIL_SEND_FAILURE);
    // }

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

    return successResponse({}, HTTP_STATUS.OK, RESPOND_MESSAGES.USER_AUTHUTHENTICATED);
  } catch (error) {
    return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
  }
};

export default {
  register,
  login,
};
