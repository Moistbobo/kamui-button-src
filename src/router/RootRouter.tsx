import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const RootRouter = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={() => <div>hello world</div>} />
      </Switch>
    </Router>
  </div>
);

export default RootRouter;
