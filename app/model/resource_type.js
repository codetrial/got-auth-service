'use strict';

const Op = require('sequelize').Op;

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ResourceType = app.model.define('resource_type', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: STRING(255),
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

  ResourceType.associate = function() {
    ResourceType.hasMany(app.model.Resource, {
      foreignKey: 'resource_type_id',
      sourceKey: 'id',
    });
  };

  ResourceType.addHook('beforeBulkDestroy', async opts => {
    const rows = await ResourceType.findAll(opts);
    const tasks = rows.reduce((prev, curr) => {
      return prev.concat([
        curr.setResources([], {
          transaction: opts.transaction,
        }),
      ]);
    }, []);
    return Promise.all(tasks);
  });

  ResourceType.createWithT = async function(data = {}) {
    return app.model.transaction(t => {
      return ResourceType.create(data, {
        transaction: t,
      });
    });
  };

  ResourceType.updateWithT = async function(ids, data = {}) {
    return app.model.transaction(t => {
      return ResourceType.update(data, {
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  ResourceType.destroyWithT = async function(ids) {
    return app.model.transaction(t => {
      return ResourceType.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        transaction: t,
      });
    });
  };

  return ResourceType;
};
