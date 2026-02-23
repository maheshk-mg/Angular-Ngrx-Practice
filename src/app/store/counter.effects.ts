import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { increment, decrement, set, init, reset } from './counter.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  private store = inject(Store<{ counter: number }>);

  loadCounter = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const savedCounter = localStorage.getItem('counterValue');
        return of(
          set({ countValue: savedCounter ? JSON.parse(savedCounter) : 0 }),
        );
      }),
    ),
  );

  saveCounter = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)), // Get the latest state of the counter
        tap(([action, counter]) => {
          console.log('Counter action dispatched:', action);
          localStorage.setItem('counterValue', counter.toString());
        }),
      ),
    { dispatch: false },
  );

  resetCounter = createEffect(
    () =>
      this.actions$.pipe(
        ofType(reset),
        tap(() => {
          localStorage.removeItem('counterValue');
        }),
      ),
    { dispatch: false },
  );
}
