import React from 'react';
import './app.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/home';
import Project from './project/project';
import ProjectList from './project/project-list';
import CustomNavbar from './shared/navbar/customNavbar';

// typescript intros
//  https://www.sitepoint.com/react-with-typescript-best-practices/
//  https://www.youtube.com/watch?v=Z5iWr6Srsj8&ab_channel=BenAwad

const App: React.FC = () => {
    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/projects'} exact component={ProjectList} />
                <Route path={'/projects/:project'} exact component={Project} />
                <Redirect to={'/'} />
            </Switch>
        </div>
    );
};

export default App;
