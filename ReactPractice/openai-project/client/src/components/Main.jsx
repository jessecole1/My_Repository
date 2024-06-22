import OpenAI from "openai";
import React from 'react';
import { useState } from 'react';

import Input from './Input';
import Output from './Output';

const Main = () => {

    const [input, setInput] = useState();

    const [result, setResult] = useState();


    return (
        <div>
            <h1>AI Chatbot</h1>
            <Input input={input} setInput={setInput} setResult={setResult}/>
            <Output result={result}/>
        </div>
    );
};

export default Main;
