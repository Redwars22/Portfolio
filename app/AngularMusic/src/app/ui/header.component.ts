import { Component, Input } from '@angular/core';
import { PlayerComponent } from './player.component';

@Component({
  selector: 'header',
  template: `
  <div>
    <table>
      <tr>
        <td>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="40" width="40" />
        </td>
        <td>
          <h3>MUSIC</h3>
        </td>
      </tr>
    </table>
  </div>`,
  styles: [
    `
  div { 
    display: grid;
    place-items: center;
    height: 60px;
    /*background-color: #227375;*/
    background: linear-gradient(303deg, rgba(0,16,255,1) 0%, rgba(18,37,249,0.660084016516763) 16%, rgba(51,78,237,1) 46%, rgba(27,65,184,1) 78%, rgba(0,51,124,1) 100%, rgba(255,255,255,1) 100%); 
    border-radius: 10px 10px 0px 0px;
   }`,
  ],
})
export class HeaderComponent {}
