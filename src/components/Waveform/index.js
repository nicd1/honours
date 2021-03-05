import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { WaveformContainer, Wave, PlayButton } from './waveformStyle';

function Waveform({ track }) {

  const waveformContainer = useRef();
  let wavesurfer = '';

  useEffect(() => {
    if (track && waveformContainer.current){
      console.log(track, 'trackstate 2');
    
       wavesurfer = WaveSurfer.create({
        container: waveformContainer.current,
        barWidth: 5,
        cursorWidth: 2,
        cursorColor: '#2D5BFF',
        backend: 'WebAudio',
        showTime: true,
        height: 300,
        barHeight: 3,
        barRadius: 3,
        progressColor: '#EFEFEF',
        responsive: true,
        waveColor: '#2D5BFF',
      });

      wavesurfer.load(track);
      console.log(wavesurfer);
      wavesurfer.drawBuffer();
    }
    return () => {
      if (wavesurfer)
      {wavesurfer.destroy()} 
    }
  }, [track]);

 const handlePlay = () => {
    if (wavesurfer){
      wavesurfer.playPause();
    }

  };
    return (
      <>
      <WaveformContainer>
      <Wave ref={waveformContainer}></Wave>
      </WaveformContainer>
      {track ? (<PlayButton onClick={handlePlay}>test</PlayButton>)
      : (
        <></>
      )}
      </>
    );
};

export default Waveform;