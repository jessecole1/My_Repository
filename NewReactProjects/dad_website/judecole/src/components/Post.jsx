import React, { useEffect, useState } from 'react';
import { htmlToText } from 'html-to-text';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {

    const navigate = useNavigate();

    const [pureContent, setPureContent] = useState("");

    useEffect(() => {
        setPureContent(post.content.replace(/<\/?[^>]+(>|$)/g, ""));
    }, []);

    const {post} = props;
    

    // console.log("date: " + JSON.stringify(post.publishDate));

    const postDate = new Date(post.publishDate);
    // console.log('postdate: ' + postDate.getMonth());
    
    return (
        <div class="flex items-center border mb-8 bg-slate-100 h-32">
            <div>
                <p onClick={() => navigate(`/post/${post.title}`, {state: {post: post}})} class="text-4xl cursor-pointer ml-8">{post.title}</p>
                <p>{postDate.toLocaleString('default', {month: "long"})} {postDate.getDate()}, {postDate.getFullYear()}</p>
            </div>
            {/* <p dangerouslySetInnerHTML={{__html: post.content.replaceAll('\n\n', "<br/><br/>").replaceAll('\n', "<br/>")}} class="h-fit"></p> */}
            {/* <p>Author: {post.author.firstName} {post.author.lastName}</p> */}
            {/* <p>Comments:</p>
            {
                post.comments.map((index, key) => (
                    <div>
                        <p>By: {index.comment_author.__cdata}</p>
                        <p class="border-b-4">{index.comment_content.__cdata}</p>
                    </div>
                ))
            } */}
        </div>
    );
};

export default Post;
