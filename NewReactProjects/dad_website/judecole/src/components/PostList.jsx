import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';

const PostList = () => {

    useEffect(() => {
        axios.get("http://localhost:8000/posts", {
            
        })
    })

    return (
        <>
            
        </>
    );
};

export default PostList;
