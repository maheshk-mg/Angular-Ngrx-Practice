import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { counterReducer } from './store/counter.reducer';
import { CounterEffects } from './store/counter.effects';
import { BrowserModule } from '@angular/platform-browser';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter:counterReducer
    }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
