import React from 'react';
import './app.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './domain/home/home';
import Project from './domain/project/project';
import ProjectList from './domain/project/project-list';
import CustomNavbar from './domain/shared/navbar/customNavbar';

// typescript intros
//  https://www.sitepoint.com/react-with-typescript-best-practices/
//  https://www.youtube.com/watch?v=Z5iWr6Srsj8&ab_channel=BenAwad

const App: React.FC = () => {
    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/project'} exact component={ProjectList} />
                <Route path={'/project/:project'} exact component={Project} />
                <Redirect to={'/'} />
            </Switch>
        </div>
    );
};

export default App;
