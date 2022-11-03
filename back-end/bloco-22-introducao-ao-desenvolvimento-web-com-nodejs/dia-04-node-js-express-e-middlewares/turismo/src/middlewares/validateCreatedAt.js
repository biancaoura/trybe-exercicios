module.exports = (req, res, next) => {
  const { createdAt } = req.body.description;
  const regex = /(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}/;

  if (!regex.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\''});
  }

  next();
}