import * as constants from '../actions';
import { CounterActionTypes } from '../actionTypes';

export interface CounterState {
    Counter: number;
}

const initialState: CounterState = {
    Counter: 0,
};

export function counterReducer(state: CounterState = initialState, action: CounterActionTypes): CounterState {
    switch (action.type) {
        case constants.INCREMENT_COUNTER:
            return {
                ...state,
                Counter: state.Counter + action.payload,
            };
        case constants.DECREMENT_COUNTER:
            return {
                ...state,
                Counter: state.Counter - action.payload,
            };
        default:
            return state;
    }
}
