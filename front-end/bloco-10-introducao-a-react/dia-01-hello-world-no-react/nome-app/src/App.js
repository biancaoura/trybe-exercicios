import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ol>{Task('valor')}</ol>
    </div>
  );
}

export default App;
