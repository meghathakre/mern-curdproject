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
const teacherDataSearch=async(req,res)=>{
    try{
        const myData=await teacherModel.find({treacherid:id})
        res.status(200).json(myData);
    }catch{
        res.status(404).json("data from mongodb not found");
    }
}
const  teacherUpate=async(req,res)=>{
const Data=await teacherModel.find();
res.send(Data)
}
const teacherDataDelete=async(req,res)=>{
    const myid=req.body.id;
    const teacher=await teacherModel.findByIdAndDelete(myid);
    res.send("record deleted!")
}
const teacherDataEdit=async(req,res)=>{
    const id=req.body.id;
    const teacherdata=await teacherModel.findById(id);
    res.send(teacherdata);
}
module.exports={
    teacherDataSave,
    teacherDataDisplay,
    teacherDataSearch,
    teacherUpate,
    teacherDataDelete,
    teacherDataEdit
}