import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {StoreModule} from '@ngrx/store';
import {calendarReducer} from './redux/calendar.reducer';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import {MatTableModule} from '@angular/material/table';
import { DateRangeModalComponent } from './components/date-range-modal/date-range-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import { InDateRangeDirective } from './directive/in-date-range.directive';
import {DateRangeService} from './services/date-range.service';


@NgModule({
  declarations: [MainWrapComponent, CalendarComponent, DateRangeModalComponent, InDateRangeDirective],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    StoreModule.forFeature('calendar', calendarReducer),
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [DateRangeService, MatDatepickerModule],
})
export class CalendarModule { }
