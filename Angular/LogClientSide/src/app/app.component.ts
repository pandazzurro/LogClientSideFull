import { Component } from '@angular/core';
import { ApplicationInsightComponent } from './application-insight/application-insight.component';
import { JSNlogComponent } from './jsnlog/jsnlog.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
    }

    ngOnInit() {
    }
}
