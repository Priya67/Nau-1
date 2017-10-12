const User = require('./model');
const jwt = require('jwt-simple');


function tokenForUser(user) {
  var timestamp = new Date().getTime();
  console.log("Hi Justin");
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, 'hello');
}

 exports.signin = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var user = {"email": email, "password": password};
  User.findOne({email: email.toLowerCase()}, function(err, user) {
    if (err) { return; }
    if (!user) { return; }
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return; }
      if (!isMatch) { return; }
      res.send({token: tokenForUser(user)});
      // return done(null, user);
    })
  });
};

exports.signup = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  if (!email || !password) {
    return res.status(422).json({error: "You must provide an email and password"});
  }

  // Check if user already exists, send error if they do
  User.findOne({email: email}, function(err, existingUser) {
    if (err) { return next(err); }
    if (existingUser) {return res.status(422).json({error: "Email taken"});}
    var user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) { return next(err); }
      res.json({user_id: user._id, token: tokenForUser(user)});
    });
  });
};
