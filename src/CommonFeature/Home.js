import 'bootstrap/dist/css/bootstrap.css';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axiosConfig from './axiosConfig';
import Menu from './Menu';
function Home() {
    const [home, setHome] = useState([]);
    useEffect(() => {
        axiosConfig.get("/")
            .then((rsp) => {
                setHome(rsp.data);
                console.log(rsp);
            }, (err) => {
            });
    }, []);
    return (
        <div>
        <Menu/><br/>
        <div className="container">
           
           <center> <img src = {`http://127.0.0.1:8000/picture/onlinePhar.jpg`} width = "700px"/></center>
        </div>
        <div>
        <h3 className="text-center">About Us</h3>
        <body className="text-center">
        Our Online Pharmecy brings to you a digital platform for all your healthcare <br/>
        needs from genuine medicines to vitamins, doctor consultations, and even lab testing<br/>
        with sample collection conveniently from your home.
        </body>
        </div>
        </div>
    );
}
export default Home;