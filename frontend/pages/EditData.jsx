import { useEffect,useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const EditData=()=>{
const {teachid}=useParams();
const [mydata,setMydata]=useState({});

const loadData=()=>{
    let api="http://localhost:8000/teacher/teachereditdata";
    axios.post(api,{id:teachid}).then((res)=>{
console.log(res.data);
setMydata(res.data);
    })
   
}

 useEffect(()=>{
  loadData();
    },[]);

    return(
        <>
        <h1> Teacher Edit Data</h1>

        Teacher Id : <input type="text"  value={mydata.teacherid}/><br /><br />
        Teacher Name : <input type="text" value={mydata.teachername} /><br /><br />
        Teacher Subject : <input type="text" value={mydata.subject}/><br /><br />
        Teacher Salary : <input type="text" value={mydata.salary}/><br /><br />
        <button> submit</button>
        </>
    )
}
export default EditData;