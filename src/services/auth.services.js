import passport from 'passport';
import LocalStrategy from 'passport-local';
import passportJWT from 'passport-jwt';
import User from '../modules/users/user.model';
import constants from '../config/constants';
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const localOpts = {
    usernameField: 'email'
};
const localStrategy = new LocalStrategy(localOpts, async(email, password, done) => {
    try {
        const user = await User.findOne({email});
        if (!user) {
            return done(null, false);
        } else if (!user.authenticateUser(password)) {
            return done(null, false);
        }

        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
});
//console.log('passportJWT', passportJWT.ExtractJwt.fromAuthHeaderWithScheme)
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),
    secretOrKey: constants.JWT_SECRET,
  };
  
  const jwtStrategy = new JwtStrategy(jwtOpts, async (payload, done) => {
    try {
      const user = await User.findById(payload._id);
  
      if (!user) {
        return done(null, false);
      }
  
      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  });
passport.use(localStrategy);
passport.use(jwtStrategy);
export const authLocal = passport.authenticate('local', {session: false});
export const authJwt = passport.authenticate('jwt', {session: false});