const express=require("express");
const route=express.Router();
const teacherController=require("../controllers/TeacherController");

route.post("/teachersave",teacherController.teacherDataSave );
route.get("/teacherdisplay",teacherController.teacherDataDisplay);
route.post("/teachersearch",teacherController.teacherDataSearch);
route.get("/teacherupdate",teacherController.teacherDataUpdate);
route.post("/teacherdatadelete",teacherController.teacherDataDelete);
route.post("/teachedataedit",teacherController.teacherDataEdit);



module.exports=route; 