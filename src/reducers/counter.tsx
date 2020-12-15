import * as constants from './../constants/actionTypes';
import { Actions } from './../actions/index';

export interface Counter {
    counter: number;
}

export type CounterState = Counter;

const initialState: Counter = {
    counter: 0,
};

export function counterReducer(state: CounterState = initialState, action: Actions): CounterState {
    switch (action.type) {
        case constants.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case constants.DECREMENT_COUNTER:
            return {
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}
