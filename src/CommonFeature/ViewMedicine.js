import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import MenuTwo from './MenuTwo';

const ViewMedicine=()=>{
    const [medicine,setMedicine] = useState([]);
    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        axiosConfig.get("/viewMedicine")
        .then((rsp)=>{
            setMedicine(rsp.data);
            console.log(rsp);
        },(err)=>{
        }) 
    }
    function deleteOperation(medicineId){
        axiosConfig.delete(
            "/deleteMedicine/"+medicineId
        ).then(()=>{
            getData();
        })
    }
     
    return(
        <div>
        <MenuTwo/>
        <div className="container" ><br/>
        <Link  to="/AddMedicine" className="btn btn-outline-success">Add Medicine</Link>
        <br/> <br/>
            <h4 className="mb-3 text-left">Medicine List</h4>
            <Table striped>
            <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price(tk)</th>
            <th>Discount(%)</th>
            <th>Photo</th>
            <th>Action</th> 
            </tr>
            </thead>
            <tbody>
            
            {
                medicine.map((medicine,index)=>
                
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{medicine.name}</td>
                    <td>{medicine.quantity}</td>
                    <td>{medicine.price}</td>
                    <td>{medicine.discount}</td>
                    <td><img src = {`http://127.0.0.1:8000${medicine.photo}`} width = "80px" alt={medicine.name}/></td>
                    <td>
                    <Link className = 'btn btn-sm btn-info' to={`/EditMedicine/${medicine.medicineId}`}>Edit</Link>
                    <Button variant="btn btn-sm btn-danger" onClick={()=>deleteOperation(medicine.medicineId)}>Delete</Button>
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
export default ViewMedicine;