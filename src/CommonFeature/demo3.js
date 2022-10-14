import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const EditSpecialEmployee =(props)=>{

    const [employee,setEmployee] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/admin/special/employee/edit/${id}`)
        .then((res)=>{
            setEmployee({
                uname:res.data.uname,
                position:res.data.position,
                salary:res.data.salary,
                bonus:res.data.bonus,
                id:res.data.id,
            });
            console.log(res);
        },(err)=>{
            debugger;
        }) 
    },[]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({...values,[name]:value}))
        }

        const submitForm = (e) =>{
           
            axios.post("http://localhost:8000/api/admin/special/employee/edit",employee)
            .then((rsp)=>{
                console.log(rsp.data);
                window.location.href="/special/employee";          
            })

        }
            
        return(
        <div>
           <br/><br/>
           <p align="right" style={{marginRight:"40px"}}><a className="btn btn-warning" href="/login">Logout</a></p>

            <center>   
                <h3>Edit Specia Employee</h3>
                    <div className="col-md-4">
                        <input type="hidden" name="id" className="form-control" value={employee.id || '' } onChange={handleChange}/><br/>
                    
                        <input type="text" id="RoomNo" name="uname" value={employee.uname || '' } onChange={handleChange}/><br/>
                        
                    
                        <input type="text" id="NID" name="position" value={employee.position || '' } onChange={handleChange}/><br/>
                    
                        <input type="text" id="Address" name="salary" value={employee.salary || '' } onChange={handleChange}/><br/>
                    
                        <input type="text" id="Email" name="bonus" value={employee.bonus || '' } onChange={handleChange}/><br/><br/>
                        
                        <input type="submit" onClick={submitForm} className="btn btn-primary" value="Apply"/>
                    </div>    

            </center>    
        </div>
    )

}
export default EditSpecialEmployee;