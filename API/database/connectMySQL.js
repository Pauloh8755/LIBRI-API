"use strict";
import {Sequelize} from "sequelize";

/**
 * create database connection-> new Sequelize(
 *      name_db, user_db, password_db, objectJson: {
 *          host: "host",
 *          dialect: "syntax"
 * });
 */
const connection = new Sequelize("db_libri", "root", "12345678",{
    host: "localhost",
    dialect: "mysql"
});

/**
 * validate connection
 */
connection.authenticate().then(()=>{
    console.log("Success database connection");
}).catch((error)=>{
    console.log(error || "Failed database connection");
});

export default connection;
