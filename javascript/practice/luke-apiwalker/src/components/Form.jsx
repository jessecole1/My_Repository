import React,{useState} from 'react';
import {navigate} from "@gatsbyjs/reach-router";

const Form = () => {
    
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Select Category:</label>
                <select onChange={(e) => {setCategory(e.target.value)}}>
                    <option value="">- - Select Category - -</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>Id:</label>
                <input type="number" onChange={(e) => {setId(e.target.value)}}/>
                <p>{id}</p>
                <input type="submit" value="go"/>
            </form>
        </div>
    )
}

export default Form;