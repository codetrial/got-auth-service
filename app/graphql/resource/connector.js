'use strict';

const DataLoader = require('dataloader');
const BaseConnector = require('../base/connector');

class ResourceConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
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

  getAll(param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.ctx.app.model.Resource.findAll(sequelizeJSON);
  }
}

module.exports = ResourceConnector;
