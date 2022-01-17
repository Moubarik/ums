const Sequelize = require('sequelize');
const db = new Sequelize('database', 'root', '',{
    host:"localhost",
    dialect:"mysql"
});

module.export = db;
