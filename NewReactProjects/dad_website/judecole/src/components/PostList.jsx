import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';

const PostList = (props) => {

    const {posts, setPosts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
        .then(res => {
            setPosts(res.data.postList);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (

        <div>
            {
                posts.map((post, index) => {
                    return (
                        <div>
                            <Post post={post}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PostList;
