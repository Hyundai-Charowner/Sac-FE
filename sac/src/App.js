import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Learn React</strong>
        </a>
      </header>
      <body>
        <h1> Hello World </h1>
        <p>This is a <strong style={{ fontWeight: 'bold' }}>boldText</strong></p>
        <p> This is a paragraph</p>
      </body>
    </div>
  );
}

export default App;
