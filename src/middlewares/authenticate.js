import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.js';
// import Role from '../models/role.js'
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'utsav_patel'
}
const jwtStrategy = new JwtStrategy(opts, async (payload, done) => {
    try {
      console.log(payload);
      const user = await User.findById(payload.id);
      if (!user) {
        return done(null, false);
      }
    //   const roleuser=Role.
      // if (user.roles !== "Admin") {
      //   return done(null, false);
      // }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  });
passport.use(jwtStrategy);
export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized access: no token or invalid token',
        });
      }
      console.log("Authenticated user:", user);
      req.user = user;
      next();
    })(req, res, next);
};