'use strict';

const BaseController = require('./base');

class ResourceTypeController extends BaseController {
  async index() {
    const { ctx } = this;

    try {
      const data = await ctx.model.ResourceType.findAll(ctx.sequelizeJSON);

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
      const data = await ctx.model.ResourceType.findByPk(ctx.params.id);

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
      const data = await ctx.model.ResourceType.createWithT(ctx.request.body);

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
      const data = await ctx.model.ResourceType.updateWithT([ ctx.params.id ], ctx.request.body);

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
      await ctx.model.ResourceType.destroyWithT([ ctx.params.id ]);

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
}

module.exports = ResourceTypeController;
