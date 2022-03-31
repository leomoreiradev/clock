import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  date: Date | undefined;

  constructor(public infoService: InfoService) {}

  ngOnInit(): void {
    this.date = this.infoService.getInfo();
  }
}
