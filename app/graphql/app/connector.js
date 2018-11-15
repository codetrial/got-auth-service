'use strict';

const BaseConnector = require('../base/connector');

class AppConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.sequelizeModel = ctx.model.App;
  }

  getGroup(id, param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findGroups(id, sequelizeJSON);
  }

  getRole(id, param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findRoles(id, sequelizeJSON);
  }

  getResource(id, param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findResources(id, sequelizeJSON);
  }
}

module.exports = AppConnector;
