import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import DollarToReal from './ui/dollarToReal';
import Footer from './ui/Footer';
import RealToDollar from './ui/realToDollar';
import realToDollar from './ui/realToDollar';
import './ui/responsivity.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="v2">
        <header>
          <div className="headerContainer">
            <img
              className="logo"
              src="https://cdn0.iconfinder.com/data/icons/business-startup-10/50/29-256.png"
              width="50px"
            />
            <h1 className="title">ProjectGeld</h1>
            <p className="description">
              <em>Conversor de moedas ($ → R$ e R$ → $) em ReactJS</em>
            </p>
          </div>
        </header>
        <main>
          <DollarToReal title="Converter de Dólar para Real" symbol="R$" />
          <RealToDollar title="Converter de Real para Dólar" symbol="$" />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
