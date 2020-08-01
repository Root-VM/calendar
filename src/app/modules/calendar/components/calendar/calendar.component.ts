import { Component, OnInit } from '@angular/core';
import {DateRangeService} from '../../services/date-range.service';
import * as moment from 'moment';
import {Month} from '../../models/month';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  show = false;
  dateRange: Array<any>;
  calendar: Month[];

  displayedColumns: string[] = ['name', 'data'];

  constructor( private rangeDateService: DateRangeService) {}

  ngOnInit(): void {
    this.calendar = this.calendarGenerate('2020');
    this.rangeDateService.entities$.subscribe(data => {
      this.dateRange = data;
      this.show = false;
      setTimeout(() => this.show = true);
    });
  }

  calendarGenerate(calendarYear) {
    const days = Object.freeze([ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
    let calendar;

    // generate month
    const monthGenerate = (year, month) => {
      const result = [];
      const date = new Date(year, month, 1);

      while (date.getMonth() === month) {
        const fullDate = moment(new Date(year, month, date.getDate())).format('YYYY-MM-DD');

        result.push({ dayOfWeek: days[date.getDay()], day: date.getDate(), fullDate});
        date.setDate(date.getDate() + 1);
      }
      return result;
    };

    // generate year calendar from months
    calendar =  Array(12).fill(0).map((_, i) => i++).map(m => {
      return {
        name: moment().month(m).format('MMM'),
        data: monthGenerate(calendarYear, m)
      };
    });

    return calendar;
  }
}
