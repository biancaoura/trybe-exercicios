const UserModel = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return user;
};

module.exports = UserModel;