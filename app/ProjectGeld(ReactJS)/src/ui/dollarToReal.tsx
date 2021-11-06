import React=require('react');
import './container.css';

export default function DollarToReal(props) {
  const currency:number = 5.63;
  let value:number;

  function convert(props){
    value = parseFloat(document.getElementById('dollarVal').value);
    value *= currency;
    document.getElementById('showRealVal').innerHTML = "R$ " + value;
  }

  return (
    <div className="container">
      <h5>{props.title}</h5>
      <form>
        <input type="text" min="0" id="dollarVal"/>
      </form>
      <button className="btn pink darken-3" onClick={convert}>
        <i className="material-icons">monetization_on</i>
        CONVERTER
      </button>
      <div id="showRealVal" className="value">{props.symbol} 00.00</div>
    </div>
  )
}