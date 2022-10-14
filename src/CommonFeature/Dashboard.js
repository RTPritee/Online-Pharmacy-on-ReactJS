import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import MenuTwo from './MenuTwo';
const Dashboard=()=>{
    const [info,setInfo] = useState([]);
    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        axiosConfig.get("/dashboard")
        .then((rsp)=>{
            setInfo(rsp.data);
            console.log(rsp);
        },(err)=>{
        }) 
    }
    return (
        <div>
        <MenuTwo/>
        <div className="container"><br/>
        <h4 className="mb-3 text-center">Welcome back Rehnuma Tabassum </h4><br/> 
        <Table striped>
            {
                info.map((info)=>
                <tbody>
                    <tr>
                    <td colSpan={3} className="text-center"><img src = {`http://127.0.0.1:8000/picture/pritee.jpg`} width = "80px" alt={info.name}/></td>
                    </tr>
                    <tr>
			        <td><b>Name </b><br/></td>
			        <td>:<br/></td>
                    <td>{info.name}</td>
                    </tr>
                    <tr>
                    <td><b>Gender </b><br/></td>
			        <td>:<br/></td>
                    <td>{info.gender}</td>
                    </tr>
                    <tr>
			        <td><b>Blood Group </b><br/></td>
			        <td>:<br/></td>
                    <td>{info.bloodGroup}</td>
                    </tr>
                    <tr>
			        <td><b>Date of Birth </b><br/></td>
			        <td>:<br/></td>
                    <td>{info.dob}</td>
                    </tr>
                    <tr>
			        <td><b>Address </b><br/></td>
			        <td>:<br/></td>
                    <td>{info.address}</td>
                    </tr><br/>
                    <tr>
                    <td colSpan={3} className="text-center">
                    <Link className = 'btn btn-sm btn-info' to={"/ViewMedicine"}>ViewMedicine</Link>&nbsp;&nbsp;
                    <Link className = 'btn btn-sm btn-success' to={"/ViewSupplier"}>ViewSupplier</Link>&nbsp;&nbsp;
                    <Link className = 'btn btn-sm btn-warning' to={"/ViewCustomer"}>viewCustomer</Link>
                    </td>
                    </tr>
                </tbody>
            )
            } 
            </Table>
    </div>
    </div>
    );
}
export default Dashboard;