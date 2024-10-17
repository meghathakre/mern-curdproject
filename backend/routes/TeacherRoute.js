const express=require("express");
const route=express.Router();
const teacherController=require("../controllers/TeacherController")

route.post("/teachersave",teacherController.teacherDataSave );
route.get("/teacherdisplay",teacherController.teacherDataDisplay);
route.get("/teachersearch",teacherController.teacherDataSearch);
route.get("/teacherupdate",teacherController.teacherUpate);



module.exports=route; 