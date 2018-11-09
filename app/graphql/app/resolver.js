'use strict';

module.exports = {
  Query: {
    app(root, { id }, ctx) {
      return ctx.connector.app.getById(id);
    },
    apps(root, args, ctx) {
      return ctx.connector.app.getAll();
    },
  },
  App: {
    roles(app, args, ctx) {
      console.log('WTF', app.id);
      return ctx.connector.role.getByAppId(app.id);
    },
  },
};
