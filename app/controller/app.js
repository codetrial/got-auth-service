'use strict';

const BaseController = require('./base');

class AppController extends BaseController {
  async index() {
    const { ctx } = this;

    try {
      const data = await ctx.model.App.findByPage(ctx.sequelizeJSON);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async show() {
    const { ctx } = this;

    try {
      const data = await ctx.model.App.findByPk(ctx.params.id);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async create() {
    const { ctx } = this;

    try {
      const data = await ctx.model.App.createWithT(ctx.request.body);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async update() {
    const { ctx } = this;

    try {
      const data = await ctx.model.App.updateWithT(
        [ ctx.params.id ],
        ctx.request.body
      );

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async destroy() {
    const { ctx } = this;

    try {
      await ctx.model.App.destroyWithT([ ctx.params.id ]);

      this.ctx.body = this.getSuccessJSON({
        data: {
          id: ctx.params.id,
        },
      });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async getGroup() {
    const { ctx } = this;

    try {
      const data = await ctx.model.App.findGroups(
        ctx.params.id,
        ctx.sequelizeJSON
      );

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async getRole() {
    const { ctx } = this;

    try {
      const data = await ctx.model.App.findRoles(
        ctx.params.id,
        ctx.sequelizeJSON
      );

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async getResource() {
    const { ctx } = this;

    try {
      const data = await ctx.model.App.findResources(
        ctx.params.id,
        ctx.sequelizeJSON
      );

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }
}

module.exports = AppController;
