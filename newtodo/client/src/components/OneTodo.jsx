import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const OneTodo = (props) => {

    const [todo, setTodo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/todo/" + id)
        .then((res) => {
            setTodo(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <div className="listContentMain">
                <h2 className="text-white self-start pl-[10%] text-3xl pb-[5%]">{todo.message}</h2>
                
            </div>
            <div>
                {/* <button className="border bg-slate-800 p-3 rounded-xl text-white border-slate-800 deleteButton" onClick = {() => {handleRemove(messageList)}}>Delete</button> */}
            </div>
        </>
    );
};

export default OneTodo;
