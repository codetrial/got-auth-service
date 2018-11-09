'use strict';

const operators = require('sequelize').Op;

function toJSON(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (err) {
      data = {};
    }
  }

  return data;
}

function parsePage(page = {}) {
  const { order = '', orderBy = '', pageNo = 1, pageSize = 10 } = page;
  const sequelizeOrder = [];

  const orderList = order.length ? order.split(',') : [];
  const orderByList = orderBy.length ? orderBy.split(',') : [];

  orderByList.forEach((ob, i) => {
    const direction = (orderList[i] || 'DESC').toUpperCase();
    sequelizeOrder.push([ ob, direction ]);
  });

  return {
    limit: pageSize,
    offset: (pageNo - 1) * pageSize,
    order: sequelizeOrder,
  };
}

function parseFilter(filter = {}) {
  const REG = /^([A-Z]+)_(\w+)/;
  const filterJSON = {};

  Object.keys(filter).forEach(key => {
    if (REG.test(key)) {
      let [ opKey, fieldKey ] = REG.exec(key).slice(1);
      opKey = opKey.toLowerCase();
      if (operators[opKey] != null) {
        filterJSON[fieldKey] = {
          [operators[opKey]]: filter[key],
        };
      }
    } else {
      filterJSON[key] = filter[key];
    }
  });

  return {
    where: filterJSON,
  };
}

function parseSequelizeJSON(page, filter) {
  page = toJSON(page);
  filter = toJSON(filter);
  return Object.assign({}, parsePage(page), parseFilter(filter));
}

module.exports = {
  parseSequelizeJSON,
};
