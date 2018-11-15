'use strict';

const BaseConnector = require('../base/connector');

class UserConnector extends BaseConnector {
  constructor(ctx) {
    super(ctx);
    this.sequelizeModel = ctx.model.User;
  }

  getGroup(id, param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findGroups(id, sequelizeJSON);
  }

  addGroup(id, groups) {
    return this.sequelizeModel.addGroups(id, this.ctx.helper.toIdArray(groups));
  }

  removeGroup(id, groups) {
    return this.sequelizeModel.removeGroups(id, this.ctx.helper.toIdArray(groups));
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

  getResource(id, param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findResources(id, sequelizeJSON);
  }
}

module.exports = UserConnector;
