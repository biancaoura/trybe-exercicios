const userService = require('../services/user.service');

const USER_NOT_FOUND = 'Usuário não encontrado';

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: USER_NOT_FOUND });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  if (!user) return res.status(404).json({ message: USER_NOT_FOUND });

  return res.status(200).json(user);
};

const getByIdAndEmail = async (req, res) => {
  const { id } = req.params;
  const { email } = req.query;
  const user = await userService.getByIdAndEmail(id, email);

  if (!user) return res.status(404).json({ message: USER_NOT_FOUND });

  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { fullName, email } = req.body;
  const newUser = await userService.createUser(fullName, email);

  return res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { fullName, email } = req.body;
  const { id } = req.params;
  const updatedUser = await userService.updateUser(id, fullName, email);

  if (!updatedUser) return res.status(404).json({ message: USER_NOT_FOUND });

  return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);

  return res.status(200).json({ message: 'Usuário excluído com sucesso' });
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};