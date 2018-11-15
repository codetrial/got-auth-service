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
    groups(app, { param }, ctx) {
      return ctx.connector.app.getRole(app.id, param);
    },
    roles(app, { param }, ctx) {
      return ctx.connector.app.getGroup(app.id, param);
    },
    resources(app, { param }, ctx) {
      return ctx.connector.app.getResource(app.id, param);
    },
  },
  Mutation: {
    createApp(root, { data }, ctx) {
      return ctx.connector.app.create(data);
    },
    updateApp(root, { id, data }, ctx) {
      return ctx.connector.app.update(id, data);
    },
    destroyApp(root, { id }, ctx) {
      return ctx.connector.app.destroy(id);
    },
  },
};
