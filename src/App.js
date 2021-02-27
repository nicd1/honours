import './App.css';
import fs from 'fs';
import React, { useState } from 'react';
import Waveform from './components/Waveform';
import { Button, ButtonLabel } from './components/AudioPlayer/audioplayer';
import WrapperMain from './components/Wrapper/wrapper';

// TODO: fs (file management)
// User upload or pre-uploaded
// Move files into same folder

function App() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    const reader = new FileReader();
      setFile(document.querySelector('input[type=file]').files[0]);
      reader.addEventListener("load", function () {
        setFile(reader.result);
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
      console.log(file, 'file');
      setIsSelected(true);
  };

  console.log(file, 'filereader file');

  const handleSubmission = () => {

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Colour of Music</h1>  
        This app aims to replicate the
        experience of music through the
        use of colour. 
        <Waveform track={file}/>
        <WrapperMain>
        <Button type="file" id="user-file-upload" onChange={changeHandler} onClick={handleSubmission} hidden/>
        <ButtonLabel htmlFor="user-file-upload"> Upload audio file</ButtonLabel>
        {isSelected && file ? ( <p>{file.name}</p>
         ) : (
             <p>No File Selected</p>
         )}
        </WrapperMain>
      </header>
    </div>
  );
}

export default App;
