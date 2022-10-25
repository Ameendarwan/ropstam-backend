import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';

const cookieExtractor = (req) => {
  let token = null;
  if (req.cookies && req.cookies.accessToken) token = req.cookies.accessToken;
  if (req.headers.authorization) {
    const [, _token] = req.headers.authorization.split(' ');
    token = _token;
  }
  return token;
};
export default () => {
  const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET || 'secret',
  };
  passport.use(
    new JwtStrategy(options, async (payload, cb) => {
      try {
        const { id } = payload;
        return cb(null, { id });
      } catch (error) {
        return cb(error);
      }
    })
  );
};
