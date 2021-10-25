import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './ui/header.component';
import { PlayerComponent } from './ui/player.component';
import { MusicComponent } from './ui/music.component';
import { FooterComponent } from './ui/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    PlayerComponent,
    MusicComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
