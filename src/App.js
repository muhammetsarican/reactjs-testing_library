import logo from './logo.svg';
import './App.css';
import CounterApp from "./Components/Counter/index.js"
import ToDoApp from './Components/ToDo/app';

function App() {
  return (
    <div className="App">
      {/* <CounterApp /> */}
      <ToDoApp />
    </div>
  );
}

export default App;
