const { User } = require('../models');

const userdata = [
  {
    username: 'Bubba',
    password: 'password123'
  },
  {
    username: 'Dingus',
    password: 'password123'
  },
  {
    username: 'Bobby',
    password: 'password123'
  },
  {
    username: 'Cletus',
    password: 'password123'
  },
  {
    username: 'Dryford',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
