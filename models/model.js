import {Sequelize, DataTypes, Op} from 'sequelize';

const sequelize = new Sequelize("launderland", "root", "root", {
    host: 'mysql_db',
    dialect: 'mysql'
});

export {sequelize, DataTypes, Op};
