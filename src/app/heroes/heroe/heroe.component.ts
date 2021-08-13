import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 19;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obetenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre():void{
        this.nombre = 'spiderman';
    }
    cambiarEdad():void{
        this.edad = 34;
    }
} 