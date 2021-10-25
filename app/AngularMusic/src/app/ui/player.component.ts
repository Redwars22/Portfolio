import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  template: `
  <div id="audiocontainer">

  </div>
  `,

  styles: [
    `
  div {
    display: grid;
    place-items: center;
    width: 100%;
    background-color: #2b898c;
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    opacity: 0.8;
    background-image: url('https://thumbs.gfycat.com/BeneficialImaginativeCurlew-size_restricted.gif');
    background-size: cover;
    background-position: center;
  }
  
  .audio {
    width: 80%;
  }`,
  ],
})
export class PlayerComponent {}
