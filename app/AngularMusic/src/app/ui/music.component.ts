import { Component, Input } from '@angular/core';

@Component({
  selector: 'music',
  template: `
    <div>
      <img src={{thumb}} width="50px" height="50px">
      <h5>{{name}}</h5>
      <p>{{author}}</p>
      <button (click)="play()">
        🎧️
      </button>
    </div>
  `,
  styles: [
    `
    div {
      display: grid;
      grid-template-columns: 50px 120px;
      grid-template-rows: 43px 25px 30px;
      grid-template-areas: 'thumb title' 'thumb author' 'thumb button';
      grid-gap: 3px;
      background: rgb(0,16,255);
      background: linear-gradient(303deg, rgba(0,16,255,1) 4%, rgba(0,51,124,1) 100%, rgba(255,255,255,1) 100%); 
      padding: 8px;
      border-radius: 15px;
      margin: 5px;
      align-items: center;
      opacity: 1.0;
      box-shadow: 0.5px 1px 1px;
      box-shadow-color: #ff4545;
    }

    div:hover {
      background: rgb(255,26,26);
      background: linear-gradient(222deg, rgba(255,26,26,1) 0%, rgba(236,0,66,1) 37%, rgba(255,66,66,1) 100%); 
      color: black;
    }

    img {
      grid-area: thumb;
      border-radius: 10px;
    }

    button {
      grid-area: button;
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 50%;
      background-color: #9dedf5;
    }

    title {
      grid-area: title;
    }

    p {
      grid-area: author;
      font-size: 10pt;
    }
  `,
  ],
})
export class MusicComponent {
  @Input() name: string;
  @Input() url: string;
  @Input() thumb: string;
  @Input() author: string;

  play() {
    document.getElementById('audiocontainer').innerHTML = this.url;
  }
}
