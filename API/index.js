"use strict";
import Express from "express";
import User from "./models/User.js";

/**
 * instantiating express aplication
 */
const app = Express();

app.get("/", (req,res)=>{
    res.json({string: "olá"});
});

/**
 * creating self contained server -> app.listen(door: 3000, callback: function)
 */
app.listen(3000, ()=>{
    console.log("Server is running, url: http://localhost:3000");
    console.log("teste");
});

