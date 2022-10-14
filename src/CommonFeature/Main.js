import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Menu from './Menu';
import Home from './Home';
import Register from './Register';
import ViewSupplier from './ViewSupplier';
import ViewCustomer from './ViewCustomer';
import AddSupplier from './AddSupplier';
import AddMedicine from './AddMedicine';
import ViewMedicine from './ViewMedicine';
import EditMedicine from './EditMedicine';
import EditSupplier from './EditSupplier';
import InfoSupplier from './InfoSupplier';
import Log from './Log';
import Dashboard from './Dashboard';

const Main = ()=>{
    return (
        <div>
             <BrowserRouter>
             <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/Login" element={<Login/>} />
             <Route path="/Dashboard" element={<Dashboard/>} />
             <Route path="/Register" element={<Register/>} />
             <Route path="/ViewSupplier" element={<ViewSupplier/>} />
             <Route path="/ViewCustomer" element={<ViewCustomer/>} />
             <Route path="/AddSupplier" element={<AddSupplier/>} />
             <Route path="/ViewMedicine" element={<ViewMedicine/>} />
             <Route path="/AddMedicine" element={<AddMedicine/>} />
             <Route path="/EditMedicine/:id" element={<EditMedicine/>} />
             <Route path="/EditSupplier/:id" element={<EditSupplier/>} />
             <Route path="/Logout/:id" element={<Log/>} />
             <Route path="/InfoSupplier" element={<InfoSupplier/>} />
             </Routes>
             </BrowserRouter>
        </div>
    )
}
export default Main;