import { Component } from '@angular/core';

@Component({
    selector: 'micomponente',
    templateUrl: './componente1.component.html'
})
export class componente{
    public titulo: string
    constructor(){
        this.titulo ="Hola soy un titulo";
        console.log("Este es mi componente");
    }
}



