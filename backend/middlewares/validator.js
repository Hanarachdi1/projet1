const { check, validationResult } = require("express-validator");

module.exports.registerRules = () => [
  check("email", "this field should be a valid email").isEmail(),
  check("password", "password should have at least 6 caracters").isLength({
    min: 6,
  }),
  check("name", "name is required").notEmpty(),
];
module.exports.logInRules = () => [
  check("email", "this field should be a valid email").isEmail(),
  check("password", "password should have at least 6 caracters").isLength({
    min: 6,
  }),
];
module.exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    next();
  }
};
