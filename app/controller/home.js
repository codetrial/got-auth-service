'use strict';

const BaseController = require('./base');

class HomeController extends BaseController {
  async index() {
    this.ctx.body = this.getSuccessJSON({
      message: 'welcome',
    });
  }
}

module.exports = HomeController;
