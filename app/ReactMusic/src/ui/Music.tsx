import React from 'react';

export default function Music(props) {
  function play() {
    //Player de audio
    document.getElementById('player').innerHTML = "<audio controls loop autoplay><source src='" + props.arg + "'></audio>";
  }

  return (
    <div class="musicContainer">
      <img
        class="thumb"
        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Itunes-music-app-icon.png"
        width="50px"
      />
      <h6>{props.title}</h6>
      <p>{props.singer}</p>
      <a class="waves-effect btn play white" onClick={play}>
        <i class="material-icons right">play_circle_filled</i>
        PLAY
      </a>
    </div>
  );
}
