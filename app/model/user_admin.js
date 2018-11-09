'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UserAdmin = app.model.define('user_admin', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, unique: 'user_id' },
    password: STRING(255),
    create_time: DATE,
    update_time: DATE,
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
  });

  UserAdmin.associate = function() {
    UserAdmin.belongsTo(app.model.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  };

  return UserAdmin;
};
