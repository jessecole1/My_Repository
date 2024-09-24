import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';

const PostList = (props) => {

    const {posts, setPosts} = props;

    const [orderedPostsByDates, setOrderedPostsByDates] = useState([])

    const arrangeDateOrder = (postList) => {
        return postList.sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));
        
    }


    useEffect(() => {
        axios.get("http://localhost:8000/posts")
        .then(res => {
            setOrderedPostsByDates(arrangeDateOrder(res.data.postList));
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (

        <div>
            {
                orderedPostsByDates.map((post, index) => {
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
