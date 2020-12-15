import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../actions';
import './app.scss';
import { RootState } from './../../../store';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from '../../home/home';
import Project from '../../project/project';
import ProjectList from '../../project/project-list';

// typescript intros
//  https://www.sitepoint.com/react-with-typescript-best-practices/
//  https://www.youtube.com/watch?v=Z5iWr6Srsj8&ab_channel=BenAwad

function App(): JSX.Element {
    return (
        <div className="App">
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/project'} exact component={ProjectList} />
                <Route path={'/project/:project'} exact component={Project} />
                <Redirect to={'/'} />
            </Switch>
        </div>
    );
}

export default App;
