'use strict';

module.exports = {
  Query: {
    app(root, { id }, ctx) {
      return ctx.connector.app.getById(id);
    },
    apps(root, { param }, ctx) {
      return ctx.connector.app.getAll(param);
    },
  },
  App: {
    roles(app, args, ctx) {
      return ctx.connector.role.getByAppId(app.id);
    },
  },
  Mutation: {
    createApp(root, { data }, ctx) {
      return ctx.model.App.createWithT(data);
    },
  },
};
