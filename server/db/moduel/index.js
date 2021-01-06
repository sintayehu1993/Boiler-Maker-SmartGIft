const db = require('..database/');
const { Model } = require('sequelize/types');
const { Module } = require('webpack');
const Store = require('./store');
const Customer = require('./store');

Customer.belongsToMany(Store);
Store.hasMany(Customer);

module.exports = {
  db,
  Store,
  Customer,
};
