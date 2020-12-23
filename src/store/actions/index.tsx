import * as constants from '../actionTypes/actionTypes';

interface IncrementCounter_Action {
    type: constants.INCREMENT_COUNTER;
    payload?: number;
}
interface DecrementCounter_Action {
    type: constants.DECREMENT_COUNTER;
    payload?: number;
}

export type Actions = IncrementCounter_Action | DecrementCounter_Action;

// returns only 1 object
export function increment(): Actions {
    return {
        type: constants.INCREMENT_COUNTER,
    };
}

export function decrement(): Actions {
    return {
        type: constants.DECREMENT_COUNTER,
    };
}
