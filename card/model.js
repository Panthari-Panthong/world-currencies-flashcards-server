const Sequelize = require('sequelize');
const db = require('../db');

const Card = db.define("card", {
  country: {
    type: Sequelize.STRING,
    field: "country",
  },
  currency: {
    type: Sequelize.STRING,
    field: "currency",
  },
  iso_code: {
    type: Sequelize.STRING,
    field: "iso_code",
  }
}, {
  timestamps: false
});


module.exports = Card;
