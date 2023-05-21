import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [boxList, setBoxList] = useState([]);
  return (
    <div className="App">
      <Form boxList={boxList} setBoxList={setBoxList}/>
      <Display boxList={boxList}/>
    </div>
  );
}

export default App;
