import { counterReducer } from './reducers/counter';
import { combineReducers } from 'redux';

// https://stackoverflow.com/questions/40874141/redux-relation-of-reducers-to-actions
// actions will be passed to each individual reducer which in fact decide if they want to do something
// with this actions (each action has its type-property -> the decision is based on that type with e.g. a switch/case)
export const rootReducers = combineReducers({
    CounterState: counterReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
