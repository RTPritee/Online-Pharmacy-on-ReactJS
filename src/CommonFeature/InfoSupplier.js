import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import MenuTwo from './MenuTwo';

const InfoSupplier=()=>{
    
    const [supplier,setSupplier] = useState([]);
    
    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        axiosConfig.get("/infoSupplier")
        .then((rsp)=>{
            setSupplier(rsp.data);
            console.log(rsp);
        },(err)=>{
        }) 
    }
   
    return(
        <div>
        <MenuTwo/>
        <div className="container"><br/>
           <Link className="btn btn-outline-success" to="/ViewSupplier">Refresh</Link>
        <br/>   <br/> 
        <h4 className="mb-3 text-left">Suppliers Information</h4><br/> 
        <Table striped>
        <thead>
                <tr>
                    <th>#</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                    
                {
                supplier.map((supplier,index)=>
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{supplier.address}</td>
                    </tr>
                
            )
            }            
            </tbody>
            </Table>
            </div>
            </div>
    )
}
export default InfoSupplier;