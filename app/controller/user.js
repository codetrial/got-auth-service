'use strict';

const BaseController = require('./base');

class UserController extends BaseController {
  async index() {
    const { ctx } = this;

    try {
      const data = await ctx.model.User.findAll(ctx.sequelizeJSON);

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
      const data = await ctx.model.User.findByPk(ctx.params.id);

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
      const data = await ctx.model.User.createWithT(ctx.request.body);

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
      const data = await ctx.model.User.updateWithT([ ctx.params.id ], ctx.request.body);

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
      await ctx.model.User.destroyWithT([ ctx.params.id ]);

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
      const data = await ctx.model.User.findGroups(ctx.params.id, ctx.sequelizeJSON);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async addGroup() {
    const { ctx } = this;

    try {
      const ids = ctx.helper.toIdArray(ctx.request.body.ids);
      const data = await ctx.model.User.addGroups(ctx.params.id, ids);

      this.ctx.body = this.getSuccessJSON({ data });
    } catch (err) {
      this.ctx.body = this.getErrorJSON({
        data: {
          error: err.message,
        },
      });
    }
  }

  async removeGroup() {
    const { ctx } = this;

    try {
      const ids = ctx.helper.toIdArray(ctx.request.body.ids);
      const data = await ctx.model.User.removeGroups(ctx.params.id, ids);

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
      const data = await ctx.model.User.findRoles(ctx.params.id, ctx.sequelizeJSON);

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
      const ids = ctx.helper.toIdArray(ctx.request.body.ids);
      const data = await ctx.model.User.addRoles(ctx.params.id, ids);

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
      const ids = ctx.helper.toIdArray(ctx.request.body.ids);
      const data = await ctx.model.User.removeRoles(ctx.params.id, ids);

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
      const data = await ctx.model.User.findResources(ctx.params.id, ctx.sequelizeJSON);

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

module.exports = UserController;
