import {createReducer, on} from '@ngrx/store';
import * as moment from 'moment';
import {CalendarActions} from '../action-types';

interface CalendarState {
  calendar: any;
}

export const initialCalendarState: CalendarState = {
  calendar: undefined
};

export const calendarReducer = createReducer(

  initialCalendarState,
  on(CalendarActions.calendarGenerate, () => {
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
        data: monthGenerate('2020', m)
      };
    });

    return calendar;
  })
);
