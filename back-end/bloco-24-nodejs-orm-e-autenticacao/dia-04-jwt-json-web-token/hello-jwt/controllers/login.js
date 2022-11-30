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

  if (error) return next(error);

  const payload = {
    username: req.body.username,
    admin: false,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ token });
};