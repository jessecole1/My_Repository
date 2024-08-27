import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Music from './components/Music';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<About />} path="/about" />
          <Route element={<Music />} path="/music" />
          <Route element={<Blog />} path="/posts" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
