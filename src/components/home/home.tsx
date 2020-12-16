import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { increment } from '../../actions';
import Button from 'react-bootstrap/Button';
import './home.scss';

function Home(): JSX.Element {
    const counter: number = useSelector((state: RootState) => state.CounterState.Counter);
    const dispatch = useDispatch();

    return (
        <div className="home">
            <h1>Counter: {counter}</h1>
            <Button onClick={() => dispatch(increment())}>+</Button>
        </div>
    );
}

export default Home;
