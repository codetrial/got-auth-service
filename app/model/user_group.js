'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const UserGroup = app.model.define('user_group', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, unique: 'user_id_group_id' },
    group_id: { type: INTEGER, unique: 'user_id_group_id' },
    create_time: DATE,
    update_time: DATE,
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
  });

  return UserGroup;
};
