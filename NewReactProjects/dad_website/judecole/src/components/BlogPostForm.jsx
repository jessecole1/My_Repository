import React, { useState, useEffect } from 'react';
import { useMyContext } from './MyProvider';
import { useBlogContext } from './BlogProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';

const BlogPostForm = () => {

    const navigate = useNavigate();

    const {admin} = useMyContext();
    const {title, setTitle, content, setContent} = useBlogContext();

    console.log("admin: " + JSON.stringify(admin));

    // useEffect(() => {
    //     axios.get("http://localhost:8000/author/get/" + admin._id)
    //     .then((response) => )
    // })

    const postFormHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/post/create", {
            title: title,
            content: content,
            author: {
                id: admin._id,
                firstName: admin.firstName,
                lastName: admin.lastName,
                displayName: admin.displayName
            }

        })
        .then(result => {
            setTitle('');
            setContent('');
            navigate('/posts')
        })
    }

    return (

        <div>
            <Navbar />
            <form onSubmit={postFormHandler}>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <label>Your Content</label>
                <input type="text" onChange={(e) => setContent(e.target.value)} value={content}/>
                <input type="hidden" value={admin._id} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default BlogPostForm;