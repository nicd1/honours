import logo from './logo.svg';
import './App.css';
import Waveform from './components/Waveform/WaveformData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Waveform />
        <p>
          Upload an MP3 File...
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
