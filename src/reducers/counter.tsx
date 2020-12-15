import * as constants from './../constants/actionTypes';
import { Actions } from './../actions/index';

export interface Counter {
    counter: number;
}

export type CounterState = {
    Counter: Counter;
};

const initialState: CounterState = {
    Counter: {
        counter: 0,
    },
};

export function counterReducer(state: CounterState = initialState, action: Actions): CounterState {
    switch (action.type) {
        case constants.INCREMENT_COUNTER:
            return {
                ...state,
                Counter: {
                    ...state.Counter,
                    counter: state.Counter.counter + 1,
                },
            };
        case constants.DECREMENT_COUNTER:
            return {
                ...state,
                Counter: {
                    ...state.Counter,
                    counter: state.Counter.counter - 1,
                },
            };
        default:
            return state;
    }
}
