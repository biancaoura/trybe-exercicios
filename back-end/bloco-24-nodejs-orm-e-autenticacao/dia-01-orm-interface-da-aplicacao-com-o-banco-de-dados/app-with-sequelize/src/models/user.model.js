/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const UserModel = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
  });

  return user;
};

module.exports = UserModel;