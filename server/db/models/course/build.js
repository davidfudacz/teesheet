const Sequelize = require('sequelize')
const db = require('../../../db')

const Build = db.define('build', {
  buildType: {
    type: Sequelize.ENUM,
    values: ['original', 'redesign', 'restoration']
  },
  year: {
    type: Sequelize.STRING,
    validate: {
      isNumeric: true
    }
  },
})

module.exports = Build
