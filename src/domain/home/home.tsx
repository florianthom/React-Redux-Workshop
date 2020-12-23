import React from 'react';
import './home.scss';
import Counter from './counter/counter';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Counter></Counter>
        </div>
    );
};

export default Home;
