import React from 'react';
import '../App.css';

const Display = (props) => {

    
    const {messageList, setMessageList} = props;
    


    const handleComplete = (i) => {
        const updatedTodos = messageList.map((item, idx) => {
            if (idx === i) {item.complete = !item.complete}
            return item;
        })
        setMessageList(updatedTodos);
    }

    const handleRemove = (messageList) => {
        let updatedTodos = [];
        messageList.map((item, idx) => {
            if (item.complete === false) {
                updatedTodos = [...updatedTodos, item];
            }
        })
        setMessageList(updatedTodos);
    }

    return (
        <>
            <div className="listContentMain">
            <h2 className="text-white self-start pl-[10%] text-3xl pb-[5%]">Your List:</h2>
            <table className="todoListTable contentTable">
                <tbody>

                    {
                        messageList.map((item, i) => {
                            return (
                                    <tr className="oneEntry bg-slate-600">
                                        <td><input type="checkBox" onChange = {() => {handleComplete(i)}}/></td>
                                        <td className="text-white text-xl p-3">{item.message}</td>
                                    </tr>
                            )
                        })
                    }

                </tbody>
                </table>
            </div>
            <div>
                <button onClick = {() => {handleRemove(messageList)}}>Delete</button>
            </div>
        </>
    );
};

export default Display;