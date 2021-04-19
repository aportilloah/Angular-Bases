import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["Spiderman","Batman","Bob Esponja","HULK"];
  heroesBorrado: string [] = [];
  borrarHeroe(){
   const heroeBorrado = this.heroes.shift() || "";
   if (heroeBorrado) {
   this.heroesBorrado.unshift(heroeBorrado);
     
   }

  }
  
}

