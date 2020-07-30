import { Injectable } from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {DateRange} from '../models/date-range';

@Injectable({
  providedIn: 'root'
})
export class DateRangeService extends EntityCollectionServiceBase<DateRange>{
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('DateRange', serviceElementsFactory);
  }
}
