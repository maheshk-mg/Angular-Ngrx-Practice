import { createAction, props } from '@ngrx/store';

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ countValue: number }>());

export const increment = createAction(
  '[Counter] Increment',
  props<{ countValue: number }>(),
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{ decrementCount: number }>(),
);

export const reset = createAction('[Counter] Reset');
