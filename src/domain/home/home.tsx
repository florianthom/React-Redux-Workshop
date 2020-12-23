import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Actions, increment } from '../../store/actions';
import Button from 'react-bootstrap/Button';
import './home.scss';
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
    // how does thunk now if it being used or not (maybe used dispatch directly...)
    //  - similar question: What is the main difference to "non-thunk"
    //  - = example without thunk:  handleIncrementClick: () => dispatch({ type: 'INCREMENT' })
    //  -   example with thunk:     handleIncrementClick: () => dispatch(innerDispatch => innerDispatch({ type: 'INCREMENT' }))
    //      - main-difference: dispatch does not get/return a plain object but a function
    function incrementAsync(): ThunkResult<void> {
        // https://stackoverflow.com/questions/52977666/correct-typescript-type-for-thunk-dispatch
        return async (dispatch, getState) => {
            // const state = getState();
            // console.log(state.CounterState.Counter);
            // example async call: axios.get(`https://reqres.in/api/users`)
            setTimeout(() => {
                dispatch(increment());
            }, 0);
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
