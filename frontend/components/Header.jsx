import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
const Header =()=>{
    return(
        <>
 <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </>
    )
}
export default Header;