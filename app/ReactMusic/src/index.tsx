import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './ui/Header';
import Music from './ui/Music';
import Player from './ui/Player';

class App extends Component {
  render() {
    return (
      <>
        <Header
          url="https://raw.githubusercontent.com/Redwars22/Portfolio/3f0f502e9782b902e3bc3275e9af1deb8e041f30/resx/reactmusiclogo.png"
        />
        <Player />
        <div class="page">
          <div class="section">
            <h5 class="center-align">
              <i class="material-icons categoryLogo">library_music</i>
              Recomendadas para você
            </h5>
            <div class="container">
              <Music
                title="Epic Fight Scene"
                singer="Fesliyan Studios"
                arg="https://redwars22.github.io/Portfolio/resx/33569.mp3"
              />
              <Music
                title="Star Orbiting"
                singer="Mr. Scientific"
                arg="https://redwars22.github.io/Portfolio/resx/44765.mp3"
              />
              <Music
                title="Newtonia I"
                singer="Nevan Alexanian"
                arg="https://redwars22.github.io/Portfolio/resx/82340.mp3"
              />
              <Music
                title="Spirit Of Wind"
                singer="Fantasy Celtic Music"
                arg="https://redwars22.github.io/Portfolio/resx/29876mp3"
              />
            </div>
          </div>

          <div class="section">
            <h5 class="center-align">
              <i class="material-icons categoryLogo">library_music</i>
              Épicas e Aventura
            </h5>
            <div class="container">
              <Music
                title="New Frontiers"
                singer="Atom Music"
                arg="https://redwars22.github.io/Portfolio/resx/99854.mp3"
              />
              <Music
                title="Two Places"
                singer="A Himitsu"
                arg="https://redwars22.github.io/Portfolio/resx/30261.mp3"
              />
              <Music
                title="Titan Stiker"
                singer="Evan King"
                arg="https://redwars22.github.io/Portfolio/resx/29637.mp3"
              />
              <Music
                title="Flowing Energy"
                singer="Keys Of Moon"
                arg="https://redwars22.github.io/Portfolio/resx/84087.mp3"
              />
            </div>
          </div>
            
            <div class="section">
              <h5 class="center-align">
                <i class="material-icons categoryLogo">library_music</i>
                Ação
              </h5>
              <div class="container">
                <Music 
                  title="Music The Best 3"
                  singer="Justin Seven"
                  arg="https://redwars22.github.io/Portfolio/resx/37789.mp3"
                />
                <Music 
                  title="Guardians"
                  singer="Evan King"
                  arg="https://redwars22.github.io/Portfolio/resx/18506.mp3"
                />
                <Music 
                  title="Action Royalty FRee"
                  singer="Music4Videos"
                  arg="https://redwars22.github.io/Portfolio/resx/25868.mp3"
                />
                <Music
                  title="Ultra"
                  singer="Savfk"
                  arg="https://redwars22.github.io/Portfolio/resx/19118.mp3"
                />
              </div>
            </div>

            <div class="section">
                <h5 class="center-align">
                    <i class="material-icons categoryLogo">library_music</i>
                    Luta e Batalha
                </h5>
                <div class="container">
                    <Music
                      title="Aggressive War"
                      singer="Unknown"
                      arg="https://redwars22.github.io/Portfolio/resx/13245.mp3"
                    />
                    <Music
                      title="Protectors of the Earth"
                      singer="Two Steps From Hell"
                      arg="https://redwars22.github.io/Portfolio/resx/64643.mp3"
                    />
                    <Music
                      title="Dragon Castle"
                      singer="Makai Symphony"
                      arg="https://redwars22.github.io/Portfolio/resx/18507.mp3"
                    />
                    <Music
                      title="Dangerous Roads"
                      singer="Argsound"
                      arg="https://redwars22.github.io/Portfolio/resx/81277.mp3"
                    />
                </div>
            </div>
          </div>
        <footer>
          <em>Criado por André Pereira usando ReactJS e Materialize.</em>
          <br />
          <a 
            class="waves-effect waves-light btn blue darken-2"
            href="https://github.com/Redwars22/Portfolio/app/ReactMusic"  
          >
            <i class="material-icons right">code</i>VER CÓDIGO FONTE DESTE APP
          </a>
        </footer>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));