import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { WaveformContainer, Wave, PlayButton } from './waveformStyle';

class Waveform extends Component {  
  componentDidMount( ) {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
    const url = 'https://www.youtube.com/watch?v=neGFIzfprIE'

    return (
      <WaveformContainer>
        <PlayButton>
          Play
        </PlayButton>
        <Wave id="waveform" />
        <audio id="track" src={url} />
      </WaveformContainer>
    );
  }
};

export default Waveform;