import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Navbar from './Navbar';

import '../styling/blog-style.css';

const SinglePost = () => {

    const navigate = useNavigate();

    const {state} = useLocation();
    const {post} = state;

    const createDate = () => {
        return new Date("comment");
    }

    console.log(post);

    return (
        <div class="content">
            <Navbar />
            <br/><br/>
            <button onClick={() => navigate(-1)} class="border p-4 bg-gray-300">Back</button>
            <h2 class="text-7xl">{post.title}</h2>
            <br></br>
            <hr></hr>
            <p dangerouslySetInnerHTML={{ __html: post.content.replaceAll('\n', '<br/>').replaceAll('\n\n', '<br/><br/>').replaceAll("</p>", "<br/><br/>") }}></p>
            <br/>
            <hr/>
            {post.comments.length}
            {
                post.comments.map((comment, key) => (
                    <div>
                        <div>
                            <p><span class="font-bold">{comment.comment_author.__cdata}</span>  { createDate() }</p>
                            <br/>
                            <p>{comment.comment_content.__cdata}</p>
                            <br/>
                            <hr/>
                            <br/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default SinglePost;
