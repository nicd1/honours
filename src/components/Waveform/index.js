import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { WaveformContainer, Wave, PlayButton } from './waveformStyle';

function Waveform({ track, gradient }) {
  console.log(gradient, 'gradient');

  const waveformContainer = useRef();
  let wavesurfer = '';
  var fillColour = null;

  if (gradient === 'major'){
    fillColour = document.createElement('canvas').getContext('2d');
    var linGrad = fillColour.createLinearGradient(0, 0, 4000, 128);
    linGrad.addColorStop(0, '#fb513b'); 
    linGrad.addColorStop(0.5, '#eeff4b'); 
    linGrad.addColorStop(1, '#f0ff76');
  }

  if (gradient === 'minor'){
    fillColour = document.createElement('canvas').getContext('2d');
    linGrad = fillColour.createLinearGradient(0, 0, 4000, 128);
    linGrad.addColorStop(0, '#350e45'); 
    linGrad.addColorStop(0.55, '#0b0b57'); 
    linGrad.addColorStop(1, '#0f3d18');
  }

  useEffect(() => {
    if (track && waveformContainer.current){
    
       wavesurfer = WaveSurfer.create({
        container: waveformContainer.current,
        barWidth: 5,
        cursorWidth: 2,
        cursorColor: 'transparent',
        backend: 'WebAudio',
        showTime: true,
        height: 350,
        barHeight: 3,
        barRadius: 3,
        progressColor: linGrad,
        responsive: true,
        waveColor: '#f5f5f5',
      });

      wavesurfer.load(track);
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
      {track ? (<PlayButton onClick={handlePlay}>Play</PlayButton>)
      : (
        <></>
      )}
      </>
    );
};

export default Waveform;