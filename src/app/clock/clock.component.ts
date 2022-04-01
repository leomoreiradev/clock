import { Component, OnInit } from '@angular/core';
import { Clock } from '../model/clock.model';
import { ClockService } from '../service/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  clock: Clock | undefined;

  constructor(public clockService: ClockService) {}

  ngOnInit(): void {
    this.clock = this.clockService.getClock();
  }
}
