'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const RoleResource = app.model.define('role_resource', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    role_id: { type: INTEGER, unique: 'role_id_resource_id' },
    resource_id: { type: INTEGER, unique: 'role_id_resource_id' },
    create_time: DATE,
    update_time: DATE,
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
  });

  return RoleResource;
};
