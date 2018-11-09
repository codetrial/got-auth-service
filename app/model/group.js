'use strict';

const Op = require('sequelize').Op;

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Group = app.model.define('group', {
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

  Group.associate = function() {
    Group.belongsToMany(app.model.Role, {
      through: app.model.GroupRole,
    });

    Group.belongsToMany(app.model.User, {
      through: app.model.UserGroup,
    });
  };

  Group.addHook('beforeBulkDestroy', async opts => {
    const rows = await Group.findAll(opts);
    const tasks = rows.reduce((prev, curr) => {
      return prev.concat([
        curr.setRoles([], {
          transaction: opts.transaction,
        }),
        curr.setUsers([], {
          transaction: opts.transaction,
        }),
      ]);
    }, []);
    return Promise.all(tasks);
  });

  Group.createWithT = async function(data = {}) {
    return app.model.transaction(t => {
      return Group.create(data, {
        transaction: t,
      });
    });
  };

  Group.updateWithT = async function(ids, data = {}) {
    return app.model.transaction(t => {
      return Group.update(data, {
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  Group.destroyWithT = async function(ids) {
    return app.model.transaction(t => {
      return Group.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  Group.findByIds = async function(ids) {
    const groups = this.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    return groups;
  };

  Group.findByAppId = async function(appId) {
    return this.findAll({
      where: {
        app_id: appId,
      },
    });
  };

  Group.findRoles = async function(id, query = {}) {
    return await Group.findByPk(id).then(row => row.getRoles(query));
  };

  Group.addRoles = async function(id, roleIds = []) {
    if (typeof roleIds === 'string') {
      roleIds = roleIds.length ? roleIds.split(',') : [];
    }
    return await Group.findByPk(id).then(row => row.addRoles(roleIds));
  };

  Group.removeRoles = async function(id, roleIds = []) {
    if (typeof roleIds === 'string') {
      roleIds = roleIds.length ? roleIds.split(',') : [];
    }

    if (!roleIds.length) {
      return await Group.findByPk(id).then(row => row.setRoles(roleIds));
    }
    return await Group.findByPk(id).then(row => row.removeRoles(roleIds));
  };

  return Group;
};
