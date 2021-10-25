import { Component, Input } from '@angular/core';
import { PlayerComponent } from './player.component';

@Component({
  selector: 'foot',
  template: `
  
  <div class="footer">
    <em>Criado por André Pereira usando Angular, TypeScript, HTML e CSS. Fonte das músicas: YouTube.</em>
    <a href="https://github.com/Redwars22/Portfolio/blob/main/README.md">💻️ CÓDIGO FONTE</a>
  </div>
  `,
  styles: [
    `
  div { 
    display: grid;
    place-items: center;
    height: 60px;
    /*background-color: #227375;*/
    background: linear-gradient(303deg, rgba(0,16,255,1) 0%, rgba(18,37,249,0.660084016516763) 16%, rgba(51,78,237,1) 46%, rgba(27,65,184,1) 78%, rgba(0,51,124,1) 100%, rgba(255,255,255,1) 100%); 
    border-radius: 10px 10px 0px 0px;
    margin-top: 10px;
   }
   
   .footer {
     border-radius: 10px 10px 10px 10px;
     color: white;
     padding: 10px 0px 10px 0px
   }
   
   a {
     color: white;
     text-decoration: none;
   }

   a:hover {
    color: lightgrey;
    text-shadow: 1px 1px 1px;
   }
   `,
  ],
})
export class FooterComponent {}
