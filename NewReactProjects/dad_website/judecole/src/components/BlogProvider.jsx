import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    return (

        <div>
            <BlogContext.Provider value={{ title, setTitle, content, setContent, author, setAuthor }}>
                {children}
            </BlogContext.Provider>
        </div>
    );
};

export default BlogProvider;

export function useBlogContext() {
    return useContext(BlogContext);
}