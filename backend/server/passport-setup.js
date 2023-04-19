const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc").Strategy;
const {
  getMessagesFromServer,
  postMessageToServer,
  deleteMessagesFromServer,
  getMessageFromServer,
  deleteMessageFromServer,
  updateMessageOnServer,
  getUserFromServer,
} = require("./controllers/messages-controller");
const { getGoogleUserFromServer } = require("./controllers/auth-controller");
const { viewGoogleUser } = require("../database/functions");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/login/federated/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists in our own db
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // already have this user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          // if not, create user in our db
          new User({
            googleId: profile.id,
            username: profile.displayName,
          })
            .save()
            .then((newUser) => {
              console.log("created new user: ", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
