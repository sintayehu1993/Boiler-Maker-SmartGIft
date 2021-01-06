const db = require('../database');
// const { Model } = require('sequelize/types');
const { Module } = require('webpack');
const Store = require('./store');
const Customer = require('./customer');

// Customer.belongsTo(Store);
// Store.belongsTo(Customer);

module.exports = {
  db,
  Store,
  Customer,
};
