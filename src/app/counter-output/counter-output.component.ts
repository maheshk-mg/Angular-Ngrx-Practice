import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  count$!: Observable<number>;
  doubleCount$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit(): void {
    this.count$ = this.store.select(selectCount);
    this.doubleCount$ = this.store.select(selectDoubleCount);
    console.log('CounterOutputComponent ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('CounterOutputComponent ngOnDestroy called');
  }
}
