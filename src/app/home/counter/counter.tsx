import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from 'react-bootstrap/Button';
import './counter.scss';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { CounterState } from '../store/reducers/counterReducer';
import { decrementConterActionCreator, incrementConterActionCreatorAsync } from '../store/actionCreators';

export interface Props {}

const Counter: React.FC<Props> = (props: Props) => {
    const state: CounterState = useSelector((state: RootState) => state.CounterState);
    const dispatch = useDispatch();

    function handleIncrementCounter(): void {
        dispatch(incrementConterActionCreatorAsync());
    }

    function handleDecrementCounter(): void {
        dispatch(decrementConterActionCreator());
    }

    return (
        <div className="counter">
            <h1>Counter: {state.Counter}</h1>
            <span>
                {/* for testing purposes one button without thunk and one with thunk*/}
                <Button className="m-5" onClick={handleIncrementCounter}>
                    +
                </Button>
                <Button className="m-5" onClick={handleDecrementCounter}>
                    -
                </Button>
            </span>
        </div>
    );
};

export default Counter;
