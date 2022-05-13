import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src="/images/freecodecamp-logo.png" className="freecodecamp-logo" alt="freeCodeCamp Logo" />
      </div>
      <div className="task-container">
          <h1>My tasks</h1>
          <TaskList/>
        </div>
    </div>
  );
}

export default App;
