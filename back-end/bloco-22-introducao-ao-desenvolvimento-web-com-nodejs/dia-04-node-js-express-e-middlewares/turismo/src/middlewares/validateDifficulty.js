module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;

  const options = ['Fácil', 'Médio', 'Difícil'];

  if (!options.includes(difficulty)) {
    return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }

  next();
};