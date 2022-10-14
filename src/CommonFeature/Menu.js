import MenuItem from './MenuItem';
import {Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function Menu() {
    return (
        <div>
           <Navbar bg ="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
                <MenuItem url="/" value="Home" />&nbsp;&nbsp;&nbsp;&nbsp;
                <MenuItem url="/Login" value="Login" />
                </Nav>
            </Container>
            </Navbar>
        </div>
    );
}
export default Menu;