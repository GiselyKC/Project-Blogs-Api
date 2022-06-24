const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

 if (!emailRegex.test(email) || password.length < 6) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = validateLogin;
