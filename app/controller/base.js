'use strict';

const Controller = require('egg').Controller;

const CONSTANTS = {
  SUCCESS: '200',
  SUCCESS_MESSAGE: 'success',
  ERROR: '500',
  ERROR_MESSAGE: 'error',
};

class BaseController extends Controller {

  static get CONSTANTS() {
    return CONSTANTS;
  }

  getErrorJSON({ status = CONSTANTS.ERROR, message = CONSTANTS.ERROR_MESSAGE, data } = {}) {
    return {
      status,
      message,
      data,
    };
  }

  getSuccessJSON({ status = CONSTANTS.SUCCESS, message = CONSTANTS.SUCCESS_MESSAGE, data } = {}) {
    return {
      status,
      message,
      data,
    };
  }
}

module.exports = BaseController;
