'use strict';

const BaseController = require('./base');

class GroupController extends BaseController {
  async index() {
    const { ctx } = this;

    try {
      const data = await ctx.model.Group.findAll(ctx.sequelizeJSON);

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
      const data = await ctx.model.Group.findByPk(ctx.params.id);

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
      const data = await ctx.model.Group.createWithT(ctx.request.body);

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
      const data = await ctx.model.Group.updateWithT([ ctx.params.id ], ctx.request.body);

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
      await ctx.model.Group.destroyWithT([ ctx.params.id ]);

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

  async getRole() {
    const { ctx } = this;

    try {
      const data = await ctx.model.Group.findRoles(ctx.params.id, ctx.sequelizeJSON);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async addRole() {
    const { ctx } = this;

    try {
      const data = await ctx.model.Group.addRoles(ctx.params.id, ctx.request.body.ids);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async removeRole() {
    const { ctx } = this;

    try {
      const data = await ctx.model.Group.removeRoles(ctx.params.id, ctx.request.body.ids);

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

module.exports = GroupController;
