'use strict';

class BaseConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  getSequelizeJSON(param = {}) {
    const { ctx } = this;
    const { page = {}, filter = {} } = param;

    return ctx.helper.parseSequelizeJSON(page, filter);
  }
}

module.exports = BaseConnector;
