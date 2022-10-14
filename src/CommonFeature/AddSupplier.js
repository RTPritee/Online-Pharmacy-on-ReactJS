import React, { useState} from "react";
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
 
const AddSupplier = () => {
  const [supplier, setSupplier] = useState({
    name : "",
    email : "",
    dateOfJoin : "",
    shift : "",
    salary : "",
    bonus : "",
    status : "",
    vehicle: ""
  });
 
  const { name,email,dateOfJoin,shift,salary,bonus,status,vehicle} = supplier;
   
  const onInputChange = e => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  function onSubmit(e) {
        e.preventDefault();
        axiosConfig.post("/addSupplier", supplier).then(res=>{
          alert('Data Inserted');
          navigate("/ViewSupplier");
        });
        
    }
  return (
    <div className="container-fluid px-4">
            <div className = "card mt-4">
                <div className = "card-header">
                    <h4>Add Supplier</h4>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Date of Join (yy-mn-dy)"
              name="dateOfJoin"
              value={dateOfJoin}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Shift"
              name="shift"
              value={shift}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Salary"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Bonus"
              name="bonus"
              value={bonus}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Status(1=Active,0=Deactive)"
              name="status"
              value={status}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Vehicle"
              name="vehicle"
              value={vehicle}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <button type = "submit" className="btn btn-primary btn-block">Add</button>
        </form>
        <Link to="/ViewSupplier"><button type = "submit" className="btn btn-primary btn-danger">Cancle</button></Link>
      </div>
    </div>
  </div>  
  );
};
 
export default AddSupplier;