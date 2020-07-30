import {createAction, props} from '@ngrx/store';

export const calendarGenerate = createAction(
  'Calendar Generating',
  props<{data: any}>()
);
