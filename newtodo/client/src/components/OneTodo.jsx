import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const OneTodo = (props) => {

    const [todo, setTodo] = useState({});
    const [message, setMessage] = useState();
    const [subItems, setSubItems] = useState();

    const [newItem, setNewItem] = useState();

    const {id} = useParams();


    const [arr, setArr] = useState([]);

    const submitHandler = (e) => {
        console.log("ID: " + id);
        if (newItem.length === 0) {
            console.log("nope.");
            return;
        }
        e.preventDefault();
        axios.put('http://localhost:8000/api/todo/add/' + id, {
            message: message,
            complete: todo.complete,
            subItems: [...todo.subItems, newItem]
        })
            .then((res) => {
                console.log("Edit Success!");
                setNewItem("");
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/todo/" + id)
        .then((res) => {
            setTodo(res.data);
            setMessage(res.data.message);
            setSubItems(res.data.subItems);
            setArr(res.data.subItems);
            console.log("ARR: " + arr);
        })
        .catch(err => {
            console.log(err);
        })
    }, [newItem]);

    return (
        <>
            <div className="listContentMain bg-slate-900">
                <div className="enterWrap">
                    <div className="enterTodoMenu">
                        <input className="enterTodo" onChange = {(e) => setNewItem(e.target.value)} value={newItem}/>
                        <button className="submitButton" onClick={(e) => submitHandler(e)} >Submit</button>
                    </div>
                </div>
                <h2 className="text-white self-start pl-[10%] text-3xl pb-[5%]">{todo.message}</h2>
                <div>
                    <table>
                        <tbody>
                            {
                                arr.map((item, i) => {
                                    return (
                                        <div>
                                            <tr>
                                                <td>{item}</td>
                                            </tr>
                                        </div>
                                    )
                                })
                            }
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
