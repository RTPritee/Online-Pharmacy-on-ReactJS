import axiosConfig from './axiosConfig';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
const Log=()=>{
   // const navigate = useNavigate();
    const [id,setid] = useState("");
    useEffect(()=>{
        axiosConfig.get("/logout/"+id)
        .then((rsp)=>{
            console.log(rsp);
            alert("you are logged out")
        },(err)=>{
        }) 
    },[]);
    return(
        
        <Link to="/" value = "Home"/>
        
    );
}
export default Log;