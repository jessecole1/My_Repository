import React, { useEffect } from 'react';
import axios from 'axios';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Main = (props) => {

    const {email, setEmail, password, setPassword, confirmPassword, setConfirmPassword} = props;
    const {loginEmail, setLoginEmail, loginPassword, setLoginPassword} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then((res) => {
                props.setMainMessage(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <RegisterForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
            <LoginForm loginEmail={loginEmail} setLoginEmail={setLoginEmail} loginPassword={loginPassword} setLoginPassword={setLoginPassword} />
        </div>
    );
};

export default Main;
