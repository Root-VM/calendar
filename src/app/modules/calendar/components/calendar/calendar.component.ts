import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {DateRangeService} from '../../services/date-range.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  loading$: Observable<boolean>;
  dateRange: Array<any>;
  calendar$: Observable<any>;

  displayedColumns: string[] = ['name', 'data'];

  constructor( private rangeDateService: DateRangeService, private store: Store<any>) {
    this.loading$ = rangeDateService.loading$;
    this.calendar$ = this.store.select('calendar');
  }

  ngOnInit(): void {
    this.rangeDateService.entities$.subscribe(data => this.dateRange = data);
  }

}
