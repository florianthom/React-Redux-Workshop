import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../actions';
import './app.scss';
import { RootState } from './../../../store';

// typescript intros
//  https://www.sitepoint.com/react-with-typescript-best-practices/
//  https://www.youtube.com/watch?v=Z5iWr6Srsj8&ab_channel=BenAwad

function App(): JSX.Element {
    const counter: number = useSelector((state: RootState) => state.CounterState.Counter.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default App;
