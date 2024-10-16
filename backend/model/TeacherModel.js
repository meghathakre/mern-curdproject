
const mongoose=require("mongoose");
const teachSchema=new mongoose.Schema({
    teacherid:{
        type:Number,
        require:true
    },
    teachername:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})
module.exports=mongoose.model("teacher",teachSchema)