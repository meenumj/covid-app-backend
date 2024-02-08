const mongoose = require("mongoose")
const express = require("express")
const cors=require("cors")
const patientAddRouter = require("./Controllers/PatientAddRouter")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/covid",patientAddRouter)

mongoose.connect("mongodb+srv://meenumj:meenumj167@cluster0.uobnjw6.mongodb.net/covidDb?retryWrites=true&w=majority",
 {useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("Server Running")
})