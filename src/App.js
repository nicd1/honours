import './App.css';
import React, { useState } from 'react';
import Waveform from './components/Waveform';
import { Button, ButtonLabel } from './components/AudioPlayer/audioplayer';
import WrapperMain from './components/Wrapper/wrapper';

function App() {
  const [gradient, setGradient] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const changeHandler = (event) => {
    setGradient('');
    setFileName(event.target.files[0].name);
    if (event.target.files[0].name.includes('Major')){
      setGradient('major');
    } else if (event.target.files[0].name.includes('Minor')){
      setGradient('minor');
    }
    const reader = new FileReader();
    reader.onload = function(event) {
      setFile(event.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
      setIsSelected(true);
  };
  const handleSubmission = () => {
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Colour of Music</h1>  
        This app aims to replicate the
        experience of music through the
        use of colour.
        {file !== '' ? (<Waveform track={file} gradient={gradient}/>)
         : (
           <p>no waveform</p>
         )} 

        <WrapperMain>
        <Button type="file" id="user-file-upload" onChange={changeHandler} onClick={handleSubmission} hidden/>
        <ButtonLabel htmlFor="user-file-upload"> Upload audio file</ButtonLabel>
        {isSelected && file ? ( <p>{fileName}</p>
         ) : (
             <p>No File Selected</p>
         )}
        </WrapperMain>
      </header>
    </div>
  );
}

export default App;
