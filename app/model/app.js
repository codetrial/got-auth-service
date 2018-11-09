'use strict';

const Op = require('sequelize').Op;

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const App = app.model.define('app', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: STRING(255), unique: 'code' },
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

  App.associate = function() {
    App.hasMany(app.model.Group);
    App.hasMany(app.model.Role);
    App.hasMany(app.model.Resource);
  };

  App.addHook('beforeBulkDestroy', async opts => {
    const rows = await App.findAll(opts);
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

  App.createWithT = async function(data = {}) {
    return app.model.transaction(t => {
      return App.create(data, {
        transaction: t,
      });
    });
  };

  App.updateWithT = async function(ids, data = {}) {
    return app.model.transaction(t => {
      return App.update(data, {
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  App.destroyWithT = async function(ids) {
    return app.model.transaction(t => {
      return App.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  App.findByIds = async function(ids) {
    const apps = this.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    return apps;
  };

  App.findGroups = async function(id, query = {}) {
    return await App.findByPk(id).then(row => row.getGroups(query));
  };

  App.findRoles = async function(id, query = {}) {
    return await App.findByPk(id).then(row => row.getRoles(query));
  };

  App.findResources = async function(id, query = {}) {
    return await App.findByPk(id).then(row => row.getResources(query));
  };

  return App;
};
