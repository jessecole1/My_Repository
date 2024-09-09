import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMyContext } from './MyProvider';
import Navbar from './Navbar';

const Register = () => {

    const {email, setEmail, password, setPassword, confirm, setConfirm, firstName, setFirstName, lastName, setLastName, displayName, setDisplayName} = useMyContext();

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted, axios is next..");
        axios.post('http://localhost:8000/admin/register', {
            firstName: firstName,
            lastName: lastName,
            displayName: displayName,
            email: email,
            password: password,
            confirm: confirm
        }, { withCredentials:true })
        .then(res => {
            console.log("Result Data: " + res.data);
            setFirstName("");
            setLastName("");
            setDisplayName("");
            setEmail("");
            setConfirm("");
            setPassword("");
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        })
        console.log("exiting axios call..");
    }

    return (

        <>
        <Navbar />
            <h2>Register Admin Account</h2>
            <div>
                <form onSubmit={submitHandler} class="flex flex-col">
                    <label>First Name</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                    <label>Display Name</label>
                    <input type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" value={email} />
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
                    <label>Confirm Password</label>
                    <input onChange={(e) => setConfirm(e.target.value)} type="password" value={confirm} />
                    <input type="submit" class="border w-1/5 m-auto"/>
                </form>
            </div>
        </>
    );
};

export default Register;
