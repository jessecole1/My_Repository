import logo from './logo.svg';
import './App.css';
import SomeClassComponent from './components/SomeClassComponent';

function App() {

  const peopleArray = [
    {
      firstName:"Jesse",
      lastName:"Cole",
      age:30,
      hairColor:"Brown"
    },
    {
      firstName:"Kasey",
      lastName:"Sanders",
      age:30,
      hairColor:"Dirty Blonde"
    },
    {
      firstName:"Lori",
      lastName:"Cole",
      age:57,
      hairColor:"Brown"
    },
    {
      firstName:"Jude",
      lastName:"Cole",
      age:62,
      hairColor:"Brown"
    }
  ]

  return (
    <div className="App">
      {
        peopleArray.map((item) => (
          <div>
            <SomeClassComponent item={item}>
              <p>This is a child</p>
              <p>This is another child</p>
              <p>This is even another child</p>
            </SomeClassComponent>
          </div>
        ))
      }
    </div>
  );
}

export default App;
