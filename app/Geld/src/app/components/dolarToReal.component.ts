import { Component } from '@angular/core';

@Component({
  selector: 'dolar-real',
  template: `
    <form>
      <input class="form-control" placeholder="Valor em dólar" id ="dolarVal" type="number" min="0" value="0"/>
      <!--<input class="form-control" placeholder="Valor em real" id="realVal" type="number" min="0" value="0"/>-->
      <button (click)="convert()" class="btn btn-primary">CONVERTER</button>
    </form>
    <div id="value">R$ 00.00</div>
  `,
  styles: [`
    #value {
      font-size: 30px;
      display: grid;
      place-items: center;
      margin-top: 10px;
    }

    input {
      width: 150px;
      margin: 10px;
    }

    form {
      display: grid;
      place-items: center;
    }
  `],
})

export class dolarToRealComponent {
  dolar: number;
  real: number;
  result: number;

  convert(){
    this.dolar = parseFloat((document.getElementById('dolarVal') as HTMLInputElement).value);
    /*this.real = parseFloat((document.getElementById('realVal') as HTMLInputElement).value);*/

    this.result = 5.63 * this.dolar;

    document.getElementById('value').innerHTML = "R$ " + (this.result).toString();
  }
}