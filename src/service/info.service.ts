import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  date: Date = new Date();

  getInfo(): Date {
    this.date.getFullYear();
    return this.date;
  }
}
