'use strict';

const BaseConnector = require('../base/connector');

class ResourceTypeConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.sequelizeModel = ctx.model.ResourceType;
  }
}

module.exports = ResourceTypeConnector;
