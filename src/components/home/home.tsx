import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { increment } from '../../actions';

function Home(): JSX.Element {
    const counter: number = useSelector((state: RootState) => state.CounterState.Counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

export default Home;
