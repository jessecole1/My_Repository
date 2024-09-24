import React, { useState, useEffect } from 'react';
import { useMyContext } from './MyProvider';
import { useBlogContext } from './BlogProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import TipTap from './TipTap';

const BlogPostForm = () => {

    const navigate = useNavigate();

    const {admin} = useMyContext();
    const {title, setTitle, content, setContent} = useBlogContext();


    console.log("admin: " + JSON.stringify(admin));

    // useEffect(() => {
    //     axios.get("http://localhost:8000/author/get/" + admin._id)
    //     .then((response) => )
    // })

    const postFormHandler = () => {
        axios.post("http://localhost:8000/post/create", {
            title: title,
            content: content,
            author: {
                id: admin._id,
                firstName: "Jude",
                lastName: "Cole",
                displayName: "Bandini55"
            }

        })
        .then(result => {
            setTitle('');
            setContent('');
            navigate('/posts')
        })
    }

    // Handle Title 
    const handleSetTitle = (e) => {
        setTitle(e.target.value);
    }

    return (

        <div>
            <Navbar />
            {/* <form onSubmit={postFormHandler}>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <label>Your Content</label>
                <input type="text" onChange={(e) => setContent(e.target.value)} value={content}/>
                <input type="hidden" value={admin._id} />
                <input type="submit" />
            </form> */}
            <p>Blog post title: {title} </p>
            <p>Blog post content: {content}</p>
            <form>
                <label class="text-2xl">Title</label>
                <input onChange={(e) => handleSetTitle(e)} type="text" class="pl-4 pr-4 w-96 text-2xl h-12 border" />
            </form>
            
            <div>
                <button onClick={() => postFormHandler()} class="p-4 border mr-16">Create Post</button>
            </div>
            <TipTap blogPostContent={content} setBlogPostContent={setContent} />
        </div>
    );
};

export default BlogPostForm;