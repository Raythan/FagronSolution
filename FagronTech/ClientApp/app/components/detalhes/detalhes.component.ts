import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ControlService } from '../services/controlservice.service';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'detalhes',
    templateUrl: './detalhes.component.html'
})
export class DetalhesComponent {
    public detalheCarreira: DetalhesCarreira;

    constructor(public http: Http, private _router: Router, private _controlService: ControlService) {
        this.detalhesCarreira();
    }

    public detalhesCarreira() {
        var objeto = this._controlService.detalhesCarreira().subscribe(
            jogosDisputados => this.detalheCarreira = jogosDisputados
        );

        return objeto;
    }
}

interface DetalhesCarreira {
    dataInicial: any;
    dataFinal: any;
    jogosDisputados: number;
    totalPontosTemporada: number;
    mediaPontosJogos: number;
    maiorPontuacaoJogos: number;
    menorPontuacaoJogos: number;
    quantidadeVezesRecorde: number;
}