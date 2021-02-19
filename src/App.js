import './App.css';
import React, { useState } from 'react';
import Waveform from './components/Waveform';
import { Button, ButtonLabel } from './components/AudioPlayer/audioplayer';
import WrapperMain from './components/Wrapper/wrapper';

function App() {
  const [file, setFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
      setFile(event.target.files[0]);
      setIsSelected(true);
  };
  const handleSubmission = () => {

  };

  console.log(file);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Colour of Music</h1>
        <Waveform track={file}/>
        This app aims to replicate the
        experience of music through the
        use of colour.
        <WrapperMain>
        <Button type="file" id="user-file-upload" accept=".mp3" onChange={changeHandler} onClick={handleSubmission} hidden/>
        <ButtonLabel htmlFor="user-file-upload"> Upload audio file</ButtonLabel>
        {isSelected ? ( <p>{file.name}</p>
         ) : (
             <p>No File Selected</p>
         )}
        </WrapperMain>
      </header>
    </div>
  );
}

export default App;
