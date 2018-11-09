'use strict';

module.exports = () => {
  return async function search(ctx, next) {
    const { page = {}, filter = {} } = ctx.query;

    ctx.sequelizeJSON = ctx.helper.parseSequelizeJSON(page, filter);

    await next();
  };
};
