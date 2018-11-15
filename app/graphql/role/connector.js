'use strict';

const BaseConnector = require('../base/connector');

class RoleConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.sequelizeModel = ctx.model.Role;
  }

  getResource(id, param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findResources(id, sequelizeJSON);
  }

  addResource(id, resources) {
    return this.sequelizeModel.addResources(id, this.ctx.helper.toIdArray(resources));
  }

  removeResource(id, resources) {
    return this.sequelizeModel.removeResources(id, this.ctx.helper.toIdArray(resources));
  }
}

module.exports = RoleConnector;
