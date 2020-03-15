import { Component } from '@angular/core';

@Component({
    selector: 'lancarpontos',
    templateUrl: './lancarpontos.component.html'
})
export class LancarPontosComponent {
    data_do_jogo: any;
    numero_de_pontos: any;

    //constructor() {
    //    this.numero_de_pontos = 0;
    //}

    public salvarPontos() {
        alert("Chamei: " + this.data_do_jogo + " " + this.numero_de_pontos);
    }

}