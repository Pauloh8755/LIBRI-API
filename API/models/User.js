"use strict";
import Sequelize from "sequelize";
import connection from "../database/connectMySQL.js";

/**
 * creating user model connection.define("tbl_name", objectJson: {field structure})
 */
const User = connection.define("tbl_user", {
    id_user:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: Sequelize.STRING(500),
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING(500),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(500),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    login:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password:{
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

User.sync();

export default User;