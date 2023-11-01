import {sequelize, DataTypes, Op} from "./model.js";

const Account = sequelize.define('account', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    alamat: DataTypes.STRING
});

export {Account, Op} ;