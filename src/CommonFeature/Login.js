import {useState} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const Login=()=>{
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const navigate = useNavigate();
    const handleForm=(event)=>{
        event.preventDefault();
        var credentials = {email:email,password:password};
        axiosConfig.post("/login",credentials).then(function(rsp){
            navigate("/Dashboard");
        },function(err){
           alert("Write correct email and password");
        });
        
    }
    return(
        <div><br/><br/> 
        <div className="container bg-light">
        <div class="row">  
         <div className="col-sm-4 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleForm}>
            Email: <input className="form-control form-control-lg" type="text" onChange={function(event){setEmail(event.target.value);}} value={email}></input><br/>
            Password: <input className="form-control form-control-lg" type="password" value={password}onChange={(event)=>{setPass(event.target.value)}}></input> <br/>
           <center><input className="btn btn-primary btn-block" type="submit"></input></center> 
        </form> <br/> <center>
        <div>New in Online Pharmecy ? <Link to="/Register">Register here</Link></div>
        </center>
        </div>
    </div>
  </div>  
  </div>
    )
}
export default Login;