const Sequelize = require('sequelize');
const db = require('../database');

const Store = db.define('store', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'default',
    },
    nameOfACard: {
      cardName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0.0,
        },
      },
      imageUrlOfCard: {
        type: Sequelize.STRING,
        defaultValue: 'default',
      },
    },
  },
});

module.exports = Store;
