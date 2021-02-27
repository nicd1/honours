import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { WaveformContainer, Wave, PlayButton } from './waveformStyle';

function Waveform(track) {

  const ref = useRef();

  // var wavesurferBlank = WaveSurfer.create({
  //   container: '#waveform',
  // });

  console.log(track);

  useEffect(() => {
    if (track && ref.current){
      var wavesurfer = WaveSurfer.create({
        container: ref.current,
        // barWidth: 30,
        // cursorWidth: 1,
        backend: 'WebAudio',
        // mediaControls: true,
        height: 200, 
        // barGap: 3,
        // barRadius: 3,
        progressColor: '#2D5BFF',
        responsive: true,
        waveColor: '#EFEFEF'
        // cursorColor: 'transparent',
      });

      // wavesurfer.on('ready', function(){
      //   console.log('i am here');
      //   wavesurfer.play();
      // });
      wavesurfer.load(track);
      console.log(wavesurfer);
      // wavesurfer.drawer
      wavesurfer.drawBuffer();
    }
    return () => {
      wavesurfer.destroy();
    }
  }, [track]);

  // handlePlay = () => {
  //   this.setState({ playing: !this.state.playing });
  //   this.wavesurfer.playPause();
  // };

    return (
      <WaveformContainer>
      <Wave ref={ref}></Wave>
      <audio controls id="track" src={track} type="audio/mpeg"/> {console.log(track, 'track!!!!!!')}
      {/* <PlayButton onClick={this.}>test</PlayButton> */}
      </WaveformContainer>
    );
};

export default Waveform;