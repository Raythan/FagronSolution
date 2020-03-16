import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlService } from '../services/controlservice.service';
import { DatePipe } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'fetchpontos',
    templateUrl: './fetchpontos.component.html'
})
export class FetchPontosComponent {
    public pontosList: ResultadoPartidaData[];

    constructor(public http: Http, private _router: Router, private _controlService: ControlService) {
        this.recuperaPartidas();
    }

    public recuperaPartidas() {
        this._controlService.recuperaPartidas().subscribe(
            dataPartida => this.pontosList = dataPartida
        );
    }

    public deletarPartida(Id) {
        var ans = confirm("Quer deletar a partida com id " + Id + "?");
        if (ans) {
            this._controlService.deletarPartida(Id).subscribe((data) => {
                this.recuperaPartidas();
            }, error => console.error(error))
        }
    }
}

interface ResultadoPartidaData {
    id: number;
    dataPartida: any;
    quantidadePontos: number;
}  