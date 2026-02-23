import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from './store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Angular-Ngrx';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
