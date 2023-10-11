import React, {useState} from 'react';
import Display from '../components/Display';
import '../App.css';

const Main = () => {

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const submitHandler = (e) => {
        if (message.length == 0) {
            return;
        }
        e.preventDefault();
        const item = {
            message: message,
            complete:false
        }
        setMessageList([...messageList, item]);
        setMessage("");
    }

    return (

        <>
            <div className="mainBackground">
                
                <div className="enterWrap">
                    <div className="enterTodoMenu">
                        <input className="enterTodo" onChange = {(e) => setMessage(e.target.value)} value={message}/>
                        <button className="submitButton" onClick = {(e) => {submitHandler(e)}}>Submit</button>
                    </div>
                </div>
            <Display messageList = {messageList} setMessageList  = {setMessageList}/>
            </div>

        </>


    );
};

export default Main;
