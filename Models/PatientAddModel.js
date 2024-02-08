const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema(
    {           Name:String,
                Mobile: String,
                Address:String,
                Symptoms:String,
                Status:String
            }        
)


module.exports=mongoose.model("patients",patientSchema)
