'use strict';

module.exports = {
  Query: {
    group(root, { id }, ctx) {
      return ctx.connector.group.getById(id);
    },
    groups(root, { appId }, ctx) {
      if (appId) {
        return ctx.connector.group.getByAppId(appId);
      }
      return ctx.connector.group.getAll();
    },
  },
};
