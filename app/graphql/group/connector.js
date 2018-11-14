'use strict';

const DataLoader = require('dataloader');
const BaseConnector = require('../base/connector');

class GroupConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.loaders = {
      groupIdLoader: new DataLoader(this.getByIds.bind(this)),
    };
  }

  getByIds(ids) {
    return this.ctx.app.model.Group.findByIds(ids);
  }

  getById(id) {
    return this.loaders.groupIdLoader.load(id);
  }

  getAll(param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.ctx.app.model.Group.findAll(sequelizeJSON);
  }
}

module.exports = GroupConnector;
