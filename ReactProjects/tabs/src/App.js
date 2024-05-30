import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {

  const tabData = [
    {label: "Tab 1"},
    {label: "Tab 2"},
    {label: "Tab 3"},
  ];

  return (
    <div className="App">
      <Tabs tabs = {tabData}/>
    </div>
  );
}

export default App;
