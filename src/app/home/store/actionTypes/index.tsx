import * as constants from '../actions';

interface IncrementCounterActionType {
    type: constants.INCREMENT_COUNTER;
    payload: number;
}
interface DecrementCounterActionType {
    type: constants.DECREMENT_COUNTER;
    payload: number;
}

export type CounterActionTypes = IncrementCounterActionType | DecrementCounterActionType;
