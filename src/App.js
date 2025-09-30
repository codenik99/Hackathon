import './App.css';

function App() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Strawberry', 'Pineapple'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.svg')} className="App-logo" alt="logo" />
        <h1>Fruits List</h1>
        <ul className="fruits-list">
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
