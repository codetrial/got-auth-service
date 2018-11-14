'use strict';

const DataLoader = require('dataloader');
const BaseConnector = require('../base/connector');

class AppConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
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

  getAll(param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.ctx.app.model.App.findAll(sequelizeJSON);
  }
}

module.exports = AppConnector;
