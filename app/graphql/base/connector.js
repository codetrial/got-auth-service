'use strict';

const DataLoader = require('dataloader');

const CONSTANTS = {
  OK: 200,
  OK_MESSAGE: 'OK',
  ERROR: 500,
  ERROR_MESSAGE: 'ERROR',
};

class BaseConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loaders = {
      idLoader: new DataLoader(this.getByIds.bind(this)),
    };
    this.sequelizeModel = null;
  }

  getByIds(ids) {
    return this.sequelizeModel.findByIds(ids);
  }

  getById(id) {
    return this.loaders.idLoader.load(id);
  }

  getAll(param) {
    const sequelizeJSON = this.getSequelizeJSON(param);
    return this.sequelizeModel.findAll(sequelizeJSON);
  }

  async create(data) {
    try {
      await this.sequelizeModel.createWithT(data);
      return this.responseOk();
    } catch (err) {
      return this.responseError(err);
    }
  }

  async update(id, data) {
    try {
      await this.sequelizeModel.updateWithT(this.ctx.helper.toIdArray(id), data);
      return this.responseOk();
    } catch (err) {
      return this.responseError(err);
    }
  }

  async destroy(id) {
    try {
      await this.sequelizeModel.destroyWithT(this.ctx.helper.toIdArray(id));
      return this.responseOk();
    } catch (err) {
      return this.responseError(err);
    }
  }

  responseOk() {
    return {
      status: CONSTANTS.OK,
      message: CONSTANTS.OK_MESSAGE,
    };
  }

  responseError(err = {}) {
    const message = typeof err === 'string' ? err : err.message || CONSTANTS.ERROR_MESSAGE;
    return {
      status: CONSTANTS.ERROR,
      message,
    };
  }

  getSequelizeJSON(param = {}) {
    const { ctx } = this;
    const { page = {}, filter = {} } = param;

    return ctx.helper.parseSequelizeJSON(page, filter);
  }
}

module.exports = BaseConnector;
