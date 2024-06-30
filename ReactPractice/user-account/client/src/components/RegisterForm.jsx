import React from 'react';
import axios from 'axios';

const RegisterForm = (props) => {

    const {email, setEmail, password, setPassword, confirmPassword, setConfirmPassword} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("getting to submitHandler");
        axios.post('http://localhost:8000/register', {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
        .then(res => {
            console.log(res.data);
            setEmail("");
            setConfirmPassword("");
            setPassword("");
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" value={email}/>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" value={password}/>
                <label>Confirm Password</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" value={confirmPassword}/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default RegisterForm;
