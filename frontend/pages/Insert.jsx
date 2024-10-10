import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Insert=()=>{
    return(
        <>
        <Form className='input'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Id</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Designation </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee  Salary</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
        </>
    )
}
export default Insert;