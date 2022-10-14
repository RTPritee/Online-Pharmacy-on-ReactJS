import React, { useState } from "react";
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
 
const Register = () => {
  const [user, setUser] = useState({
    name	: "",
    email	: "",
    password : "",	
    conf_password : "",	
    type : "",	
    gender : ""
  });
 
  const { name,email,password,conf_password,type,gender} = user;
  const navigate = useNavigate(); 
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });  // This [...] syntax to access an object property to set a value is called computed property
  };
   
  function onSubmit(e) {
        e.preventDefault();
        axiosConfig.post("/register", user ).then(res=>{
           //alert('Registration Complete! You can Login now');
        navigate("/Login"); 
        });
    }
  return (
    <div className="container bg-light">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Registration</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Confirm Password"
              name="conf_password"
              value={conf_password}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Type (User or Admin?)"
              name="type"
              value={type}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Gender"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div> <br/>
          <center><button type = "submit" className="btn btn-primary btn-block">Create</button></center>
        </form> <br/>
        <ceneter>Already have an account? <Link to="/Login">Login</Link></ceneter>
      </div>
    </div>
  </div>  
  );
};
 
export default Register;