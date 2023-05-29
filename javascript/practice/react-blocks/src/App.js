import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

const padding = 20;

const paddingFunction = (str) => {
  console.log(str + "px");
  const newStr = str + "px";
  return newStr
}

function App() {
  return (
    <div className="App">
      <Header padding={padding} paddingFunction={paddingFunction}/>
      <Navigation padding={padding} paddingFunction={paddingFunction}/>
    </div>
  );
}

export default App;
