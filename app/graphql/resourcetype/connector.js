'use strict';

const DataLoader = require('dataloader');
const BaseConnector = require('../base/connector');

class ResourceTypeConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.loaders = {
      resourceTypeIdLoader: new DataLoader(this.getByIds.bind(this)),
    };
  }

  getByIds(ids) {
    return this.ctx.app.model.ResourceType.findByIds(ids);
  }

  getById(id) {
    return this.loaders.resourceTypeIdLoader.load(id);
  }

  getAll(param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.ctx.app.model.ResourceType.findAll(sequelizeJSON);
  }
}

module.exports = ResourceTypeConnector;
