import {useState,useEffect} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import edimage from "..";
import {useNavigate} from "react-router-dom";
const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadaData=()=>{
        let api="http://localhost:8000/teacher/teacherupdate";
        axios.get(api).then((res)=>{
          console.log(res.data);
          setMydata(res.data);
    })
    }
    useEffect(()=>{
        loadaData();
    },[]);

    const myrecDel=(id)=>{
        let api="http://localhost:8000/teacher/teacherdatadelete";
        axios.post(api,{id:id}).then((res)=>{
            alert("Data deleted!!!")
            loadaData();
        })
    }
    const myrecEdit=()=>{
navigate(`/editdta/${id}`)
    }
    return(
        <>
        <h1>Teacher Data Update</h1>
        <tr>
        <td>{key.teacherid}</td>
        <td>{key.teachername}</td>
        <td>{key.subject}</td>
        <td>{key.salary}</td>
    <td>
    <a href="#" onClick={()=>{myrecEdit(key._id)}}>
        <img src={edimage} width="30" height="30"/>
    </a>
    <a href="#" onClick={()=>{myrecDel(key._id)}}>
        <img src={delimage} width="30" height="30"/>
    </a>
    </td>
    </tr>
        </>
    )
}
export default Update;