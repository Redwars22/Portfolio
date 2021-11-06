import React=require('react');
import './container.css';

export default function RealToDollar(props) {
  const currency:number = 0.18;
  let value:number;

  function convert(props){
    value = parseFloat(document.getElementById('realVal').value);
    value *= currency;
    document.getElementById('showDollarVal').innerHTML = "$ " + value;
  }

  return (
    <div className="container container2">
      <h5>{props.title}</h5>
      <form>
        <input type="text" min="0" id="realVal"/>
      </form>
      <button className="btn pink darken-3" onClick={convert}>
        <i className="material-icons">monetization_on</i>
        CONVERTER
      </button>
      <div id="showDollarVal" className="value">{props.symbol} 00.00</div>
    </div>
  )
}