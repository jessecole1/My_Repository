import React, { useEffect } from 'react';
import axios from 'axios';

const Main = (props) => {

    // const mainMessage = props;
    // const setMainMessage = props;

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then((res) => {
                props.setMainMessage(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <ul>
            <li>User Account Creation Project</li>
            <li>{props.mainMessage.message}</li>
            </ul>
        </div>
    );
};

export default Main;
