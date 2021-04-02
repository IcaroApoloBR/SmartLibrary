const express = require("express");
const next = require("next");

var passport = require("passport");
var Strategy = require("passport-local").Strategy;

const dev = process.env.NODE_ENV !== "production";
const app1 = next({ dev });
const handle = app1.getRequestHandler();

passport.use(
  new Strategy((username, password, done) => {
    const validateUser = (username, password) => username === password;

    return validateUser(username, password)
      ? done(null, { email: username })
      : done(false, false); // done(.. sends to serialize)
  })
);

passport.serializeUser((userInfo, done) => done(null, userInfo));
passport.deserializeUser((userInfo, cb) => cb(null, userInfo));

app1
  .prepare()
  .then(() => {
    const app = express();

    app.use(require("cookie-parser")());
    app.use(require("body-parser").urlencoded({ extended: true }));
    app.use(
      require("express-session")({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false
      })
    );

    // Initialize Passport and restore authentication state, if any, from the session.
    app.use(passport.initialize());
    app.use(passport.session());

    app.post(
      "/login",
      passport.authenticate("local", { failureRedirect: "/login" }),
      (req, res) => res.redirect("/")
    );

    app.get("/logout", (req, res) => req.logout().redirect("/"));
    app.get("*", (req, res) => handle(req, res));

    app.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
