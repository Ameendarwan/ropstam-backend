import UserServices from '../../services/user';
import { constructResponse } from '../../utils/helpers.js';

const register = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const response = await UserServices.register({
    firstName,
    lastName,
    email,
  });
  return constructResponse(res, response);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await UserServices.login({ email, password });
  return constructResponse(res, response);
};

export default {
  register,
  login,
};
