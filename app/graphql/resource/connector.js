'use strict';

const BaseConnector = require('../base/connector');

class ResourceConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.sequelizeModel = ctx.model.Resource;
  }
}

module.exports = ResourceConnector;
