'use strict';

const DataLoader = require('dataloader');

class ResourceConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loaders = {
      resourceIdLoader: new DataLoader(this.getByIds.bind(this)),
    };
  }

  getByIds(ids) {
    return this.ctx.app.model.Resource.findByIds(ids);
  }

  getById(id) {
    return this.loaders.resourceIdLoader.load(id);
  }

  getAll() {
    return this.ctx.app.model.Resource.findAll();
  }

  getByAppId(appId) {
    return this.ctx.app.model.Resource.findByAppId(appId);
  }
}

module.exports = ResourceConnector;
