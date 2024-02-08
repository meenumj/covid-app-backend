const express = require("express")
const patientAddModel=require("../Models/PatientAddModel")


const router=express.Router()

router.post("/addpatients",async(req,res)=>{
    let data=req.body
    let patient = new patientAddModel(data)
    let result = await patient.save()
    res.json({
        status:"success"
    })
})

router.get("/viewpatients",async(req,res)=>{
        let data=await patientAddModel.find()
        res.json(data)
})

module.exports=router