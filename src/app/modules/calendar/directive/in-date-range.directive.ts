import {Directive, ElementRef, Input} from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appInDateRange]'
})
export class InDateRangeDirective {
  @Input('appInDateRange') set checkDateRange(val) {
    const date = moment(val.date).format('YYYY-MM-DD');
    const rangeStart = moment(val.range[0].beginFrom).format('YYYY-MM-DD');
    const rangeEnd = moment(val.range[0].endOn).format('YYYY-MM-DD');
    const element = this.el.nativeElement.classList;

    element.remove('range');
    element.remove('start-range');
    element.remove('end-range');

    // get current date
    if (date === moment().format('YYYY-MM-DD')) {
      element.add('current');
    }
    // range check
    if (date >= rangeStart && date <= rangeEnd) {
      element.add('range');
      if (date === rangeStart) element.add('start-range');
      if (date === rangeEnd) element.add('end-range');
    }
  }

  constructor(private el: ElementRef) { }

}
