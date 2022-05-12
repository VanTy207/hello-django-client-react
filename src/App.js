import logo from './logo.svg';
import './App.css';
import HeaderAppComponent from './components/header';

function App() {
  console.log('api ne ' + process.env.REACT_APP_BASE_DOMAIN_API)
  console.log('api ne app name ' + process.env.REACT_APP_NAME)
  console.log('api ne app name ' + process.env.REACT_APP_ENV)
  return (
    <div className="App">
      <header className="App-header">
        <HeaderAppComponent/>
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
          Learn React Hello word
        </a>
    
      </header>

    </div>
  );
}

export default App;
