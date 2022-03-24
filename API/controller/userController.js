import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/user/insertUser", async(req, res)=>{
    try{
        const { body } = req;
        await User.create({
            ...body
        });
        res.status(200).json({"msg":"Dados inseridos com sucesso"});
    }catch(err){
        console.log(err);
        return(false);
    }
});

router.get("/user/selectUser", async (req, res)=>{
    res.status(200).json( await User.findAll());
});

export default router;
