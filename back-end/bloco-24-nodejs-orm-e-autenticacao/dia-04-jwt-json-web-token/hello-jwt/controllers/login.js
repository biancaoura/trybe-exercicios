const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().alphanum().min(5).required().messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required()
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);
  const { username, password } = req.body;

  if (error) return next(error);

  if (username === 'admin' &&  password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');

    err.statusCode = 401;

    return next(err);
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const payload = {
    username: req.body.username,
    admin,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ token });
};