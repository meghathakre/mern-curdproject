import { useEffect } from "react";

const EditData=()=>{









    useEffect(()=>{
   
    },[])
    return(
        <>
        <h1> Teacher Edit Data</h1>
<Route path="search" element={<Search/>}/>
        Teacher Id : <input type="text"  value={mydata.teacherid}/><br /><br />
        Teacher Name : <input type="text" value={mydata.teachername} /><br /><br />
        Teacher Subject : <input type="text" value={mydata.subject}/><br /><br />
        Teacher Salary : <input type="text" value={mydata.salary}/><br /><br />
        </>
    )
}
export default EditData;