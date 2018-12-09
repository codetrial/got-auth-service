'use strict';

module.exports = app => {
  app.model.parsePagination = function(opts = {}, count = 0) {
    const { limit, offset, order } = opts;
    const pagination = {
      total: count,
      totalPage: Math.ceil(count / limit),
      pageNo: Math.floor(offset / limit) + 1,
      pageSize: limit,
      orderBy: [],
      order: [],
    };

    order.forEach(([ orderBy, order ]) => {
      pagination.order.push(order);
      pagination.orderBy.push(orderBy);
    });

    return pagination;
  };

  if (app.config.env === 'local' || app.config.env === 'unittest') {
    app.beforeStart(async () => {
      await app.model.sync({
        /* force: true */
      });
    });
  }
};
