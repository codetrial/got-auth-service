'use strict';

const uniqBy = require('lodash/uniqBy');
const Op = require('sequelize').Op;

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: STRING(255), unique: 'email' },
      name: STRING(255),
      create_time: DATE,
      update_time: DATE,
    },
    {
      timestamps: true,
      createdAt: 'create_time',
      updatedAt: 'update_time',
      underscored: true,
      freezeTableName: true,
    }
  );

  User.associate = function() {
    User.belongsToMany(app.model.Group, {
      through: app.model.UserGroup,
    });
    User.belongsToMany(app.model.Role, {
      through: app.model.UserRole,
    });
  };

  User.addHook('beforeBulkDestroy', async opts => {
    const rows = await User.findAll(opts);
    const tasks = rows.reduce((prev, curr) => {
      return prev.concat([
        curr.setGroups([], {
          transaction: opts.transaction,
        }),
        curr.setRoles([], {
          transaction: opts.transaction,
        }),
        app.model.UserAdmin.findOne({
          where: {
            user_id: curr.id,
          },
        }).then(row =>
          row.destroy({
            transaction: opts.transaction,
          })
        ),
      ]);
    }, []);
    return Promise.all(tasks);
  });

  User.findByPage = async function(opts = {}) {
    return User.findAndCountAll(opts).then(result => {
      return {
        list: result.rows,
        pagination: app.model.parsePagination(opts, result.count),
      };
    });
  };

  User.createWithT = async function(data = {}) {
    return app.model.transaction(t => {
      return User.create(data, {
        transaction: t,
      });
    });
  };

  User.updateWithT = async function(ids, data = {}) {
    return app.model.transaction(t => {
      return User.update(data, {
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  User.destroyWithT = async function(ids) {
    return app.model.transaction(t => {
      return User.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  User.findByIds = async function(ids) {
    const users = this.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    return users;
  };

  User.findGroups = async function(id, query = {}) {
    return await User.findByPk(id).then(row => row.getGroups(query));
  };

  User.addGroups = async function(id, groupIds = []) {
    return await User.findByPk(id).then(row => row.addGroups(groupIds));
  };

  User.removeGroups = async function(id, groupIds = []) {
    if (!groupIds.length) {
      return await User.findByPk(id).then(row => row.setGroups(groupIds));
    }
    return await User.findByPk(id).then(row => row.removeGroups(groupIds));
  };

  User.findRoles = async function(id, query = {}) {
    const user = await User.findOne({
      where: {
        id,
      },
      include: [
        {
          model: app.model.Group,
          required: false,
          include: [
            {
              model: app.model.Role,
              where: query.where,
            },
          ],
        },
        {
          model: app.model.Role,
          required: false,
          where: query.where,
        },
      ],
    });
    const roles = (user.groups || []).reduce((prev, curr) => {
      return prev.concat(curr.roles || []);
    }, user.roles || []);

    return uniqBy(roles, 'id');
  };

  User.addRoles = async function(id, roleIds = []) {
    return await User.findByPk(id).then(row => row.addRoles(roleIds));
  };

  User.removeRoles = async function(id, roleIds = []) {
    if (!roleIds.length) {
      return await User.findByPk(id).then(row => row.setRoles(roleIds));
    }
    return await User.findByPk(id).then(row => row.removeRoles(roleIds));
  };

  User.findResources = async function(id, query = {}) {
    const user = await User.findOne({
      where: {
        id,
      },
      include: [
        {
          model: app.model.Group,
          required: false,
          include: [
            {
              model: app.model.Role,
              include: [
                {
                  model: app.model.Resource,
                  where: query.where,
                },
              ],
            },
          ],
        },
        {
          model: app.model.Role,
          required: false,
          include: [
            {
              model: app.model.Resource,
              where: query.where,
            },
          ],
        },
      ],
    });
    const roles = (user.groups || []).reduce((prev, curr) => {
      return prev.concat(curr.roles || []);
    }, user.roles || []);
    const resources = (uniqBy(roles, 'id') || []).reduce((prev, curr) => {
      return prev.concat(curr.resources || []);
    }, []);

    return uniqBy(resources, 'id');
  };

  return User;
};
