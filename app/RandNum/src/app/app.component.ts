import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  random: number = 0;
  anglogo: string = 'https://img.ly/docs/pesdk/9db278d630f5fabd8e7ba16c2e329a3a/logo.png';
  author: string = 'André Pereira';
  website: string = 'https://redwars22.github.io/Portfolio/';
  techs: string = 'HTML, CSS, JS, TypeScript';

  generate(param: number) {
    let gen: any = Math.random() * param;
    gen = parseInt(gen);
    this.random = gen;
  }
}
