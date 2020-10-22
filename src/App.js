import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from '../src/constants/page';
import TestProject from '../src/pages/TestProject';
import Project from '../src/pages/Projects';

import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact render={(history) => <Project history={history} />} path='/projects' />
        <Route exact render={(history) => <TestProject history={history} />} path='/projects/test' />
        {
          Pages && Pages.map((page) => (
            <Route exact={page.isExact}
              render={() => page.component}
              path={page.path}
              key={page.path}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
