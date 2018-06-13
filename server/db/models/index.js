
const User = require('./user')
const { Club, Employee, EmployeeTitle, Membership } = require('./club')
const { Course, Tee, Yardage, Build } = require('./course')
const { Address, City, State, Country } = require('./address')
const Architect = require('./architect')
const Tournament = require('./tournament')
const Event = require('./event')
const Player = require('./player')

// clubs can have many courses, but each course only belongs to one club
Course.belongsTo(Club)
Club.hasMany(Course)

Course.hasMany(Build)
Build.belongsTo(Course)

Build.belongsToMany(Architect, { through: 'architectBuilds' })
Architect.belongsToMany(Build, { through: 'architectBuilds' })

Club.belongsToMany(Employee, { through: 'clubEmployees' })
Employee.belongsToMany(Club, { through: 'clubEmployees' })

Course.hasMany(Event)
Event.belongsTo(Course)

Course.hasMany(Yardage)
Yardage.belongsTo(Course)

Tournament.hasMany(Event)
Event.belongsTo(Tournament)

Employee.belongsTo(EmployeeTitle)

Address.belongsTo(City)
Address.belongsTo(State)
Address.belongsTo(Country)
State.belongsTo(Country)

Club.belongsTo(Address)
Club.belongsTo(Membership)

module.exports = {
  User,
  Club,
  Employee,
  EmployeeTitle,
  Membership,
  Course,
  Tee,
  Yardage,
  Build,
  Address,
  City,
  State,
  Country,
  Architect,
  Tournament,
  Event,
  Player,
}
