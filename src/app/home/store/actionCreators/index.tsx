import * as constants from '../actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../store/store';
import { CounterActionTypes } from '../actionTypes';

// without thunk, used by thunk
// returns only 1 object
// with this you can call in view (if you dont want to use thunk):
// function onIncrementCounter(): Actions {
//     return dispatch(increment());
// }
//
// directly call actions
// dont use action-creators (redux thunk)
// synchronously
// in onClick: incrementAsync
export function incrementConterActionCreator(): CounterActionTypes {
    return {
        type: constants.INCREMENT_COUNTER,
        payload: 1,
    };
}

export function decrementConterActionCreator(): CounterActionTypes {
    return {
        type: constants.DECREMENT_COUNTER,
        payload: 1,
    };
}

type ThunkResult<R> = ThunkAction<R, RootState, undefined, CounterActionTypes>;

// redux-Thunk action-creator
// so it returns no action (aka single object) but a function which returns this action (object)
// "Redux Thunk middleware allows you to write action creators that return a function instead of an action."
// in onClick: () => dispatch(incrementAsync())
// how does thunk now if it being used or not (maybe used dispatch directly...)
//  - similar question: What is the main difference to "non-thunk"
//  - = example without thunk:  handleIncrementClick: () => dispatch({ type: 'INCREMENT' })
//  -   example with thunk:     handleIncrementClick: () => dispatch(innerDispatch => innerDispatch({ type: 'INCREMENT' }))
//      - main-difference: dispatch does not get/return a plain object but a function
export function incrementConterActionCreatorAsync(): ThunkResult<void> {
    // https://stackoverflow.com/questions/52977666/correct-typescript-type-for-thunk-dispatch
    return async (dispatch, getState) => {
        // const state = getState();
        // console.log(state.CounterState.Counter);
        // example async call: axios.get(`https://reqres.in/api/users`)
        //
        // dispatch(addTodoStarted());
        setTimeout(() => {
            dispatch(incrementConterActionCreator());
        }, 0);
        // .then(res=> {dispatch(addTodoSuccess)})
    };
}

export function decrementConterActionCreatorAsync(): ThunkResult<void> {
    return async (dispatch, getState) => {
        setTimeout(() => {
            dispatch(decrementConterActionCreator());
        }, 0);
    };
}
