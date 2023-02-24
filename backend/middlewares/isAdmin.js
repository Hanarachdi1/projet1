module.exports = isAdmin = (req, res, next) => {
  if (req.user.role == "admin") {
    next();
  } else {
    res.status(401).send({ msg: "access denied" });
  }
};
