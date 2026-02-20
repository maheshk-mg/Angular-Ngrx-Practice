import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(state => state.counter);
  }

  ngOnInit(): void {
    console.log('CounterOutputComponent ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('CounterOutputComponent ngOnDestroy called');
  }
}
