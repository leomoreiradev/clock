import { Component, Input, Output } from '@angular/core';
import { window } from 'rxjs';
import { Clock } from './model/clock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clockSpinner: Clock;
  load: boolean = true;

  loadComponent(): Boolean {
    setTimeout(() => {
      this.load = false;
    }, 1000);

    return this.load;
  }
}
