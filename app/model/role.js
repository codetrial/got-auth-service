'use strict';

const Op = require('sequelize').Op;

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    app_id: { type: INTEGER, unique: 'app_id_code' },
    code: { type: STRING(255), unique: 'app_id_code' },
    name: STRING(255),
    create_time: DATE,
    update_time: DATE,
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
  });

  Role.associate = function() {
    Role.belongsToMany(app.model.Resource, {
      through: app.model.RoleResource,
    });

    Role.belongsToMany(app.model.Group, {
      through: app.model.GroupRole,
    });
    Role.belongsToMany(app.model.User, {
      through: app.model.UserRole,
    });
  };

  Role.addHook('beforeBulkDestroy', async opts => {
    const rows = await Role.findAll(opts);
    const tasks = rows.reduce((prev, curr) => {
      return prev.concat([
        curr.setGroups([], {
          transaction: opts.transaction,
        }),
        curr.setUsers([], {
          transaction: opts.transaction,
        }),
        curr.setResources([], {
          transaction: opts.transaction,
        }),
      ]);
    }, []);
    return Promise.all(tasks);
  });

  Role.createWithT = async function(data = {}) {
    return app.model.transaction(t => {
      return Role.create(data, {
        transaction: t,
      });
    });
  };

  Role.updateWithT = async function(ids, data = {}) {
    return app.model.transaction(t => {
      return Role.update(data, {
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  Role.destroyWithT = async function(ids) {
    return app.model.transaction(t => {
      return Role.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  Role.findByIds = async function(ids) {
    console.log(this);
    const roles = this.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    return roles;
  };

  Role.findByAppId = async function(appId) {
    return this.findAll({
      where: {
        app_id: appId,
      },
    });
  };

  Role.findResources = async function(id, query = {}) {
    return await Role.findByPk(id).then(row => row.getResources(query));
  };

  Role.addResources = async function(id, resourceIds = []) {
    if (typeof resourceIds === 'string') {
      resourceIds = resourceIds.length ? resourceIds.split(',') : [];
    }
    return await Role.findByPk(id).then(row => row.addResources(resourceIds));
  };

  Role.removeResources = async function(id, resourceIds = []) {
    if (typeof resourceIds === 'string') {
      resourceIds = resourceIds.length ? resourceIds.split(',') : [];
    }

    if (!resourceIds.length) {
      return await Role.findByPk(id).then(row => row.setResources(resourceIds));
    }
    return await Role.findByPk(id).then(row => row.removeResources(resourceIds));
  };

  return Role;
};
