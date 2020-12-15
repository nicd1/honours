import logo from './logo.svg';
import './App.css';
import Waveform from './components/Waveform/WaveformData';
import CreatePlayer from './components/AudioPlayer/CreatePlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Waveform />
        <CreatePlayer />
      </header>
    </div>
  );
}

export default App;
