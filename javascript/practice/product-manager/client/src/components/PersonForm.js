import React from 'react';
import {useState} from 'react';

const PersonForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </form>
        </div>
    )
}

export default PersonForm;