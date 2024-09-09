import React from 'react';
import { useMyContext } from './MyProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Cookies from 'js-cookie';

const LoginAdmin = () => {

    const {email, setEmail, password, setPassword, adminLoggedIn, setAdminLoggedIn, admin, setAdmin} = useMyContext();

    // const checkIfLoggedIn = () => {
    //     const token = Cookies.get("admintoken");

    //     if (token) {
    //         console.log("Admin is logged in");
    //         return true;
    //     } else {
    //         console.log("Admin is not logged in");
    //         return false;
    //     }
    // }

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/admin/login", {
            email: email,
            password: password
        }, {withCredentials: true})
        .then(res => {
            console.log("response: " + JSON.stringify(res.data));
            setEmail("");
            setPassword("");
            setAdminLoggedIn(true);
            setAdmin(res.data.admin);
            navigate("/");
        })
        .catch(err => {
            console.log("Error: " + err)
        })
        console.log("exiting axios login call..");
    }

    // const logoutHandler = () => {
    //     axios.post("http://localhost:8000/admin/logout", {}, {withCredentials:true})
    //     .then(setAdminLoggedIn(false))
    //     .then(() => navigate('/'));
    //     console.log("exiting logoutHandler method..");
    // }

    return (
        <div>
            <Navbar/>
            <form onSubmit={submitHandler}>
                <label>Email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="submit" class="border w-1/5 m-auto" />
            </form>

        </div>
    );
};

export default LoginAdmin;
