import React, { useEffect, useState } from 'react';
import { htmlToText } from 'html-to-text';

const Post = (props) => {

    const [pureContent, setPureContent] = useState("");

    useEffect(() => {
        setPureContent(post.content.replace(/<\/?[^>]+(>|$)/g, ""));
    }, []);

    const {post} = props;

    console.log("JSON: " + JSON.stringify(post));
    
    return (
        <div class="border mb-8 bg-slate-100">
            <p>Title: {post.title}</p>
            <p class="h-fit">Content: {pureContent}</p>
            {/* <p>Author: {post.author.firstName} {post.author.lastName}</p> */}
        </div>
    );
};

export default Post;
