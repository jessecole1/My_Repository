import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const OneTodo = (props) => {

    const [todo, setTodo] = useState({});
    const {id} = useParams();

    const [subItem, setSubItem] = useState();

    const {arr} = [];

    const submitHandler = (e) => {
        console.log("ID: " + id);
        if (subItem.length === 0) {
            return;
        }
        e.preventDefault();
        axios.put('http://localhost:8000/api/todo/add/' + id, {
            message: todo.message,
            complete: todo.complete,
            subItems: [...todo.subItems, subItem]
        })
            .then((res) => {
                console.log("Edit Success!");
            })
            .catch(err => {
                console.log(err);
            })
            setSubItem("");
    }

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
            <div className="listContentMain bg-slate-900">
                <div className="enterWrap">
                    <div className="enterTodoMenu">
                        <input className="enterTodo" onChange = {(e) => setSubItem(e.target.value)} value={subItem}/>
                        <button className="submitButton" onClick={(e) => submitHandler(e)} >Submit</button>
                    </div>
                </div>
                <h2 className="text-white self-start pl-[10%] text-3xl pb-[5%]">{todo.message}</h2>
                <div>
                    <table>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                
            </div>
            <div>
                {/* <button className="border bg-slate-800 p-3 rounded-xl text-white border-slate-800 deleteButton" onClick = {() => {handleRemove(messageList)}}>Delete</button> */}
            </div>
        </>
    );
};

export default OneTodo;
