import { counterReducer } from './reducers/counter';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
    Counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
