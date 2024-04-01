const mongoose =require("mongoose")

const DB ="mongodb+srv://sachindev0507:TMORhIFgY0SXmf2i@cluster0.tc4lfxc.mongodb.net/EmployeeData?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB,{
  
}).then(()=>console.log("connected to database")).catch((error)=>console.log(error.message))