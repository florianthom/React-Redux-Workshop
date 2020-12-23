import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Button from 'react-bootstrap/Button';
import './counter.scss';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { CounterState } from '../store/reducers/counterReducer';
import { incrementAsync } from '../store/actions';

export interface Props {}

const Counter: React.FC<Props> = (props: Props) => {
    const state: CounterState = useSelector((state: RootState) => state.CounterState);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1>Counter: {state.Counter}</h1>
            <Button onClick={() => dispatch(incrementAsync())}>+</Button>
        </div>
    );
};

export default Counter;
