'use strict';

// had enabled by egg
// exports.static = true;

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.graphql = {
  enable: true,
  package: 'egg-graphql',
};

exports.token = {
  enable: true,
  package: 'egg-token',
};
