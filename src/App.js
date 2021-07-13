import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Junyang Li
        </h3>
        <a>LeetCode</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a className="App-link"
          href="https://www.linkedin.com/in/junyang-li/"
          target="_blank"
          rel="noopener noreferrer">LinkedIn</a>
        <a className="App-link"
          href="https://github.com/junyang10734"
          target="_blank"
          rel="noopener noreferrer">GitHub</a>
      </header>
    </div>
  );
}

export default App;
