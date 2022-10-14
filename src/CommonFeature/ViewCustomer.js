import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axiosConfig from './axiosConfig';
import MenuTwo from './MenuTwo';
//import {Link} from 'react-router-dom';

const ViewCustomer=()=>{
    const [customer,setCustomer] = useState([]);
    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        axiosConfig.get("/viewCustomer")
        .then((rsp)=>{
            setCustomer(rsp.data);
            console.log(rsp);
        },(err)=>{
        }) 
    }
    function deleteOperation(customersId){
        axiosConfig.delete(
            "/deleteCustomer/"+customersId
        ).then(()=>{
            getData();
            alert('The customer account will be deleted if you block');
        })
    }
     
    return(
        <div>
        <MenuTwo/>
        <div className="container" ><br/>
            <h4 class="mb-3 text-left">Customers List</h4>
            <Table striped>
            <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Joined At </th>
            <th>Action</th> 
            </tr>
            </thead>
            <tbody>
            {
            customer.map((customer,index)=>
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.created_at}</td>
                    <td> 
                    <Button variant="danger" onClick={()=>deleteOperation(customer.customersId)}>Block</Button>
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
export default ViewCustomer;