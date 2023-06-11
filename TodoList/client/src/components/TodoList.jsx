import React, {useEffect} from 'react';
import axios from 'axios';


const TodoList = (props) => {

    const {todoList, setTodoList} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product`)
            .then((res) => {
                setTodoList(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            {
                todoList.map((value, index) => {
                    return (
                        <div key={index}>
                            <p>{value.text}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TodoList;