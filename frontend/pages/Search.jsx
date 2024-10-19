import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {message} from "antd";

const Search=()=>{
    const [teacherid,setteacherId]=useState("");
    const [mydata,setMydata]=useState([]);

    const handleSubmit =()=>{
        let api="http://localhost:8000/teacher/teachersearch";
        axios.post(api,{teacherid:teacherid}).then((res)=>{
            setMydata(res.data);
            if(res.data.length==0){
                message.error("No Record Found")
            }
        })
    }
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
        <h1>Serach Teacher Records</h1>
        Enter Teacher id :<input type="text" value={teacherid} onChange={(e)=>{setteacherId(e.target.value)}}/>
        <button onClick={handleSubmit}>Search</button>
        <br /><br />
        <hr />

        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Teacher Id</th>
                    <th>Teacher Name</th>
                    <th> subject</th>
                    <th> Salary</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </Table>
        
        
        </>
    )
}
export default Search;