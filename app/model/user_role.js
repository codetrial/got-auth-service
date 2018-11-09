'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const UserRole = app.model.define('user_role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, unique: 'user_id_role_id' },
    role_id: { type: INTEGER, unique: 'user_id_role_id' },
    create_time: DATE,
    update_time: DATE,
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
  });

  return UserRole;
};
