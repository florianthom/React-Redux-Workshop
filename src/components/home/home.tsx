import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Actions, increment } from '../../actions';
import Button from 'react-bootstrap/Button';
import './home.scss';
import { Action, ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const Home: React.FC = () => {
    const counter: number = useSelector((state: RootState) => state.CounterState.Counter);
    const dispatch = useDispatch();

    // directly call actions
    // dont use action-creators (redux thunk)
    // synchronously
    // in onClick: incrementAsync
    function onIncrementCounter(): Actions {
        return dispatch(increment());
    }

    type ThunkResult<R> = ThunkAction<R, RootState, undefined, Actions>;

    // redux-Thunk action-creator
    // so it returns no action (aka single object) but a function which returns this action (object)
    // "Redux Thunk middleware allows you to write action creators that return a function instead of an action."
    // in onClick: () => dispatch(incrementAsync())
    function incrementAsync(): ThunkResult<void> {
        return async (dispatch: ThunkDispatch<RootState, void, Actions>, getState: () => RootState) => {
            // const state = getState();
            // console.log(state.CounterState.Counter);
            // example async call axios.get(`https://reqres.in/api/users`)
            setTimeout(() => {
                dispatch(increment());
            }, 500);
        };
    }

    return (
        <div className="home">
            <h1>Counter: {counter}</h1>
            <Button onClick={() => dispatch(incrementAsync())}>+</Button>
        </div>
    );
};

export default Home;
