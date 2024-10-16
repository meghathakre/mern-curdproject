const express=require("express");
const route=express.Router();
const teacherController=require("../controllers/TeacherController")

route.post("/teachersave",teacherController.teacherDataSave );
route.get("/teacherdisplay",teacherController.teacherDataDisplay )


module.exports=route; 