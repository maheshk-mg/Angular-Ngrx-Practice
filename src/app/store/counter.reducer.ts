import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, set } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(set,(state,action)=> action.countValue),
    on(increment, (state, action) => state + action.countValue), // Use default value of 1 if countValue is missing
    on(decrement, (state, action) => {
        if (state === 0) {
            alert('Counter cannot go below zero');
            return state;
        }
        return state - action.decrementCount;
    }),
    on(reset, (state) => 0),
);

