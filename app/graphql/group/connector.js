'use strict';

const DataLoader = require('dataloader');

class GroupConnector {
  constructor(ctx) {
    this.ctx = ctx;
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

  getAll() {
    return this.ctx.app.model.Group.findAll();
  }

  getByAppId(appId) {
    return this.ctx.app.model.Group.findByAppId(appId);
  }
}

module.exports = GroupConnector;
