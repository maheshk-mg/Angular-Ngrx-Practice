import { tap, withLatestFrom } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { increment, decrement } from './counter.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);

  saveCounter = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.actions$), // Get the latest state of the counter
        tap((action) => {
          console.log('Counter action dispatched:', action);
          localStorage.setItem('counterValue', JSON.stringify(action));
        }),
      ),
    { dispatch: false },
  );
}
