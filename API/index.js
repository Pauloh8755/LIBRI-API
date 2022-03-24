"use strict";
import express from "express";
import userController from "./controller/userController.js";
/**
 * instantiating express aplication
 */
const app = express();

/**
 * express config
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/", userController);

/**
 * creating self contained server -> app.listen(door: 3000, callback: function)
 */
app.listen(3000, ()=>{
    console.log("Server is running, url: http://localhost:3000");
    console.log("teste");
});

