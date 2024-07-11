import React from 'react';
import axios from 'axios';

const LoginForm = (props) => {

    const {loginEmail, setLoginEmail, loginPassword, setLoginPassword} = props;

    const submitLoginHandler = (e) => {
        e.preventDefault();
        try {
            axios.post('http://localhost:8000/login', {
                email: loginEmail,
                password: loginPassword
            }, { withCredentials: true });
            console.log("Login successful");
        } catch (err) {
            console.log("Axios error: ", err);
            if (err.response && err.response.status === 401) {
                alert("Invalid email or password");
            } else if (err.request) {
                console.log("Network error: ", err.request);
                alert("Network error: Could not reach the server. Pleas try again later")
            } else {
                console.error("Error: ", err.message);
                alert("An error occured, please try again later");
            }
        }
    }

    return (
        <div>
            <form onSubmit={submitLoginHandler}>
                <label>Email</label>
                <input onChange={(e) => setLoginEmail(e.target.value)} type="text" />
                <label>Password</label>
                <input onChange={(e) => setLoginPassword(e.target.value)} type="password" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default LoginForm;
