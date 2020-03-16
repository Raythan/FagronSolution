import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { LancarPontosComponent } from './components/lancarpontos/lancarpontos.component';
import { FetchPontosComponent } from './components/fetchpontos/fetchpontos.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        LancarPontosComponent,
        FetchPontosComponent,
        DetalhesComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'lancarpontos', component: LancarPontosComponent },
            { path: 'fetchpontos', component: FetchPontosComponent },
            { path: 'detalhes', component: DetalhesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
