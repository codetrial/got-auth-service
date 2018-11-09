'use strict';

const DataLoader = require('dataloader');

class AppConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loaders = {
      userIdLoader: new DataLoader(this.getByIds.bind(this)),
    };
  }

  getByIds(ids) {
    return this.ctx.app.model.App.findByIds(ids);
  }

  getById(id) {
    return this.loaders.userIdLoader.load(id);
  }

  getAll() {
    return this.ctx.app.model.App.findAll();
  }
}

module.exports = AppConnector;
