import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Actions, increment } from '../../../store/actions';
import Button from 'react-bootstrap/Button';
import './counter.scss';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export interface Props {
    counter?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const Counter: React.FC<Props> = (props: Props) => {
    return (
        <div className="counter">
            <h1>Counter: {props.counter}</h1>
            <Button onClick={props.onIncrement}>+</Button>
        </div>
    );
};

export default Counter;
