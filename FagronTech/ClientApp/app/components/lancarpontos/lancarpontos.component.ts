import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlService } from '../services/controlservice.service';


@Component({
    selector: 'lancarpontos',
    templateUrl: './lancarpontos.component.html'
})
export class LancarPontosComponent implements OnInit{
    lancar_pontos_form: FormGroup;
    title: string = "Lançar Pontos.";
    errorMessage: any;
    cityList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _controlService: ControlService, private _router: Router) {

        this.lancar_pontos_form = this._fb.group({
            dataPartida: ['', [Validators.required]],
            quantidadePontos: ['', [Validators.required]]
        })
    }

    ngOnInit() {
    }

    salvarPontos() {

        if (!this.lancar_pontos_form.valid) {
            return;
        }

        if (this.title == "Lançar Pontos.") {
            this._controlService.adicionaPartida(this.lancar_pontos_form.value)
                .subscribe((dataPartida) => {
                    this._router.navigate(['/fetchpontos']);
                }, error => this.errorMessage = error)
        }
    }

    cancelar() {
        this._router.navigate(['/fetchpontos']);
    }

    get dataPartida() { return this.lancar_pontos_form.get('dataPartida'); }
    get quantidadePontos() { return this.lancar_pontos_form.get('quantidadePontos'); }
}