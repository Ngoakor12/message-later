const passport = require("passport");
const {
  viewUser,
  createUser,
  viewGoogleUser,
} = require("../database/functions");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

// console.log(process.env.GOOGLE_CLIENT_ID);
// const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser(async (userId, done) => {
  const user = await viewUser(userId);
  // User.findById(id).then((user) => {
  done(null, user.rows[0]);
  // });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/users/auth/google/redirect",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName || "";
      const email = profile.emails[0].value;
      const googleId = profile.id;

      // check if there's not user with the googleId
      const existingUser = await viewGoogleUser(googleId);

      // if no user with googleId, create a new one in db
      if (!existingUser.rows.length) {
        const user = await createUser(email, firstName, lastName, googleId);
        console.log(user.rows[0]);
        done(null, user.rows[0]);
      } else {
        console.log("User already exists!");
        done(null, existingUser.rows[0]);
      }
    }
  )
);
