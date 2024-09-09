import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './components/Main';
import About from './components/About';
import Music from './components/Music';
import Blog from './components/Blog';
import Song from './components/Song';
import Register from './components/Register';
import LoginAdmin from './components/LoginAdmin';
import BlogPostForm from './components/BlogPostForm';
import MyProvider from './components/MyProvider';
import BlogProvider from './components/BlogProvider';

function App() {

  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />} path="/" default />
            <Route element={<About />} path="/about" />
            <Route element={<Music />} path="/music" />
            <Route element={<Song />} path="/music/:id" />
            <Route element={<Register />} path="/register" />
            <Route element={<LoginAdmin />} path="/login" />
            <Route element={
              <BlogProvider>
                <Blog />
              </BlogProvider>
            } path="/posts" />
            <Route element={
              <BlogProvider>
                <BlogPostForm />
              </BlogProvider>
              } path="/post/create" />  
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
