const hasDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json({ message: `O campo ${value} é obrigatório` });
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  return hasDescription(description, res, 'description')
    || hasDescription(description.createdAt, res, 'createdAt')
    || hasDescription(description.rating, res, 'rating')
    || hasDescription(description.difficulty, res, 'difficulty')
    || next();
};

module.exports = validateDescription;