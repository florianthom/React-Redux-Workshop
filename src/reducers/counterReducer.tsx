import * as constants from './../constants/actionTypes';
import { Actions } from './../actions/index';

export interface CounterState {
    Counter: number;
}

const initialState: CounterState = {
    Counter: 0,
};

export function counterReducer(state: CounterState = initialState, action: Actions): CounterState {
    switch (action.type) {
        case constants.INCREMENT_COUNTER:
            return {
                ...state,
                Counter: state.Counter + 1,
            };
        case constants.DECREMENT_COUNTER:
            return {
                ...state,
                Counter: state.Counter - 1,
            };
        default:
            return state;
    }
}
