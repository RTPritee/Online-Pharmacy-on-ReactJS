import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosConfig from './axiosConfig';
//import { useHistory } from 'react-router';

const EditSupplier = () => {
    //let history = useHistory();
    const [supplierId, setSupplierID] = useState(null);
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfJoin, setDateOfJoin] = useState("");
    const [shift, setShift] = useState("");
    const [salary, setSalary] = useState("");
    const [bonus, setBonus] = useState("");
    const [status, setStatus] = useState("");
    const [vehicle, setVehicle] = useState("");

    useEffect(() => {
        setSupplierID(localStorage.getItem("supplierId"))
        setname(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setDateOfJoin(localStorage.getItem("dateOfJoin"));
        setShift(localStorage.getItem("shift"));
        setSalary(localStorage.getItem("salary"));
        setBonus(localStorage.getItem("bonus"));
        setStatus(localStorage.getItem("status"));
        setVehicle(localStorage.getItem("vehicle"));


    }, []);

    const updateAPIData = () => {
        axiosConfig.put(`/updateSupplier/32`, {
            supplierId,
            name,
            email,
            dateOfJoin,
            shift,
            salary,
            bonus,
            status,
            vehicle

        }).then(() => {
            alert("OK")
            // history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form>
                    <label>First Name</label>
                    <input placeholder="Name" name="name" value={name} onChange={(e) => this.setname(e.target.value)} />
                </Form>
                <Form>
                    <label>Last Name</label>
                    <input placeholder="Email" name="email" value={email} onChange={(e) => this.setEmail(e.target.value)} />
                </Form>
                <Form>
                    <label>Last Name</label>
                    <input placeholder="Date of Join (yy-mn-dy)" name="dateOfJoin" value={dateOfJoin} onChange={(e) => this.setDateOfJoin(e.target.value)} />
                </Form>
                <Form>
                    <label>Last Name</label>
                    <input placeholder="Shift" name="shift" value={shift} onChange={(e) => this.setShift(e.target.value)} />
                </Form>
                <Form>
                    <label>Last Name</label>
                    <input placeholder="Salary" name="salary" value={salary} onChange={(e) => this.setSalary(e.target.value)} />
                </Form>
                <Form>
                    <label>Last Name</label>
                    <input placeholder="Bonus" name="bonus" value={bonus} onChange={(e) => this.setBonus(e.target.value)} />
                </Form>
                <Form>
                    <label>Last Name</label>
                    <input placeholder="Status(1=Active,0=Deactive)" name="status" value={status} onChange={(e) => this.setStatus(e.target.value)} />
                </Form>
                <Form>
                    <label>Last Name</label>
                    <input placeholder="Vehicle" name="vehicle" value={vehicle} onChange={(e) => this.setVehicle(e.target.value)} />
                </Form>

                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
export default EditSupplier;