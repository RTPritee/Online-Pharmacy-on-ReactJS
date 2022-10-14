import MenuItem from './MenuItem';
import {Navbar,Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function MenuTwo() {
    return (
        <div class="nav-item">
            <Navbar bg ="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
            <MenuItem url="/Dashboard" value="Dashboard" />  &nbsp;&nbsp;&nbsp;&nbsp;
            <MenuItem url="/ViewCustomer" value="Customers" /> &nbsp;&nbsp;&nbsp;&nbsp;
            <MenuItem url="/ViewSupplier" value="Suppliers" /> &nbsp;&nbsp;&nbsp;&nbsp;
            <MenuItem url="/ViewMedicine" value="My Store" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <MenuItem url="/" value="Logout" />
            </Nav>
            </Container>
            </Navbar>
        </div>
    );
}
export default MenuTwo;