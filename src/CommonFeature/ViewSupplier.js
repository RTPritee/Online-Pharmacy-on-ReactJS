import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import MenuTwo from './MenuTwo';

const ViewSupplier=()=>{
    
    const [supplier,setSupplier] = useState([]);
    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        axiosConfig.get("/viewSupplier")
        .then((rsp)=>{
            setSupplier(rsp.data);
            console.log(rsp);
        },(err)=>{
        }) 
    }
   
    function deleteOperation(supplierId){
        axiosConfig.delete(
            "/deleteSupplier/"+supplierId
        ).then(()=>{
            getData();
        })
    }
    return(
        <div>
        <MenuTwo/>
        <div className="container"><br/>
           <Link className="btn btn-outline-success" to="/AddSupplier">Add Supplier</Link>
           <Link className="btn btn-outline-warning" to="/InfoSupplier">Suppliers Info</Link>
        <br/>   <br/> 
        <h4 className="mb-3 text-left">Supplier List</h4><br/> 
        <Table striped>
        <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Joining</th> 
                    <th>Shift</th> 
                    <th>Salary</th> 
                    <th>Bonus</th> 
                    <th>Status</th> 
                    <th>Using Vehicle</th> 
                    <th>Action</th> 
                </tr>
                </thead>
                <tbody>
                {
                supplier.map((supplier,index)=>
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{supplier.name}</td>
                    <td>{supplier.email}</td>
                    <td>{supplier.dateOfJoin}</td>
                    <td>{supplier.shift}</td>
                    <td>{supplier.salary}</td>
                    <td>{supplier.bonus}</td>
                    <td>
                       <Badge pill bg ="info">{supplier.status}</Badge>
                    </td>
                    <td>{supplier.vehicle}</td>
                    <td> <Link className = 'btn btn-sm btn-info' to={`/EditSupplier/${supplier.supplierId}`}>Edit</Link>
                    <button class= "btn btn-sm btn-danger" onClick={()=>deleteOperation(supplier.supplierId)}>Delete</button>
                    </td>
                </tr>
            )
            }
            </tbody>
            </Table>
            </div>
            </div>
    )
}
export default ViewSupplier;