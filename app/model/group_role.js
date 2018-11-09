'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const GroupRole = app.model.define('group_role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    group_id: { type: INTEGER, unique: 'group_id_role_id' },
    role_id: { type: INTEGER, unique: 'group_id_role_id' },
    create_time: DATE,
    update_time: DATE,
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
  });

  return GroupRole;
};
