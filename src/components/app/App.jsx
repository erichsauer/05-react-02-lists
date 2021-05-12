import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterListContainer from '../../containers/CharacterListContainer';
import CharacterDetailContainer from '../../containers/CharacterDetailContainer';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CharacterListContainer} />
      <Route path="/:id" component={CharacterDetailContainer} />
    </Switch>
  </Router>
);
