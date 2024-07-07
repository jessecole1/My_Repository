import React from 'react';
import axios from 'axios';

const LoginForm = (props) => {

    const {email, setEmail, password, setPassword} = props;

    // const submitLoginHandler = (e) => {
    //     e.preventDefault();
    //     axios.post("https://localhost:8000/login", {

    //     })
    // }

    return (
        <div>
            <form>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" />
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default LoginForm;
