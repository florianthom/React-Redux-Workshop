import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/common/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './store';

// create redux store
export const store = createStore(rootReducers, composeWithDevTools());

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your header, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
