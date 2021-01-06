const Sequelize = require('sequelize');
const db = require('../database');

const Customer = db.define('project', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
    unique: true,
    msg: 'There is an account associated with this email already.',
  },
  userName: {
    type: Sequelize.STRING,
    type: Sequelize.INTEGER,
    validate: {
        notEmpty: true,
      },
      unique: true,
      msg: 'There is an account associated with this username already.',
  },
  passWord: {
    type: Sequelize.STRING,
    type: Sequelize.INTEGER,
    validate: {
        notEmpty: true,
      },
      unique: false,
  },
  totalAmount: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0.0,
    },
  },
});


module.exports = Customer;