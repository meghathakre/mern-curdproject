import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import edimage from "../public/images.png";
import delimage from "../public/download.png";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadaData = async () => {
        try {
            const api = "http://localhost:8000/teacher/teacherupdate";
            const res = await axios.get(api);
            console.log(res.data);
            setMydata(res.data);
        } catch (error) {
            console.error("Error loading data:", error.response ? error.response.data : error.message);
            alert("Failed to load data: " + (error.response ? error.response.data : error.message));
        }
    };

    useEffect(() => {
        loadaData();
    }, []);

    const myrecDel = async (id) => {
        const api = "http://localhost:8000/teacher/teacherdatadelete";
        try {
            await axios.post(api, { id });
            alert("Data deleted!");
            loadaData();
        } catch (error) {
            console.error("Error deleting data:", error.response ? error.response.data : error.message);
            alert("Failed to delete data: " + (error.response ? error.response.data : error.message));
        }
    };

    const myrecEdit = (id) => {
        navigate(`/editdata/${id}`);
    };

    const ans = mydata.map((key) => (
        <tr key={key._id}>
            <td>{key.teacherid}</td>
            <td>{key.teachername}</td>
            <td>{key.subject}</td>
            <td>{key.salary}</td>
            <td>
                <a href="#" onClick={(e) => { e.preventDefault(); myrecEdit(key._id); }}>
                    <img src="public/images.png" width="30" height="30" alt="Edit" />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); myrecDel(key._id); }}>
                    <img src="" width="30" height="30" alt="Delete" />
                </a>
            </td>
        </tr>
    ));

    return (
        <>
            <h1>Teacher Data Update</h1>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Teacher Id</th>
                        <th>Teacher Name</th>
                        <th>Teacher Subject</th>
                        <th>Teacher Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
        </>
    );
};

export default Update;
