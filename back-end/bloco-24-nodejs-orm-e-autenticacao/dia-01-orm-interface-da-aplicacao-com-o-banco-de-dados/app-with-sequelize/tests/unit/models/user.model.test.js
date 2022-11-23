const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const userModel = require('../../../src/models/user.model');

describe('User Model', () => {
  const User = userModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});