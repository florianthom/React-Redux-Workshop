import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Actions, increment } from '../../store/actions';
import Button from 'react-bootstrap/Button';
import './home.scss';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import Counter from './counter/counter-component';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Counter></Counter>
        </div>
    );
};

export default Home;
