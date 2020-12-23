import React, { Dispatch } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import * as actions from '../../../store/actions';
import Button from 'react-bootstrap/Button';
import './home.scss';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import Counter from './counter-component';
import { Actions, increment } from '../../../store/actions';

export function mapStateToProps(storeState: RootState) {
    console.log('hi');
    return {
        counter: storeState.CounterState.Counter,
    };
}

// const counter: number = useSelector((state: RootState) => state.CounterState.Counter);
// const dispatch = useDispatch();
//
// function onIncrementCounter(): Actions {
//     return dispatch(increment());
// }
//
// type ThunkResult<R> = ThunkAction<R, RootState, undefined, Actions>;
//
// function incrementAsync(): ThunkResult<void> {
//     return async (dispatch, getState) => {
//         setTimeout(() => {
//             dispatch(increment());
//         }, 0);
//     };
// }

export function mapDispatchToProps(dispatch: Dispatch<actions.Actions>) {
    return {
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
