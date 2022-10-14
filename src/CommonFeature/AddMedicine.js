import axiosConfig from './axiosConfig';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function AddMedicine()
{   
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
    const navigate = useNavigate();
    const submitMedicine = (e)=> {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo",picture.photo);
        formData.append("name",medicine.name);
        formData.append("quantity",medicine.quantity);
        formData.append("price", medicine.price);
        formData.append("discount", medicine.discount);

        axiosConfig.post("/addMedicine", formData);
        //alert('Medicine Added');
        navigate("/ViewMedicine");

    }
    return (
        <div className="container-fluid px-4">
            <div className = "card mt-4">
                <div className = "card-header">
                    <h4>Add Medicine</h4>
                    <form onSubmit={submitMedicine} encType="multipart/form-data">
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
                    <input class="form-control" name="photo" onChange={handleImage} type="file"/>
                    </div><br/>
                    <button type = "submit" className="btn btn-primary btn-block">Add</button>
                    </form>
                    <Link to="/ViewMedicine"><button type = "submit" className="btn btn-primary btn-danger">Cancle</button></Link>
                </div>  
            </div>
        </div>
    );
}
export default AddMedicine;