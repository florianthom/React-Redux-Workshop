import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/common/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './store';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// create redux store
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App></App>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
