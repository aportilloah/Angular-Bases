import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador';
  contador: number = 0;
  base: number = 5;
  acumulador: number = this.base;

  acumular( valor:number)  {
    this.contador += valor;
  }

  acumular2( valor:number)  {
    this.acumulador += valor;
  }


 
}
