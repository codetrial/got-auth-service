'use strict';

const BaseConnector = require('../base/connector');

class GroupConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.sequelizeModel = ctx.model.Group;
  }

  getRole(id, param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findRoles(id, sequelizeJSON);
  }

  addRole(id, roles) {
    return this.sequelizeModel.addRoles(id, this.ctx.helper.toIdArray(roles));
  }

  removeRole(id, roles) {
    return this.sequelizeModel.removeRoles(id, this.ctx.helper.toIdArray(roles));
  }
}

module.exports = GroupConnector;
