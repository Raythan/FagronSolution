import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ControlService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    public recuperaPartidas() {
        return this._http.get(this.myAppUrl + 'partidas')
            .map(res => res.json())
            .catch(this.errorHandler);
    }
    
    public adicionaPartida(partida) {
        return this._http.post(this.myAppUrl + 'partida/adiciona', partida)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    public deletarPartida(partidaId) {
        return this._http.delete(this.myAppUrl + "partida/" + partidaId + "/delete")
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    public detalhesCarreira() {
        return this._http.get(this.myAppUrl + 'detalhesCarreira')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}  