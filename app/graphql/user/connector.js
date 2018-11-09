'use strict';

const DataLoader = require('dataloader');

class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loaders = {
      userIdLoader: new DataLoader(this.getByIds.bind(this)),
    };
  }

  getByIds(ids) {
    return this.ctx.app.model.User.findByIds(ids);
  }

  getById(id) {
    return this.loaders.userIdLoader.load(id);
  }

  getAll() {
    return this.ctx.app.model.User.findAll();
  }
}

module.exports = UserConnector;
