'use strict';

const BaseController = require('./base');

class RoleController extends BaseController {
  async index() {
    const { ctx } = this;

    try {
      const data = await ctx.model.Role.findAll(ctx.sequelizeJSON);

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
      const data = await ctx.model.Role.findByPk(ctx.params.id);

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
      const data = await ctx.model.Role.createWithT(ctx.request.body);

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
      const data = await ctx.model.Role.updateWithT([ ctx.params.id ], ctx.request.body);

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
      await ctx.model.Role.destroyWithT([ ctx.params.id ]);

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

  async getResource() {
    const { ctx } = this;

    try {
      const data = await ctx.model.Role.findResources(ctx.params.id, ctx.sequelizeJSON);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async addResource() {
    const { ctx } = this;

    try {
      const ids = ctx.helper.toIdArray(ctx.request.body.ids);
      const data = await ctx.model.Role.addResources(ctx.params.id, ids);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async removeResource() {
    const { ctx } = this;

    try {
      const ids = ctx.helper.toIdArray(ctx.request.body.ids);
      const data = await ctx.model.Role.removeResources(ctx.params.id, ids);

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

module.exports = RoleController;
