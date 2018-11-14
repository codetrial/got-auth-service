'use strict';

const DataLoader = require('dataloader');
const BaseConnector = require('../base/connector');

class UserConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
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

  getAll(param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.ctx.app.model.User.findAll(sequelizeJSON);
  }
}

module.exports = UserConnector;
