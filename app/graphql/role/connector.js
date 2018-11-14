'use strict';

const DataLoader = require('dataloader');
const BaseConnector = require('../base/connector');

class RoleConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.loaders = {
      roleIdLoader: new DataLoader(this.getByIds.bind(this)),
    };
  }

  getByIds(ids) {
    return this.ctx.app.model.Role.findByIds(ids);
  }

  getById(id) {
    return this.loaders.roleIdLoader.load(id);
  }

  getAll(param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.ctx.app.model.Role.findAll(sequelizeJSON);
  }
}

module.exports = RoleConnector;
