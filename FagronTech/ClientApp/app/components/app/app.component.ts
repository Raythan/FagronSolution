import { Component } from '@angular/core';
import { ControlService } from '../services/controlservice.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ControlService]
})
export class AppComponent {
}
