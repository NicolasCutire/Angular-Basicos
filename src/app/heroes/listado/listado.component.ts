import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes:string []  = ['botellaMan','Terminator','thor','hulk','cap america'];
  heroreBorrado:string = '';
  borrarHeroe() {    
    this.heroreBorrado = this.heroes.shift()||'';          
  }

}
