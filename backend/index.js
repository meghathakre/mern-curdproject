const express=require("express");
const app=express();
const bodyparser=require('body-parser');
const cors=require("cors");
require("dotenv").config();
const teacherRoute=require("./routes/TeacherRoute");
const  mongoose  = require("mongoose");
mongoose.connect(process.env.DBCONECTION).then(()=>{
console.log("DB SuccesFully Connected")
});
const port=process.env.PORT || 3000
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use("/teacher",teacherRoute);
app.listen(port,()=>{
    console.log(`server run on ${port}!!!`);
})