import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

const MyContext = createContext();

const MyProvider = ( {children} ) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [adminLoggedIn, setAdminLoggedIn] = useState(false);

    const [admin, setAdmin] = useState({});

    return (
        <MyContext.Provider value={{email, setEmail, password, setPassword, confirm, setConfirm, firstName, setFirstName, lastName, setLastName, displayName, setDisplayName, adminLoggedIn, setAdminLoggedIn, admin, setAdmin}}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;

export function useMyContext() {
    return useContext(MyContext);
}