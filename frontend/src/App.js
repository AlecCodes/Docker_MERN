import logo from './logo.svg';
import './App.css';



function App() {

  async function loader(){
    const response = await fetch('/api')
    const data = await response.json()
    console.log(data)
    return data
  }

  loader()
    .catch((e) => console.error(e))

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
