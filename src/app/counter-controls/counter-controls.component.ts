import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  standalone: false,
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {}

  increment() {
    this.store.dispatch(increment({ countValue: 10 }));
  }

  decrement() {
    this.store.dispatch(decrement({ decrementCount: 5 }));
  }
  reset() {
    this.store.dispatch(reset());
  }
}
