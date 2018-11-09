'use strict';

const DataLoader = require('dataloader');

class RoleConnector {
  constructor(ctx) {
    this.ctx = ctx;
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

  getAll() {
    return this.ctx.app.model.Role.findAll();
  }

  getByAppId(appId) {
    return this.ctx.app.model.Role.findByAppId(appId);
  }
}

module.exports = RoleConnector;
