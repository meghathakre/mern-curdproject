import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
const Insert=()=>{
  const[input,setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log (input);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/teacher/teachersave";
    axios.post(api,input).then((res)=>{
      alert("data save!!");
      console.log(res);
    }).catch((err)=>{
      alert(err.response.data);
    })
  }

    return(
        <>
        <Form className='input'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Teacher Id</Form.Label>
        <Form.Control type="text" name="id"  value={input.id} placeholder="Enter email" onChange={handleInput} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teacher Name</Form.Label>
        <Form.Control type="email" name="name" value={input.name} placeholder="Enter email" onChange={handleInput}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject </Form.Label>
        <Form.Control type="email" name="subject" value={input.subject} placeholder="Enter email" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teacher  Salary</Form.Label>
        <Form.Control type="email" name="salary" value={input.salary} placeholder="Enter email" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  
        </>
    )
}
export default Insert;