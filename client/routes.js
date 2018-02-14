import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import { Main, NavBar, Home, About, Resume, Projects } from './components';

export default function Routes(props) {
  const { children } = props;

  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Main>
    </Router>
  )
}
