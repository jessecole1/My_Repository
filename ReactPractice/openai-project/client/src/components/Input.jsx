import React from 'react';
import OpenAI from "openai";
import { useState } from 'react';
import api_key from '../keys/key.js';

const Input = (props) => {

    const openai = new OpenAI({ 
        apiKey: api_key,
        dangerouslyAllowBrowser: true
    });

    const {input, setInput, setResult} = props;

    const inputOnchange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    async function formHandler(e) {
        e.preventDefault();
        console.log(input);
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: input }],
          model: "gpt-3.5-turbo",
        });
        handleMessage(completion.choices[0].message.content);
        console.log(completion.choices[0].message.content);
        console.log(completion.choices);
      };


      const handleMessage = (data) => {
        setResult(data);
      }

    return (
        <div>
            <h2>Say something to ChatGPT</h2>
            <form>
                <label name="userText">Your text</label>
                <input type="text" name="userText" value={input} onChange={(e) => {inputOnchange(e)}}/>
                <button onClick={(e) => formHandler(e)}>Send</button>
            </form>
        </div>
    );
};

export default Input;
