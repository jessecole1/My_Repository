import React from 'react';

const Post = (props) => {

    const {post} = props;

    
    return (
        <div>
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>Author: {post.author.firstName} {post.author.lastName}</p>
        </div>
    );
};

export default Post;
