import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer, CounterState } from './reducers/counter';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
    Counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
