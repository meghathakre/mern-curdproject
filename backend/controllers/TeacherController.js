const teacherModel=require("../model/TeacherModel");
const teacherDataSave=async(req,res)=>{
    const {id,name,subject,salary}=req.body;

    try{
        const teacher=await teacherModel.create({
teacherid:id,
teachername:name,
subject:subject,
salary:salary


        })
        res.status(200).json(teacher);
    }catch(error){
        res.status(404).json("mongodb server Not start!!")
    }
    
}
const teacherDataDisplay=async(req,res)=>{
    try{
        const teacherData=await teacherModel.find();
        res.status(200).json(teacherData)
    }catch{
        res.status(404).json("data from mongodb not found")
    }
}
module.exports={
    teacherDataSave,
    teacherDataDisplay
}