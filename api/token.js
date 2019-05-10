const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const option = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, process.env.JWT_SECRET, option);
}

module.exports = generateToken;
