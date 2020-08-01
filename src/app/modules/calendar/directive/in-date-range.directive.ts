import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appInDateRange]'
})
export class InDateRangeDirective {
  @Input('appInDateRange') set checkDateRange(val) {
    for (const range of val.range) {
      this.checkRange(val, range);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2, private elementRef: ElementRef) { }

  checkRange(val, range) {
    const date = moment(val.date).format('YYYY-MM-DD');
    const rangeStart = moment(range.beginFrom).format('YYYY-MM-DD');
    const rangeEnd = moment(range.endOn).format('YYYY-MM-DD');

    // get current date
    if (date === moment().format('YYYY-MM-DD')) {
      this.el.nativeElement.classList.add('current');
    }
    // range settings
    const inRange = date >= rangeStart && date <= rangeEnd;
    if (inRange) {
      const el = document.createElement('span');
      el.classList.add('progress');
      this.renderer.appendChild(this.elementRef.nativeElement, el);

      if (date === rangeStart) el.classList.add('start-range');
      if (date === rangeEnd) el.classList.add('end-range');

      // is range type "sick leave"
      if (range.rangeType === 'sick leave') el.classList.add('sick');

      // is range cross Overlap
      if (date >= rangeStart && date <= rangeEnd) {
        for (let r in val.range) {
          const rangeStartL = moment(val.range[r].beginFrom).format('YYYY-MM-DD');
          const rangeEndL = moment(val.range[r].endOn).format('YYYY-MM-DD');
          const condition = (rangeStart <= rangeEndL) && (rangeEnd >= rangeStartL) &&
                            range.id !== val.range[r].id;

          if (condition) el.classList.add('cross' + Number(r) % 3 );
        }
      }
    }
  }

}
