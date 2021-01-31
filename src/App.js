import './App.css';
import Waveform from './components/Waveform/WaveformData';
import CreatePlayer from './components/AudioPlayer/CreatePlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Colour of Music</h1>
        <Waveform />
        This app aims to replicate the
        experience of music through the
        use of colour.
        <CreatePlayer />
      </header>
    </div>
  );
}

export default App;
