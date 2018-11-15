'use strict';

const Op = require('sequelize').Op;

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Resource = app.model.define('resource', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    app_id: { type: INTEGER, unique: 'app_id_code' },
    code: { type: STRING(255), unique: 'app_id_code' },
    resource_type_id: INTEGER,
    detail: STRING(255),
    create_time: DATE,
    update_time: DATE,
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
  });

  Resource.associate = function() {
    Resource.belongsToMany(app.model.Role, {
      through: app.model.RoleResource,
    });
  };

  Resource.addHook('beforeBulkDestroy', async opts => {
    const rows = await Resource.findAll(opts);
    const tasks = rows.reduce((prev, curr) => {
      return prev.concat([
        curr.setRoles([], {
          transaction: opts.transaction,
        }),
      ]);
    }, []);
    return Promise.all(tasks);
  });

  Resource.createWithT = async function(data = {}) {
    return app.model.transaction(t => {
      return Resource.create(data, {
        transaction: t,
      });
    });
  };

  Resource.updateWithT = async function(ids, data = {}) {
    return app.model.transaction(t => {
      return Resource.update(data, {
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  Resource.destroyWithT = async function(ids) {
    return app.model.transaction(t => {
      return Resource.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  Resource.findByIds = async function(ids) {
    const resources = this.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    return resources;
  };

  Resource.findByRoleId = async function(roleId) {
    const role = await app.model.Role.findByPkId(roleId);

    return role.getResources(/* @todo: query */);
  };

  return Resource;
};
