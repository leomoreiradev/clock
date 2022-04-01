import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClockService } from '../service/clock.service';
import { Clock } from '../model/clock.model';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  clock: Clock;
  constructor(public clockService: ClockService) {}

  ngOnInit(): void {
    this.clock = this.clockService.getClock();
  }
}
