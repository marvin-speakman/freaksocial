import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import mix1 from '../../assets/Balearic_Breakdown.mp3';


const changeTrack = () =>  (
    console.log('track')
)

const Player = () => (
    <>
    <button id="mix1" onClick={changeTrack}>Balearic Breakdown</button>
    <button id="mix2" onClick={changeTrack}>mix 2</button>
    <button id="mix3" onClick={changeTrack}>mix 3</button>
    <AudioPlayer
        autoPlay
        src={mix1}
        onPlay={e => console.log("onPlay")}
        // other props here
    />
  </>
);

export default Player;