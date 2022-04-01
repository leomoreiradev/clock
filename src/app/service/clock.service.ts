import { Injectable } from '@angular/core';
import { Clock } from '../model/clock.model';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  clock: Clock = {
    hour: '00',
    minute: '00',
    second: '00',
  };

  constructor() {}

  getClock(): Clock {
    setInterval(() => {
      let hours = new Date();
      this.clock.hour =
        hours.getHours() < 10
          ? 0 + hours.getHours().toString()
          : hours.getHours().toString();

      this.clock.minute =
        hours.getMinutes() < 10
          ? '0' + hours.getMinutes().toString()
          : hours.getMinutes().toString();

      this.clock.second =
        hours.getSeconds() < 10
          ? 0 + hours.getSeconds().toString()
          : hours.getSeconds().toString();
    }, 1000);

    return this.clock;
  }
}
