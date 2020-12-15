export default function MusicPlayer(){
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    <audio src="public\Audio\PianoConcertoCMajor.mp3"></audio>

    const audioElement = document.querySelector('audio');
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    <button data-playing="false" role="switch" aria-checked="false">
        <span>Play/Pause</span>
    </button>

const playButton = document.querySelector('button');

playButton.addEventListener('click', function() {

    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }

}, false);

audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);

const gainNode = audioContext.createGain();
track.connect(gainNode).connect(audioContext.destination);
<input type="range" id="volume" min="0" max="2" value="1" step="0.01"></input>

const volumeControl = document.querySelector('#volume');

volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false);
}



