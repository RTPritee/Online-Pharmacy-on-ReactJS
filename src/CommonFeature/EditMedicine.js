import axiosConfig from './axiosConfig';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const EditMedicine=()=>
{   
    const navigate = useNavigate();
    
    const [medicine, setMedicine] = useState({
        name : "",
        quantity : "",
        price : "",
        discount: ""
    });

    const [picture, setPicture] = useState({});
    const handleInput = e => {
        setMedicine({ ...medicine, [e.target.name]: e.target.value });
    };
    const handleImage = e => {
        setPicture({photo: e.target.files[0]});
    }
    const { medicineId } = useParams();

    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        axiosConfig.get(`/editMedicine/65`,medicine)
        .then((rsp)=>{
            setMedicine(rsp.data.medicine);
            console.log(rsp);
        },(err)=>{
        }) 
    }

    const updateMedicine = (e)=> {
        e.preventDefault();
        //const medicineId = props.match.params.id;
        const formData = new FormData();
        formData.append("name",medicine.name);
        formData.append("quantity",medicine.quantity);
        formData.append("price", medicine.price);
        formData.append("discount", medicine.discount);
        formData.append("photo",picture.photo);

        axiosConfig.post(`/updateMedicine/65`, formData);
        alert('Medicine Updated');
        navigate("/ViewMedicine");

    }
    return (
        <div className="container-fluid px-4">
            <div className = "card mt-4">
                <div className = "card-header">
                    <h4>Edit Medicine</h4>
                    <form onSubmit={updateMedicine} encType="multipart/form-data">
                    <div className = "form-group-mb-3">
                        <label>Name</label>
                        <input type="text" name="name" onChange={handleInput} value={medicine.name} className="form-control"/>
                    </div>
                    <div className = "form-group-mb-3">
                        <label>Quantity</label>
                        <input type="text" name="quantity" onChange={handleInput} value={medicine.quantity} className="form-control"/>
                    </div>
                    <div className = "form-group-mb-3">
                        <label>Price(tk)</label>
                        <input type="text" name="price" onChange={handleInput} value={medicine.price} className="form-control"/>
                    </div>
                    <div className = "form-group-mb-3">
                        <label>Discount(%)</label>
                        <input type="text" name="discount" onChange={handleInput} value={medicine.discount} className="form-control"/>
                    </div>
                    <div className = "form-group-mb-3">
                    <label>Photo</label>
                    <img src = {`http://127.0.0.1:8000${medicine.photo}`} width = "80px" />
                    <input className="form-control" name="photo" onChange={handleImage} type="file"/>
                    </div><br/>
                    <button type = "submit" className="btn btn-primary btn-block">Update</button>
                    </form>
                    <Link to="/ViewMedicine"><button type = "submit" className="btn btn-primary btn-danger">Cancle</button></Link>
                </div>  
            </div>
        </div>
    );
}
export default EditMedicine;