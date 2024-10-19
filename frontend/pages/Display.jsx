import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:8000/teacher/teacherdisplay";
        try{
            const response=await axios.get(api);
setMydata(response.data);
console.log(response.data);
        }catch(error){
console.log(error);
alert(error.response.data);
        }
        
    }
    useEffect(()=>{
        loadData();
    },[]);

    const ans=mydata.map((key)=>{
return(
    <>
    <tr>
        <td>{key.teacherid}</td>
        <td>{key.teachername}</td>
        <td>{key.subject}</td>
        <td>{key.salary}</td>
    </tr>
    </>
)

    })
    return(
        <>
        <h1>Display Teacher data</h1>
        <table>
            <tr>
                <th>Teacher id</th>
                <th>Teacher Name</th>
                <th>Subject</th>
                <th>Salary</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;