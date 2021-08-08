import React from 'react';
import './RootRouter.scss';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from 'pages/Main';

const RootRouter = () => (
  <div className="main-router">
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  </div>
);

export default RootRouter;
