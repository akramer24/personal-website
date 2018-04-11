import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import { Main, NavBar, Home, About, Resume, AllProjects, Brackapptology, Bickr, Showdown } from './components';

export default function Routes(props) {

  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route exact path="/projects" component={AllProjects} />
          <Route path="/projects/mlb-showdown" component={Showdown} />
          <Route path="/projects/brackapptology" component={Brackapptology} />
          <Route path="/projects/bickr" component={Bickr} />
        </Switch>
      </Main>
    </Router>
  )
}
