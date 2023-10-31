import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const OneTodo = (props) => {

    const [todo, setTodo] = useState({});
    const [message, setMessage] = useState();
    const [subItems, setSubItems] = useState();

    const [newItem, setNewItem] = useState();

    const {id} = useParams();


    const [arr, setArr] = useState([]);

    const [newArr, setNewArr] = useState();

    const navigate = useNavigate();


    // CREATING A NEW SUB ITEM
    const submitHandler = (e) => {
        console.log("ID: " + id);
        if (newItem.length === 0) {
            console.log("nope.");
            return;
        }
        e.preventDefault();
        const item = {
            message: newItem,
            complete: false
        }
        axios.put('http://localhost:8000/api/todo/add/' + id, {
            message: message,
            complete: todo.complete,
            subItems: [...todo.subItems, item]
        })
            .then((res) => {
                console.log("Edit Success!");
                setNewItem("");
            })
            .catch(err => {
                console.log(err);
            })
    }


    // HANDLING COMPLETE FOR SUB ITEM
    const handleComplete = (sub) => {

        let updatedSubItems = subItems.map((item, i) => {
            console.log("Item: " + item.message + " | " + "ID: " + item._id);
            console.log("Sub ID: " + sub._id + " | ");
            console.log("Item ID: " + item._id + " | ");
            if (item._id === sub._id) {
                console.log("complete? = " + item.complete);
                item.complete = !item.complete;
            }
            return item;
        })

        axios.patch("http://localhost:8000/api/todo/" + id, {
            subItems: updatedSubItems
        })
        .then(() => {
            console.log("Updated Successfully..");
        })
        .catch((err) => console.log(err));

    }


    // GETTING SUB ITEMS FROM SINGLE MAIN TODO
    useEffect(() => {
        axios.get("http://localhost:8000/api/todo/" + id)
        .then((res) => {
            setTodo(res.data);
            setMessage(res.data.message);
            setSubItems(res.data.subItems);
            setArr(res.data.subItems);
        })
        .catch(err => {
            console.log(err);
        })
    }, [subItems]);


    // DELETING TODO
    const removeTodo = (id) => {
        axios.delete('http://localhost:8000/api/todo/' + id)
            .then((res) => {
                console.log("deleted");
                navigate("/");
                
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="listContentMain bg-slate-900">
                <div className="enterWrap">
                    <div className="enterTodoMenu">
                        <input className="enterTodo" onChange = {(e) => setNewItem(e.target.value)} value={newItem}/>
                        <button className="submitButton" onClick={(e) => submitHandler(e)} >Submit</button>
                    </div>
                </div>
                <Link to={"/"}><button className="border bg-slate-800 p-3 rounded-xl text-white border-slate-800 deleteButton">Home</button></Link>
                <h2 className="text-white self-start pl-[10%] text-3xl pb-[5%]">{todo.message}</h2>
                <div>
                    <table>
                        <tbody>
                            {
                                arr.map((item, i) => {

                                    const classArr = [];
                                    if (item.complete) {classArr.push("line-through")};

                                    return (
                                        <div>
                                            <tr>
                                                <td><button onClick={() => handleComplete(item)}>&#10003;</button></td>
                                                <td key={i} className="oneEntry text-xl p-3 bg-slate-600 text-white"><span className={classArr.join(" ")}>{item.message}</span></td>
                                            </tr>
                                        </div>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div>
                        <button className="border bg-slate-800 p-3 rounded-xl text-white border-slate-800 deleteButton" onClick={((e) => removeTodo(todo._id))}>Delete</button>
                    </div>
                </div>
                
            </div>
            <div>
                {/* <button className="border bg-slate-800 p-3 rounded-xl text-white border-slate-800 deleteButton" onClick = {() => {handleRemove(messageList)}}>Delete</button> */}
            </div>
        </>
    );
};

export default OneTodo;
