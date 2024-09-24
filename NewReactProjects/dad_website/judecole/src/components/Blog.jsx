import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useMyContext } from './MyProvider';
import { useBlogContext } from './BlogProvider';
import { useNavigate } from 'react-router-dom';

import PostList from './PostList';

const Blog = () => {

    const navigate = useNavigate();


    const {admin, adminLoggedIn} = useMyContext();
    const {title, setTitle, content, setContent} = useBlogContext();

    const [posts, setPosts] = useState([]);


    const handleNavigateClick = () => {
        navigate("/post/create");
    }


    return (
        <div>
            <Navbar />
            {/* {
                adminLoggedIn ? (
                    <button onClick={handleNavigateClick}>Create New Post</button>
                ) : (
                    <span></span>
                )
            } */}
            <button onClick={handleNavigateClick}>Create New Post</button>
            <PostList posts={posts} setPosts={setPosts}/>
        </div>
    );
};

export default Blog;
