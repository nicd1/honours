import React, { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { WaveformContainer, Wave, PlayButton } from './waveformStyle';

function Waveform(track) {

  var wavesurferBlank = WaveSurfer.create({
    container: '#waveform',
  });

  const [waveform, setWaveform] = useState();
  var wavesurfer1 = WaveSurfer.create({
    container: '#waveform',
    barWidth: 3,
    cursorWidth: 1,
    backend: 'WebAudio',
    height: 200,
    barGap: 3,
    barRadius: 3,
    progressColor: '#2D5BFF',
    responsive: true,
    waveColor: '#EFEFEF',
    cursorColor: 'transparent',
  });
  var wavesurfer2 = WaveSurfer.create({
    container: '#waveform',
    barWidth: 3,
    cursorWidth: 1,
    backend: 'WebAudio',
    height: 200,
    barGap: 3,
    barRadius: 3,
    progressColor: '#2D5BFF',
    responsive: true,
    waveColor: '#EFEFEF',
    cursorColor: 'transparent',
  });


  useEffect(() => {
    if (track !== undefined){
      if (track.name.includes('major')) {
        setWaveform(wavesurfer1);
        wavesurfer1.load(track);
        wavesurfer1.drawBuffer(); 
      }
       else if (track.name.includes('minor')) { 
      console.log('progress');
      setWaveform(wavesurfer2);
      wavesurfer2.load(track);
      wavesurfer2.drawBuffer(); 
       }
    } else {
      setWaveform(wavesurferBlank); 
       }
  }, [track]);
    return (
      <div id="waveform">{waveform}</div>
    );
};
//       <WaveformContainer>
//         <PlayButton>
//           test
//         </PlayButton>
//         <Wave id="waveform" />
//       </WaveformContainer>
//     );
// };

// class Waveform extends Component {  

//   componentDidMount() {
//     const track = this.props.dataFromParent;

//     this.waveform = WaveSurfer.create({
//       barWidth: 3,
//       cursorWidth: 1,
//       container: '#waveform',
//       backend: 'WebAudio',
//       height: 80,
//       progressColor: '#2D5BFF',
//       responsive: true,
//       waveColor: '#EFEFEF',
//       cursorColor: 'transparent',
//     });

//     this.waveform.load(track);
//   };

//   handlePlay = () => {
//     this.setState({ playing: !this.state.playing });
//     this.waveform.playPause();
//   };
  
//   render(track) {
//     if (track !== null) {
//       return (
//         <WaveformContainer>
//           <PlayButton>
//             test
//         </PlayButton>
//           <Wave id="waveform" />
//           <audio id="track"/>
//         </WaveformContainer>
//       )
//     } else {
//       return (<WaveformContainer>Loading...</WaveformContainer>)
//     }}
// };

export default Waveform;